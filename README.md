### Website Performance Optimization portfolio project 4

To run this project, click on the index.html in your favorite browser.

To use ngronk:
1. Go to https://ngrok.com/ and download the file compatible with your system;

Step 2: Unzip it

On Linux or OSX you can unzip ngrok from a terminal with the following command. On Windows, just double click ngrok.zip.

$ unzip /path/to/ngrok.zip

Step 3: Run it!

Read the Usage Guide for documentation on how to use ngrok. Try it out by running it from the command line:

$ ./ngrok -help



####Part 1: Optimize PageSpeed Insights score for index.html

Evaluated index.html into Google PageSpeed Insights, with the results:

28 / 100Speed for Mobile
30 / 100 for Desktop

Suggestions:

#####Optimize images

Properly formatting and compressing images can save many bytes of data.
Optimize the following images to reduce their size by 2.3MiB (99% reduction).

Compressing and resizing views/images/pizzeria.jpg could save 2.3MiB (99% reduction).

Losslessly compressing /img/profilepic.jpg could save 9.5KiB (67% reduction).
Hide details


#####Eliminate render-blocking JavaScript and CSS in above-the-fold content

Your page has 1 blocking script resources and 3 blocking CSS resources. This causes a delay in rendering your page.

None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML.

Remove render-blocking JavaScript:
http://www.google-analytics.com/analytics.js

Optimize CSS Delivery of the following:
http://fonts.googleapis.com/css?family=Open+Sans:400,700
/css/style.css
/css/print.css

#####Solutions:

Used instructions from https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css?hl=en for render blocking CSS.

https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Project%204%20Overview

* Used ImageAlpha (https://pngmini.com/) and ImageOptim (https://imageoptim.com/howto.html) to losslessly compress images; Also resized images to better fit provided layout.
* Resized pizzaria.jpg and linked it from the page into the smaller version.
* Minified and inlined critical CSS inside the head area.
* Added media="print" to print.css
* Added media="all" to style.css
* Moved all script and CSS tags to the bottom of the page.

New evaluation of index.html file:

97 / 100Speed for Mobile
98 / 100 for Desktop



####Part 2: Optimize Frames per Second and Pizza Size in pizza.html


Used Chrome Canary, with the “Developer Tools experiments” enabled in about:flags. and in icognito mode:

Forced reflow is a likely performance bottleneck.
Self Time 0.10 ms
Total Time 0.10 ms
Elements Affected 1
Call Stacks
Recalculation Forced updatePositions	@	main.js:508
First Invalidated updatePositions	@	main.js:509


Forced reflow is a likely performance bottleneck.
Self Time 0.07 ms
Total Time 0.07 ms
Elements Affected 2
Call Stacks
Recalculation Forced determineDx	@	main.js:426
First Invalidated changePizzaSizes	@	main.js:456


Information from:

* https://developer.chrome.com/devtools/docs/device-mode

* https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts

* https://discussions.udacity.com/t/project-4-how-do-i-optimize-the-background-pizzas-for-loop/36302

* https://www.udacity.com/course/viewer#!/c-ud860-nd/l-4147498575/e-4154208580/m-4240308553

* https://www.udacity.com/course/viewer#!/c-ud860/l-4147498575/e-4154208580/m-4142388616

* https://discussions.udacity.com/t/not-sure-if-consistently-over-60fps/157491


File pizza.html shows signs of jank:

main.js:494Average time to generate last 10 frames: 41.31050000000687ms

Time to resize pizzas: 77.00500000000011ms

#####Solutions for the FPS and pizza resize issues

* Reduced the amount of generated pizzas on the screen
* Reduced number of pizza columns
* Used getElementsByClassName instead of querySelectorAll
* Optimized pizza.png with Adobe Photoshop
* Pizza containers are the same size, placed out of the loop
* Moved document.body.scrollTop out of the loop and assigned to var pizzaTop to increase speed
* Minified main.js

New results:

New evaluation of pizza.html.html file: Average time to generate last 10 frames: 0.4514999999992142ms

Time to resize pizzas: 0.8649999999997817ms

