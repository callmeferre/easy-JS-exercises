// SWITCH THE LIGHT
// Ejercicio para practicar
// variables, constantes, booleanos y condicionales

// Tenemos una bombilla apagada que necesitamos encender
//  la bombilla tiene la clase .light, que le da forma
// ahora mismo, además tiene la clase .off que la mantiene apagada
// para encenderla, debemos darle la clase .on

// AYUDA: vamos a hacerlo juntas, paso a paso

// primero necesitamos llamar a la bombilla, lo haremos con una constante
const light = document.querySelector('.light');

// necesitamos una variable que cambie de verdadero a falso para poder hacer un booleano (llamemosla power y de momento será true)
let power = true;

// ahora el mometo de crear un condicional
// de momento crearemos solo el if, indicando que: si power es verdadero, a la luz se le añadirá la clase .on

if (power) {
  light.classList.add('on'); //recuerda que, cuando usamos classList, no tenemos que poner el punto antes del nombre de clase
}
// una vez tenemos el if, mira la página ¡La luz se ha encendido!
// ahora necesitamos terminar la condicional para que se apague cuando power sea falso
else {
  light.classList.add('off');
}
