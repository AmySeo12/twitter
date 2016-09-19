window.onload=function() {
    var button = document.getElementById("button");
    button.addEventListener("click", function() {
    	var textArea = document.getElementById("textArea").value;
		var mensajes = document.getElementById("contenedor");
		var mensaje = document.createElement("div");

		mensaje.classList.add("cuadro");
		mensaje.innerHTML= textArea;

		mensajes.insertBefore(mensaje, mensajes.childNodes[0]);
		
		document.getElementById("textArea").value = "";
    });
    /*var text = document.getElementById("textArea");
    textArea.addEventListener("onKeyDown", function(){
    	var contador = text.value;
    	var caracteres = 150;
    	var longitud = contador.longitud;

    	if(longitud <= caracteres){
    });
*/
}