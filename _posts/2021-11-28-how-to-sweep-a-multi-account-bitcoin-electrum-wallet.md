---
layout: post
title: "How to sweep a multi-account Bitcoin Electrum wallet"
description: "How to sweep a multi-account Bitcoin Electrum wallet through Trezor if you can't export the mnemonic."
og_image: "og-image.jpg"
tags: [software-engineering, blockchain]
related_posts: ['/posts/how-to-become-better-at-reading-and-debugging-code']
subscription-form: true
---

It's easy to sweep one account in [Electrum](https://electrum.org/). Open the wallet with correct path following the HD wallet structure, which is `m / purpose' / coin_type' / account' / change / address_index`

For eg: `m/49'/0'/99'` if you want to access the 99th account under the current mnemonic.

Now if your funds are distributed across multiple addresses under multiple accounts (in the order of 10^5), you wouldn't want to do that in the Electrum app. It'll take days if not months.

## Let's get to hacking!

We will find all the unspent outputs (UTXOs), use them as inputs in a new transaction, sign the transaction and save the transaction hex in a file to broadcast manually.

We are going to work within the console provided by the Electrum app. So we have the liberty to use some of the functions to help make our solution simpler.

For the purpose of this example, let's assume we have 10^5 accounts and 10 addresses under each account. Here goes. At the time of this writing, I was using `trezor[hidapi]==0.12.2`

A rough Python script, but you get the idea. Follow along.

{% highlight python %}
from trezorlib import btc, messages, tools


MAX_ACCOUNTS = 100000
MAX_ADDRESSES = 10

def prepare_inputs_and_outputs():
    inputs = []
    txes = {}
    total_input = 0
    for account in range(MAX_ACCOUNTS + 1):
        for address_index in range(MAX_ADDRESSES + 1):
            address_path = f"m/49'/0'/{account}'/0/{address_index}"
            address_n = tools.parse_path(address_path)

            # wallet is available in electrum console
            client = wallet.keystore.get_client().client
            address = btc.get_address(client, "Bitcoin", address_n, False, script_type=btc.messages.InputScriptType.SPENDP2SHWITNESS)

            # getaddressunspent is available in electrum console, returns a list
            utxos = getaddressunspent(address)
            for utxo in utxos:
                # Example utxo
                # {
                #     "height": 691847,
                #     "tx_hash": "474764e6d7c70ca895c6f6d8c251ab24b1d8102800f575975710e35cc0c4a321",
                #     "tx_pos": 0,
                #     "value": 20000
                # }
                prev_hash = utxo["tx_hash"]
                prev_hash_b = bytes.fromhex(prev_hash)
                prev_index = int(utxo["tx_pos"])
                amount = utxo["value"]

                etx = deserialize(gettransaction(prev_hash))

                # Transforming data format, nothing outrageous, will explain later
                txes[prev_hash_b] = electrum_tx_to_trezor_tx(etx)

                txin = messages.TxInputType(
                    address_n=address_n,
                    prev_hash=prev_hash_b,
                    prev_index=prev_index,
                    amount=amount,
                    script_type=messages.InputScriptType.SPENDP2SHWITNESS,
                    sequence=0xFFFFFFFD,
                )
                inputs.append(txin)
                total_input += amount

    print(f"=== TOTAL INPUT IN SATOSHI ===: {total_input}")

    txn_size = len(inputs) * 110 # Using approx input size
    print(f"======= APPROX TX SIZE =======: {txn_size} bytes")

    # getfeerate is available in electrum console
    feerate_satbyte = getfeerate()
    feerate = feerate_satbyte // 1000

    fee = feerate * txn_size

    print(f"======== FEE IN SATS =========: {fee}")
    print(f"======= RECEIVER GETS ========: {total_input - fee}")

    outputs = [messages.TxOutputType(
        address=PAYTO_ADDRESS, # Use the address where you want to withdraw all the UTXOs
        amount=total_input - fee,
        script_type=messages.OutputScriptType.PAYTOADDRESS
    )]

    return inputs, txes, outputs
{% endhighlight %}

And here's the transformer function mentioned in the comments above.

{% highlight python %}
def electrum_tx_to_trezor_tx(tx_json):
    result = messages.TransactionType()
    result.version = tx_json["version"]
    result.lock_time = tx_json.get("locktime")
    inputs = []
    for row in tx_json["inputs"]:
        i = messages.TxInputType()
        i.prev_hash = bytes.fromhex(row["prevout_hash"])
        i.prev_index = row["prevout_n"]
        i.script_sig = bytes.fromhex(row["scriptSig"])
        i.sequence = row["nsequence"]
        inputs.append(i)
    result.inputs = inputs

    bin_outputs = []
    for row in tx_json["outputs"]:
        o = messages.TxOutputBinType()
        o.amount = int(row["value_sats"])
        o.script_pubkey = bytes.fromhex(row["scriptpubkey"])
        bin_outputs.append(o)
    result.bin_outputs = bin_outputs
    return result
{% endhighlight %}

And finally put these together to sign the transaction.

{% highlight python %}
def sweep_my_trezor_will_ya():
    coin = "Bitcoin"
    signtx = messages.SignTx(
        version = 2,
        lock_time = 0
    )

    client = wallet.keystore.get_client().client
    inputs, txes, outputs = prepare_inputs_and_outputs()
    status, serialized_tx = btc.sign_tx(client, coin, inputs, outputs, details=signtx, prev_txes=txes)
    print(f"========== TX HEX ===========: {serialized_tx.hex()}")
    with open('btc_tx_hex.txt', mode='w') as btc_tx_hex:
        btc_tx_hex.write(serialized_tx.hex())
{% endhighlight %}

To run this from within the Electrum console, you'll have to import the file and call the function.

Start electrum and load your Trezor wallet. Go to Electrum's console and load the script file. Do not forget to change the file path to the full path on your system.

{% highlight python %}
exec(open("/home/PATH_TO_YOUR_FILE/FILE_NAME.py").read())
{% endhighlight %}

Now run the command to generate a signed transaction. (Don't worry, it will not broadcast)

{% highlight python %}
sweep_my_trezor()
{% endhighlight %}

It'll take a while if you have many UTXOs. Be patient.

Once done, load the signed transaction hex through Electrum's import transaction functionality. Verify everything's correct and broadcast.
