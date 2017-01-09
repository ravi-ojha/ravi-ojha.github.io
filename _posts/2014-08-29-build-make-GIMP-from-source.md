---
layout: post
title: "Open Source: Build and install GIMP from source code"
description: "GNU Image Manipulation Program is one of the best open source projects out there as an alternative for PhotoShop. This post discusses how we can build and install GIMP from source code. I did it because I wanted to contribute to the project."
og_image: "documentation/rookieslab-og.jpg"
tags: [gimp, open-source]
redirect_from:
  - /2014/08/install-gimp-via-git-getting-started-contributing-to-GIMP.html
---

GNU Image Manipulation Program is one of the best open source projects out there as an alternative for PhotoShop. I used it extensively for every graphic design purpose. It is natural that once you know the product very well, one starts finding possible improvements in the product. I had a few in my list and as a developer I thought why not build them myself. Hence the idea of building GIMP from source code, so that I can make changes to source and start developing.

What follows is a step-by-step guide to build GIMP from source. This guide is tested on Ubuntu 14.04 32 bit. It is suggested to use the most recent version of your distro.

#### Step 1:

Let's create a directory where we will store all the clones or tar balls. Fire up the terminal and run the following commands. (I'd recommend not to close the terminal session until the installation is done)

{% highlight bash %}
mkdir -p ~/sourcefiles
cd ~/sourcefiles
{% endhighlight %}

####  Step 2:

Get the latest source code of GIMP from [https://git.gnome.org/browse/gimp](https://git.gnome.org/browse/gimp) using one of the following commands.

{% highlight bash %}
git clone git://git.gnome.org/gimp
{% endhighlight %}

This might take few minutes depending on connection speed. Feed your pet by the time its cloned.

####  Step 3:

Now, you wouldn't want GIMP you already have in your machine to interfere with the GIMP you're going to install. So let's set the path for the new GIMP.

{% highlight bash %}
prefix=/opt/gimp
export PATH=$prefix/bin:$PATH
export PKG_CONFIG_PATH=$prefix/lib/pkgconfig
export LD_LIBRARY_PATH=$prefix/lib
{% endhighlight %}

####  Step 4:

While compiling GIMP source code, you'll need lot of GIMP development dependencies. So let's install them first.

{% highlight bash %}
sudo apt-get build-dep gimp
{% endhighlight %}

This might take quite a while depending on connection speed. Go walk your pet in the meanwhile.

####  Step 5:

We also need `babl` and `gegl` packages before we start compiling GIMP source.

For `babl`:

{% highlight bash %}
cd ~/tmp
git clone git://git.gnome.org/babl
cd babl
./autogen.sh --prefix=$prefix
make
sudo make install
{% endhighlight %}

For `gegl`:

{% highlight bash %}
cd ~/tmp
git clone git://git.gnome.org/gegl
cd gegl
./configure --prefix=$prefix
make
sudo make install
{% endhighlight %}

####  Step 6:

Now we are ready to build GIMP from source.

{% highlight bash %}
cd ~/tmp/gimp
./configure --prefix=$prefix
{% endhighlight %}

Look out for any errors. You might be missing any dependencies or packages. Feel free to comment below if you face any difficulties and share how you solved it. I'll append your comment in the Issues and Resolves section below. If you can't figure out the resolve for your problem the GIMP community is always there to help. Join us on IRC. Server: GimpNet Channel: #gimp

Once it is compiled, run the following commands.

{% highlight bash %}
make
sudo make install
{% endhighlight %}

Time to test the product to make sure everything went well.

{% highlight bash %}
/opt/gimp/bin/gimp-2.9
{% endhighlight %}

Your version might be different according to the source. 2.9 was the latest source at the time of this writing. Welcome to the GIMP Developers' community :)

Disclaimer:

This guide was meant for beginners and has been made easy using the following sources:

 - [Martin Nordholts' Tutorial](http://www.chromecode.com/2009/12/best-way-to-keep-up-with-gimp-from-git_26.html)
 - [GimpUsers.com Tutorial](http://www.gimpusers.com/tutorials/compiling-gimp-for-ubuntu) (This link is down at the moment)

#### Issues and resolves:

The issues you might face solely depend on your system's state. You might be missing libraries that the latest source of GIMP needs.`sudo apt-get build-dep gimp` installs the libraries that are needed by the stable version of GIMP. The latest source code of GIMP might require more.

I faced following issues while compiling GIMP 2.9:

 1. Missing `gexiv2`. This [gnome wiki link](https://wiki.gnome.org/Projects/gexiv2/BuildingAndInstalling) should fix that. But make sure instead of `./configure --enable-introspection` run `./configure --prefix=$prefix --enable-introspection`
 2. While making the `gexiv2` package, `g-ir-scanner` was missing. This can be solved by `sudo apt-get install gobject-introspection`

Welcome to the world of Open Source!

[Evíva](http://en.wiktionary.org/wiki/evviva#Descendants)!
