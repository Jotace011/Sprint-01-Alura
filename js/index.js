function encriptar(){
    let frase = document.getElementById("encriptar").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");


    document.getElementById("texto").innerHTML =textoEncriptado;
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('btn3').style.display = 'inline';
    document.getElementById('texto').style.display = 'inline';
}

function desencriptar(){
    let frase = document.getElementById("encriptar").value.toLowerCase();

    var textoEncriptador = frase.replace(/enter/img,"e");
    var textoEncriptador = textoEncriptador.replace(/ober/img,"o");
    var textoEncriptador = textoEncriptador.replace(/imes/img,"i");
    var textoEncriptador = textoEncriptador.replace(/ai/img,"a");
    var textoEncriptador = textoEncriptador.replace(/ufat/img,"u");

    document.getElementById("texto").innerHTML =textoEncriptador;
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('texto').style.display = 'inline';
    document.getElementById('btn3').style.display = 'inline';
}

function copiar(){
    let contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("copy");
}

let btn1 = document.querySelector("#btn1");
btn1.onclick = encriptar;
let btn2 = document.querySelector("#btn2");
btn2.onclick = desencriptar;
let btn3 = document.querySelector("#btn3");
btn3.onclick = copiar;