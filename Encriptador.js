function encriptar (){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase(); /*towercase hace que las letras ingresadas mayusculas sean minusculas internamente*/

    var textoEncriptado = frase.replace(/e/img, "enter"); /*replace remplaza la letra que es entre las diagonales "en este caso la "e"" y la remplza por "enter" y el img son las iniciales de: i = toma las letras minusculas y mayusculas, m = toma en cuenta multiples lineas o parrafos y g = toma en cuenta una sola linea o parrafo*/
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");/*la razon por la que no se repite "frase" es por que la variable "textoencriptado" con una vez que sea igual a "frase" quedan ligados y se ponemos mas frase ese valor del replace se va a actualizar y solo aceptara el ultimo replace que creemos*/
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado; /*innerhtml hace que tome los datos de "textoEncriptado" y los manda a "textoDesencriptado"*/

    document.getElementById("copiar").style.display = "show"; /*selecionamos al boton copiar y le asignamos unos estilos (los estilos solo se daran cuando a la funcion se le llame)*/ 

    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";
    document.getElementById("noSeEncontro").style.display = "none";

}

function desencriptar (){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase(); 

    var textoEncriptado = frase.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado; /*innerhtml hace que tome los datos de "textoEncriptado" y los manda a "textoDesencriptado"*/

    document.getElementById("copiar").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";/*inherit es indispensable para que el contenido al ser mostrado se adapte a su contenedor*/
    document.getElementById("noSeEncontro").style.display = "none";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar (){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select(); /*"Select" selecciona el contenido del "#textoDesencriptado"*/
    document.execCommand("copy"); /*execCommand ejecuta un comando que le indiquemos con comillas (tiene barios comandos como cut, paste, copy)*/

}