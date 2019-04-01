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



