# What is HTTP?
* The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

* HTTP works as a request-response protocol between a client and server.

* A web browser may be the client, and an application on a computer that hosts a web site may be the server.

## HTTP Methods
* GET
* POST
* PUT
* HEAD
* DELETE
* PATCH
* OPTIONS

## The GET Method
* GET is used to request data from a specified resource.
  * GET requests can be cached
  * GET requests remain in the browser history
  * GET requests can be bookmarked
  * GET requests should never be used when dealing with sensitive data
  * GET requests have length restrictions
  * GET requests is only used to request data (not modify)
  
## The POST Method
* POST is used to send data to a server to create/update a resource.
  * POST requests are never cached
  * POST requests do not remain in the browser history
  * POST requests cannot be bookmarked
  * POST requests have no restrictions on data length

## The PUT Method
* PUT is used to send data to a server to create/update a resource.
* The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.
## The HEAD Method
* HEAD is almost identical to GET, but without the response body.
* In other words, if GET /users returns a list of users, then HEAD /users will make the same request but will not return the list of users.
* HEAD requests are useful for checking what a GET request will return before actually making a 

## The DELETE Method
* The DELETE method deletes the specified resource.
 
## The OPTIONS Method
* The OPTIONS method describes the communication options for the target resource.

# HTTP Caching
* Fetching something over the network is both slow and expensive. Large responses require many roundtrips between the client and server, which delays when they are available and when the browser can process them, and also incurs data costs for the visitor. As a result, the ability to cache and reuse previously fetched resources is a critical aspect of optimizing for performance.
* The performance of web sites and applications can be significantly improved by reusing previously fetched resources. Web caches reduce latency and network traffic and thus lessen the time needed to display a representation of a resource. By making use of HTTP caching, Web sites become more responsive.

* A private cache is dedicated to a single user. You might have seen "caching" in your browser's settings already. A browser cache holds all documents downloaded via HTTP by the user. This cache is used to make visited documents available for back/forward navigation, saving, viewing-as-source, etc. without requiring an additional trip to the server. It likewise improves offline browsing of cached content.

* A shared cache is a cache that stores responses to be reused by more than one user. For example, an ISP or your company might have set up a web proxy as part of its local network infrastructure to serve many users so that popular resources are reused a number of times, reducing network traffic and latency.

## What Is A REST API
* Let’s say you’re trying to find videos about Batman on Youtube. You open up Youtube, type “Batman” into a search field, hit enter, and you see a list of videos about Batman. A REST API works in a similar way. You search for something, and you get a list of results back from the service you’re requesting from.
## What is API?
* An API is an application programming interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

## What Is REST?
* REST determines how the API looks like. It stands for “Representational State Transfer”. It is a set of rules that developers follow when they create their API. One of these rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.

Each URL is called a **request** while the data sent back to you is called a **response.**
### The Anatomy Of A Request
1. The endpoint
2. The method
3. The headers
4. The data (or body)

# What Is Web Security?
* Ensuring that your website or open web application is secure is critical. Even simple bugs in your code can result in private information being leaked, and bad people are out there trying to find ways to steal data. The web security oriented articles listed here provide information that may help you secure your site and its code from attacks and data theft.
1. Information Security Basics
2. Insecure passwords
3. Mixed content
4. Referer header: privacy and security concers
5. Same-origin policy
6. Secure contexts
7. Security your site
8. Site Identity Button
9. Subresource Integrity
10. Transport Layer Security
11. Weak signature algorithms




