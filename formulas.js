
const TXTAREA = document.querySelector("textarea");
const TXTCAJA = document.querySelector("txt-caja");
const mediaQuery = window.matchMedia('(min-width: 1060px)')

       
function encriptar(){
    var txtCaja = document.getElementById("txt-caja");
    var textoModificar = TXTAREA.value;
    var nuevoTxt = textoModificar.toLowerCase()
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

        if(textoModificar.length !== 0){
            document.getElementById("muñeco").style.display = "none";
            document.getElementById("msj-no-encontrado").style.display = "none";
            document.getElementById("instrucciones").style.display = "none";
            txtCaja.innerHTML = nuevoTxt;

        } else if (mediaQuery.matches) {

            document.getElementById("muñeco").style.display = "block";

        } else {
            txtCaja.innerHTML = "";
            document.getElementById("msj-no-encontrado").style.display = "block";
            document.getElementById("instrucciones").style.display = "block";
        }
    }

    function desencriptar(){
        var txtCaja = document.getElementById("txt-caja");
        var textoModificar = TXTAREA.value;
        var nuevoTxt = textoModificar.toLowerCase()
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        if(textoModificar.length !== 0){
            document.getElementById("muñeco").style.display = "none";
            document.getElementById("msj-no-encontrado").style.display = "none";
            document.getElementById("instrucciones").style.display = "none";
            txtCaja.innerHTML = nuevoTxt;
                
        } else if (mediaQuery.matches) {
            document.getElementById("muñeco").style.display = "block";
                
        } else {
            txtCaja.innerHTML = "";
            document.getElementById("msj-no-encontrado").style.display = "block";
            document.getElementById("instrucciones").style.display = "block";
        }    
    }

    function copiar(){
        var TXTCAJA = document.getElementById("txt-caja");
        var textoCopiar = TXTCAJA.innerHTML;
        navigator.clipboard.writeText(textoCopiar);
    }

      
    var selecBtnEncriptar = document.querySelector("#btn-encriptar");
    selecBtnEncriptar.onclick = encriptar;

    var selecBtnDesencriptar = document.querySelector("#btn-desencriptar");
    selecBtnDesencriptar.onclick = desencriptar;

    var selecBtnCopiar =  document.querySelector("#btn-copiar");
    selecBtnCopiar.onclick = copiar;