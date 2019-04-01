# WEB Performance
## Critical rendering path:
* Optimizing for performance is all about understanding what happens in these intermediate steps between receiving the HTML, CSS, and JavaScript bytes and the required processing to turn them into rendered pixels **that's the critical rendering path.**
## Service Workers:
* A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. 
* The core feature is the ability to intercept and handle network requests.
* The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over the experience.
* It's a JavaScript Worker, so it can't access the DOM directly.
* Service workers make extensive use of promises, so you should know JavaScript promises
## Image optimizations:
* Image optimization is about reducing the file size of your images as much as possible without sacrificing quality so that your page load times remain low. It’s also about image SEO. That is, getting your product images and decorative images to rank on Google and other image search engines.

1.Name your images descriptively and in plain language.

2.Optimize your alt attributes carefully.

3.Choose your image dimensions and product angles wisely.

4.Reduce the file size of your images.

5.Choose the right file type.

6.Optimize your thumbnails.

7.Use image sitemaps.

8.Beware of decorative images.

9.Use caution when using content delivery networks (CDNs).

10.Test your images.

## Lazy loading and bundle splitting:
* Lazy, or "on demand", loading is a great way to optimize your site or application. This practice essentially involves splitting your code at logical breakpoints, and then loading it once the user has done something that requires, or will require, a new block of code. This speeds up the initial load of the application and lightens its overall weight as some blocks may never even be loaded.
## General implications of HTTP/2 and server-push:
* HTTP/2 Server Push allows an HTTP/2-compliant server to send resources to a HTTP/2-compliant client before the client requests them. It is, for the most part, a performance technique that can be helpful in loading resources pre-emptively.
## When to prefetch and preload resources:
* Resource Prioritization – Getting the Browser to Help You
## Reduce browser reflows and to promote and element to the GPU(graphics processing unit):
1. Use the best practice layout techniques.
2. Minimize the number of css rules
3. Minimize DOM depths
4. Update Classes Low in the DOM Tree
5. Remove Complex Animations from the flow
6. Modify Hidden Elements
7. Update Elements in Batch
8. Limit the affected elements
9. Recognize that smoothness compromises performance
10.Analyze repaint issues withbrowser tools

## Differences between the browser layout, compositing and painting:
* **Layout:** Browser will determine how much space each element takes up and where to place it.

* **Painting:** This is the process of filling in pixels. It involves drawing out elements.

* **Compositing:** Browser draws element to the screen in the correct order so the page renders correctly.


