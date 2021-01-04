// CHANGE COLORS 2
// Ejercicio para practicar
// funciones y eventos

// En este ejercico vamos a hacer que el color, el nombre del color y el color del nombre
// cambien de color cunado pulsemos los botones de los distintos colores

// lo primero de todo, declarar las constantes
// de los elementos que van a cambiar
const block = document.querySelector('.block');
const colorName = document.querySelector('.colorName');

// y de los botones que activan las funciones
const redSelector = document.querySelector('.js-red');
const greenSelector = document.querySelector('.js-green');
const blueSelector = document.querySelector('.js-blue');

// empezamos planteando una función, ¿qué cosas tenemos que cambiar?
// El color de dos objetos y el nombre del color en el HTML,
// primero lo haremos solo con el rojo
function red() {
  block.classList.add('red');
  colorName.classList.add('red');
  colorName.innerHTML = 'red';

  block.classList.remove('green');
  colorName.classList.remove('green');
  block.classList.remove('blue');
  colorName.classList.remove('blue');
}

// y ahora añadiremos el event listener que llame a la función cuando
// cliquemos el boton rojo
redSelector.addEventListener('click', red);

// tras probar el botón, vamos a hacer lo mismo para el azul
function blue() {
  block.classList.add('blue');
  colorName.classList.add('blue');
  colorName.innerHTML = 'blue';

  block.classList.remove('green');
  colorName.classList.remove('green');
  block.classList.remove('red');
  colorName.classList.remove('red');
}

blueSelector.addEventListener('click', blue);

// al probar nos daremos cuenta de que al pulsar el botón rojo, todo bien
// el azul, todo bien; pero al volver a pulsar el rojo... el color no cambia
// esto se debe a que las clases se estan sobre escribiendo unas a otras
// para no tener problemas, vamos añadir a la función que elimine las clases que no necesitamos

// Para terminar, hacemos la función para el verde y su evento

function green() {
  block.classList.add('green');
  colorName.classList.add('green');
  colorName.innerHTML = 'green';

  block.classList.remove('blue');
  colorName.classList.remove('blue');
  block.classList.remove('red');
  colorName.classList.remove('red');
}

greenSelector.addEventListener('click', green);

// asegurate de añadir el quitar todas las clases que no usamos en cada funcion
// Y ya estaría!!!
