let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;
//Realizado por Miguel Alquinta
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario>numeroSecreto){
          asignarTextoElemento('p', 'Número secreto es menor, intenta nuevamente');
        }
        else{
            asignarTextoElemento('p', 'Número secreto es mayor, intenta nuevamente');
        }
        intentos++;
        limpiarCaja();
    }
return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número Secreto');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos lon números posibles');

    }else {
        let numeroGenerado =  Math.floor(Math.random() * numeroMaximo)+1; 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            console.log(listaNumerosSorteados);
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
