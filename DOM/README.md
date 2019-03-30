# DOM
* How to traverse and manipulate the DOM is important, and this is where most candidates struggle if they have been depending on jQuery or have been writing a lot of React & Angular type apps recently. You might not do this on a daily basis since most of us are using an abstraction of sorts, but without using a library you should know how to do the following:
* Performance – touching the DOM can be expensive when you have many nodes, you should at least know about document fragments and node caching.
* Manipulation – add, remove, copy, and create nodes in the DOM tree. You should know operations such as how to change the text content of a node and toggle, remove or add a CSS classname.

## Walking the DOM

1. document
2. document.documentElement <HTML>
3. document.body (if it is inside body) document.head (if it is inside head)
4. parentNode
5. previousSibling <==DIV==> nextSibling
6. firstChild  <==(childNodes)==> lastChild  

elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

## DOM collections

1. We can use for ..of to iterate over it.
 * for (let node of document.body.childNodes){
      alert(node);//shows all the nodes from collection
}

2. Array methods won’t work, because it’s not an array:
* Alert(document.body.childNodes.filter); // undefined (there's no filter method!)
* Alert( Array.from(document.body.childNodes).filter ); // now it's there

## Siblings and the parent

<!DOCTYPE html>
<html><head></head><body><script>
  // HTML is "dense" to evade extra "blank" text nodes.

  // parent of <body> is <html>
  alert( document.body.parentNode === document.documentElement ); // true

  // after <head> goes <body>
  alert( document.head.nextSibling ); // HTMLBodyElement

  // before <body> goes <head>
  alert( document.body.previousSibling ); // HTMLHeadElement
</script></body></html>

## Element-only navigation

## More links: tables
* Till now we described the basic navigation properties.
Certain types of DOM elements may provide additional properties, specific to their type, for convenience.
Tables are a great example and important particular case of that._

## SUMMARY
* Given a DOM node, we can go to its immediate neighbours using navigation properties.
* There are two main sets of them:
* For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
* For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
