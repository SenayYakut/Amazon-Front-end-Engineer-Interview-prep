< !DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Scope</h2>

            <p>A GLOBAL variable can be accessed from any script or function.</p>

            <p id="demo"></p>

            <script>
                var carName = "Volvo";
                myFunction();
                
function myFunction() {
                    document.getElementById("demo").innerHTML = "I can display " + carName;
                }
</script>

        </body>
    </html>



