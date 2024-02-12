let numeroSecreto = 0;//generarNumeroSecreto(); "esto fue sustiruido por la funcion condicionesIniciales"
let intentos = 0;//1; "esto fue sustituido por la funcion condicionesIniciales"
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* Console logs usados paara verificar funcionamiento
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    */
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número Secreto es menor.');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    /* Primera opción
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    Opción de codigo reducida
    */
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1; Linea sustituida para introducir arreglos.
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los nunmeros?
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se asignaron todos los números posibles.');
        document.querySelector('#intentar').setAttribute('disabled','true');
        document.querySelector('#valorUsuario').setAttribute('disabled','true');
    } else {
        //Si el numero generado está incluido en la lista:
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //generar numero aleatorio
    //inicializar el contador de intentos
    //deshabilitar botón de juego nuevo
}

condicionesIniciales();
