// SWITCH THE LIGHT
// Ejercicio para practicar
// condicional en funcion, operador lógico: negacion

// Tenemos una bombilla apagada que necesitamos encender
//el interrupto .switch sea lo que apaga y enciende la luz cuando lo cliquemos
// vamos a empezar comentando el condicional, para que no nos moleste, pero sin perderlo

// AYUDA: vamos a hacerlo juntas, paso a paso

// Declaramos las variables para la luz y la energía
const light = document.querySelector('.light');
let power = true;

// Declaremos una cosntante para llamar al interruptor
const switchLight = document.querySelector('.switch');

// hacemos una función que tenga un condicional, parecido al que acabamos de hacer, pero que solo funcione cunado le llamemos
function turnPower() {
  // para prácticar la negación vamos a invertir el condicinal del ejercicio anterior
  // para ello dediremos que si power es negativo (!power) la luz se apage, si no se encienda
  if (!power) {
    //Necesitaremos crear el booleano dentro del condicional, de manera que cuando sea verdadero lo transformemos a falso y viceversa
    power = true;
    light.classList.add('off');
    //si en algún punto el interruptor se "atasca", puede que necesitemos eliminar las clases que no sean necesarias
    light.classList.remove('on');
  } else {
    power = false;
    light.classList.add('on');
    light.classList.remove('off');
  }
}

//ya casi está, solo necesitamos añadir el evento "click" que permita que el botón funcione
switchLight.addEventListener('click', turnPower);
