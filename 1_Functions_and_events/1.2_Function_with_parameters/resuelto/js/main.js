// CHANGE COLORS 2
// Ejercicio para practicar
// funciones con parametros

// En este ejercico vamos a hacer que el color, el nombre del color y el color del nombre
// cambien de color cunado pulsemos los botones de los distintos colores
// Para hacerlo rápido y eficiente, usaremos función con parametros

// partiendo de la base del ejercico de funciones básicas,
// es posible que podamos hacer una división entre lo que añadimos y lo que quitamos
// igual que antes, empezamos con las cosas que vamos a añadir, las clases y el cambio de HTML
// vamos a añadir un parametro a la función y
// escribirlo en vez de el nombre del color
function add(a) {
  block.classList.add(a);
  colorName.classList.add(a);
  colorName.innerHTML = a;
}

// ahora la función para quitar las clases
// esta vez, con dos parametros, para cada uno de los colores a elimianar
function remove(a, b) {
  block.classList.remove(a, b);
  colorName.classList.remove(a, b);
}

// pero, ¿cómo llamamos a los colores?
// con funciones!!
// empecemos con el rojo
// dentro de la función para el rojo meteremos las fuciones que acabamos de crear
// escribiendo "red", "blue" y "green" en lugar de los parametros
function red() {
  add('red');
  remove('blue', 'green');
}

// añadimos la linea para el evento
redSelector.addEventListener('click', red);

// y ya estaría
// probamos que funciona y hacemos lo que hemos hecho para el roro con los otros colores
// cambiando los nombres de las clases en el parametro que les corresponda

function green() {
  add('green');
  remove('blue', 'red');
}
greenSelector.addEventListener('click', green);

function blue() {
  add('blue');
  remove('red', 'green');
}
blueSelector.addEventListener('click', blue);
