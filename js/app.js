window.onload=function() {
	var contador = document.getElementById("contador");
    var button = document.getElementById("button");
    button.addEventListener("click", function(e) {
    	e.preventDefault();
    	var text = document.getElementById("textArea");
		agregarMensajes(text.value);
		text.value = "";
		contador.textContent= "";
    });

    function agregarMensajes(texto){
		var mensajes = document.getElementById("contenedor");
		var mensaje = document.createElement("div");
		mensaje.classList.add("cuadro");
		mensaje.innerHTML= texto;
		mensajes.insertBefore(mensaje, mensajes.childNodes[0]);
    }
    var max = 140;
    var publicacion =  document.getElementById("textArea");
    publicacion.addEventListener("keyup", function(){
    	var boton = document.getElementById("button");
    	var longitud = this.value.length;

    	if (this.value.length >0 )
    		boton.disabled= false;
    	else
    		boton.disabled=true;

    	contadorText(longitud,contador,max);
    	colocarColor(longitud, max, contador, boton);
    });

    function contadorText(longitud, contador, max){
    	if(longitud <= max)
    		contador.textContent = max - longitud;
    	else
    		contador.textContent = max -longitud;
    }
    function colocarColor(longitud, max, contador, boton){
    	if(longitud > max){
    		contador.style.color="red";
    		boton.disabled = true;
    	}
    	else if(longitud >= 130){
    		contador.style.color= "#8E0404";
    		boton.disabled = false;
    	}
    	else if(longitud >= 120){
    		contador.style.color= "blue";
    		boton.disabled = false;
    	}
    	else{
    		contador.style.color= "black";
    		boton.disabled = false;
    	}
    }
}