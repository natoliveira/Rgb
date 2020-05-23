var input = document.querySelectorAll("input");

            for(var i = 0; i < input.length; i++){
                input[i].addEventListener("input", function(){
                    var red = document.getElementById("red").value,
                        green = document.getElementById("green").value,
                        blue = document.getElementById("blue").value;

                    var display = document.getElementById("display");
                    display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

    });

}