// Hoisting is JavaScript's default behavior of moving declarations to the top.
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.
EXAMPLE:
< !DOCTYPE html >
    <html>
        <body>

            <p id="demo"></p>

            <script>
                x = 5; // Assign 5 to x
                
                elem = document.getElementById("demo"); // Find an element
                elem.innerHTML = x;           // Display x in the element
                
                var x; // Declare x
</script>

        </body>
    </html>

EXAMPLE:
< !DOCTYPE html >
    <html>
        <body>

            <p id="demo"></p>

            <script>
                var x; // Declare x
                x = 5; // Assign 5 to x
                
                elem = document.getElementById("demo"); // Find an element
                elem.innerHTML = x;           // Display x in the element
</script>

        </body>
    </html>

//Variables defined with let are not hoisted to the top.

//Using a let variable before it is declared will result in a ReferenceError.

//The variable is in a "temporal dead zone" from the start of the block until it is declared:

