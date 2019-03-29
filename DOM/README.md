# DOM
* How to traverse and manipulate the DOM is important, and this is where most candidates struggle if they have been depending on jQuery or have been writing a lot of React & Angular type apps recently. You might not do this on a daily basis since most of us are using an abstraction of sorts, but without using a library you should know how to do the following:

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


alert(document.body.childNodes.filter); // undefined (there's no filter method!)
alert( Array.from(document.body.childNodes).filter ); // now it's there


  
