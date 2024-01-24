let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     
     console.log(numeroGenerado);
     console.log(listaNumeroSorteado);

     if ( listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números');

     }else{
        if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();

     }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
     }

     
     }
    
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'orpotunidad' : 'orpotunidades'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = ''; 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Ingresa un número del 1 al '+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}
function reiniciarJuego() {
    
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');


    
    
}
condicionesIniciales();


