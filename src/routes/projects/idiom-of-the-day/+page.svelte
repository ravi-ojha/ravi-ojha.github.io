<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'

  const title = 'Idiom of the Day'
  const description = 'A Chrome extension that helps you learn one idiom every day. Expand your vocabulary and master the art of language.'
  const ogImage = 'https://rookieslab.com/projects/idiom-of-the-day/og-image.jpg'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<PageHead {title} {description} {ogImage} />

<main class="idiom-page">
  <header class="mb-6">
    <h2>IDIOM OF THE DAY</h2>
    <h3>Consume an idiom, one in every 24 hours!</h3>
  </header>

  <section id="idiom-demo" class="mb-6">
    <img src="/projects/idiom-of-the-day/idiom-of-the-day-v0.3.gif" alt="Idiom of the Day Demo" title="Idiom of the Day Demo">
  </section>

  <section id="idiom-why">
    <h2>WHY?</h2>
    <p class="mt-4 leading-tight">The idea hit me while I was reading The Martian by Andy Weir. Rich Purnell, a character in the book, is portrayed as an autistic person, having difficulty in understanding the meaning of the abstract concepts of the language. So here goes, a chrome extension that would help me and the likes of Rich Purnell become better at such play of words. Concept is to show one idiom per day, so that it gets hard-wired in our memory.</p>
  </section>

  <section id="idiom-div-for-hackers" class="hidden">
    <h2>FOR HACKERS</h2>
    <p class="mt-4 leading-tight">Concept is to show one idiom per day. So that it gets hard-wired in our memory. The data is stored in browser local storage for the day, after the first network call. Also, in the first network call, it fetches data from memcache. Everyone in the world will see only one particular idiom on a given day. You get it right? If the memcache hit misses, then I read from database and set it in memcache for 48 hours (24 + 24 buffer for the entire world clock).</p>
  </section>

  <section id="idiom-cta" class="idiom-cta">
    <a href="https://chrome.google.com/webstore/detail/idioms-and-phrases/ddmdooeeiphjmbcoaonbbkcadneggphh/" target="_blank" rel="noopener noreferrer" class="button add">Add to Chrome</a>
  </section>

  <footer>
    <div class="right-footer">
      Maintained by <a href="/" target="_blank">Ravi Ojha</a>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    font-family: "Old Standard TT", serif;
    font-weight: 400;
  }

  .idiom-page {
    margin-top: 40px;
    max-width: 960px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
  }

  h2 {
    font-size: 26px;
    font-weight: 100;
    color: #ccc;
    letter-spacing: 1px;
    font-family: Arial, Helvetica, sans-serif;
  }

  h3 {
    font-size: 22px;
    font-weight: 100;
  }

  p {
    font-size: 20px;
  }

  .idiom-demo img {
    width: 80%;
    max-width: 100%;
  }

  .idiom-cta {
    margin: 40px 0;
  }

  footer {
    margin-top: 30px;
    font-size: 12px;
    color: #ccc;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    padding-bottom: 40px;
  }

  footer a {
    cursor: pointer;
    text-decoration: none;
    color: #ccc;
  }

  footer a:visited {
    cursor: pointer;
    text-decoration: none;
    color: #ccc;
  }

  footer a:focus {
    cursor: pointer;
    text-decoration: none;
    color: #ccc;
  }

  footer a:hover {
    cursor: pointer;
    text-decoration: none;
    color: #aaa;
  }

  .button {
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    background-color: #ccc;
    background-image: linear-gradient(to bottom, #eee, #ccc);
    border: 1px solid #777;
    padding: 0 1.5em;
    font: bold 1em/2em Arial, Helvetica, sans-serif;
    text-decoration: none;
    color: #333;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
    border-radius: 0.2em;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.8) inset, 0 1px 0 rgba(0, 0, 0, 0.3);
  }

  .button:hover {
    background-color: #ddd;
    background-image: linear-gradient(to bottom, #fafafa, #ddd);
  }

  .button:active {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3) inset;
    position: relative;
    top: 1px;
  }

  .button:focus {
    outline: 0;
    background: #fafafa;
  }

  .button:before {
    background: #ccc;
    background: rgba(0, 0, 0, 0.1);
    float: left;
    text-align: center;
    font-size: 1.5em;
    margin: 0 1em 0 -1em;
    padding: 0 0.2em;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), 2px 0 0 rgba(255, 255, 255, 0.5);
    border-radius: 0.15em 0 0 0.15em;
    pointer-events: none;
  }

  .add:before {
    content: "\271A";
    font-size: 1.5em;
  }

  /* Dark mode support */
  :global(.dark) .idiom-page h3,
  :global(.dark) .idiom-page p {
    color: #e5e5e5;
  }
</style>
