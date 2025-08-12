const div = document.getElementById("divUno");
 div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});
const fueraDiv = document.getElementById("boton");
fueraDiv.addEventListener("click", function(event) {
    event.stopPropagation(); 
    alert("Fuera la propagación del div");
});

