window.onload=function() {
    var conta = 1;
	var contador = document.getElementById("contador");
    var button = document.getElementById("button");
    button.addEventListener("click", function(e) {
    	e.preventDefault(); 
    	var text = document.getElementById("textArea");
		agregarMensajes(text.value);
        text.value.replace(/\n/g, "<br>");
		text.value = "";
		contador.textContent= "140";
        button.disabled= true;
        button.classList.remove("background");
        var span = 
        document.getElementById("tweets").innerHTML= conta;
        conta ++;
        textArea.setAttribute("rows", 3);
    });

    function agregarMensajes(texto){
		var mensajes = document.getElementById("contenedor");
		var mensaje = document.createElement("div");
		mensaje.classList.add("cuadro");
		mensaje.innerHTML= texto;
		mensajes.insertBefore(mensaje, mensajes.childNodes[0]);
        var horaActual = new Date ();
        var hora = horaActual.getHours();
        var minuto = horaActual.getMinutes();
        var span = document.createElement("h5");
        span.innerHTML= hora + ":"+ minuto;
        mensaje.insertBefore(span, mensaje.childNodes[0]);
    }
    var max = 140;
    var publicacion =  document.getElementById("textArea");
    publicacion.addEventListener("keyup", function(){
    	var boton = document.getElementById("button");
    	var longitud = this.value.length;
    	var breakLines = this.value.match(/\n/g);

    	if (this.value.trim().length == 0){
    		boton.disabled= true;
            boton.classList.remove("background");
        }
    	else{
    		boton.disabled= false;
            boton.classList.add("background");
        }

    	contadorText(longitud,contador,max);
    	colocarColor(longitud, max, contador, boton);
        calcularRows(publicacion);
        heightTextArea();

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
    		contador.style.color= "green";
    		boton.disabled = false;
    	}
    	else if(longitud >= 120){
    		contador.style.color= "blue";
    		boton.disabled = false;
    	}
    	else
    		contador.style.color= "grey";
    }

    function heightTextArea () {
        var texto = document.getElementById("textArea");
        var breakLines = texto.value.match(/\n/g);

        if(breakLines){
            var breaks = breakLines.length > 2 ? breakLines.length + 1 : 3;
            texto.setAttribute("rows", breaks);
        } 
    }

    function calcularRows(publicacion){
        var rows = publicacion.getAttribute("rows");
        var cols = publicacion.getAttribute("cols");
        var producto = cols * rows;
        if(publicacion.value.length >= producto){
            publicacion.setAttribute("rows", parseInt(rows)+1);
        }else
            publicacion.setAttribute("rows", rows);
        /*publicacion.style.cssText = "height:auto; padding: 0";
        publicacion.style.cssText = "height:" + publicacion.scrollHeight + "px";*/
    }
}