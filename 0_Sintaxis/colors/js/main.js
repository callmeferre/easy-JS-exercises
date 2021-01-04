// CHANGE COLORS
// Ejercicio para practicar
// constantes, llamar a HTML y llamar a clases de CSS

// En este ejercicio vamos a ver cómo cambiar el color de fondo del cuadrado central
// por uno de los colores de los botones inferiores
// primero vamos a hacerlo sin función ni eventos, en la lección 2 añadiremos más a este ejercicio

// primero definimos las constantes
// la caja que va a cambiar (.block) y el nombre del color (.colorName)
const block = document.querySelector(".block");
const colorName = document.querySelector(".colorName");

// ahora le decimos que a .block a .colorName les cambie a rojo
block.classList.add("red");
colorName.classList.add("red");

// ya hemos cambiado el color! pero nos falta cambiar el texto para que ponga "Red"
colorName.innerHTML = "Red";

// Ahora vamos a hacer lo mismo, pero para el color verde
block.classList.add("green");
colorName.classList.add("green");
colorName.innerHTML = "Green";

// Y por último, a azul
block.classList.add("blue");
colorName.classList.add("blue");
colorName.innerHTML = "Blue";
// lo más seguro es que si solo has añadido las mismas tres lineas de antes, 
// el nombre haya cambiado pero el color no. ¿Por qué?
// Porque ahora la caja .block tiene TODAS las clases que le hemos ido añadiendo,
// Y en el CSS el último color escrito es el verde, así que este sobreescribe al azul
// para solucionarlo desde JS vamos, en vex de añadir una clase nueva,
// vamos a quitarle las que le sobran
block.classList.remove("green");
colorName.classList.remove("green");
// no lo hagas solo con el verde, hazlo tambien con el rojo, para que quede todo más limpio 
// y no nos de problemas en el futuro
block.classList.remove("red");
colorName.classList.remove("red");

// PERO POR QUÉ
// por qué no necesito hacer lo mismo para el HTML?
// Porque el innerHTML no está añadiendo contenido a lo que ya hay, sino SUSTITUYENDO 
// lo que tiene el HTML por defecto, por aquello que estas escribiendo en JS