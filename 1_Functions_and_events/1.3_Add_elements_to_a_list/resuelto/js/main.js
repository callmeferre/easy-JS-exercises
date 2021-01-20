// TO DO LIST
// Ejercicio para practicar
// constantes, funciones complejas, valores de input y incrementos
// (BONUS: repaso de booleanos)

// En este ejercicio vamos a crear una lista que nos permita ir añadiendo elementos
// El texto se va a escribir con un input tipo text
// y el elemento se incluirá en la lista cuando le demos a +

// lo primero es declarar las contantes   que llamen a los elementos que vamos a necesitar:
// el input de texto, el botón de añadir, la caja de la lista y el texto del elemento

const text = document.querySelector('.text');
const add = document.querySelector('.add');
const list = document.querySelector('.list');
const listElementText = document.querySelector('.listElementText');

// una vez tenemos las constantes listas, podemos empezar con la función.

function listed() {
  // queremos usar que el contenido del input (value) así que le daremos una variable
  let textValue = text.value;
  // y tenemos que añadir un li a la lista cuyo texto sea el value del input
  let listElement = `<li><button class="listElement"><i class="icon far fa-square"></i><span class="listElementText"> ${textValue}</span></button></li>`;
  // recuerda que no queremos sobre escribir los elementos que ya estan en la lista
  // vamos a incrementar el HTML de la lista con el nuevo elemento
  list.innerHTML += listElement;
  // por último, para que quede mas bonito, vamos a limpiar el input y volver a dejarlo vacio
  text.value = null;
}

// una vez terminada la función, hacemos que el botón de + llame a la función con un click
add.addEventListener('click', listed);
