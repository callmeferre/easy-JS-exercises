// SWITCH THE LIGHT
// Ejercicio para practicar
// variables, constantes, booleanos y condicionales
// (BONUS: addeventListener y funcion con condicional)

// Tenemos una bombilla apagada que necesitamos encender
//  la bombilla tiene la clase .light, que le da forma
// ahora mismo, además tiene la clase .off que la mantiene apagada
// para encenderla, debemos darle la clase .on

// AYUDA: vamos a hacerlo juntas, paso a paso

// primero necesitamos llamar a la bombilla, lo haremos con una constante

// necesitamos una variable que cambie de verdadero a falso para poder hacer un booleano (llamemosla power y de momento será true)

// ahora el mometo de crear un condicional
// de momento crearemos solo el if, indicando que: si power es verdadero, a la luz se le añadirá la clase .on

//recuerda que, cuando usamos classList, no tenemos que poner el punto antes del nombre de clase

// una vez tenemos el if, mira la página ¡La luz se ha encendido!
// ahora necesitamos terminar la condicional para que se apague cuando power sea falso

// BONUS: que el interrupto .switch sea lo que apaga y enciende la luz cuando lo cliquemos
// vamos a empezar comentando el condicional, para que no nos moleste, pero sin perderlo
// Declaremos una cosntante para llamar al interruptor

// hacemos una función que tenga un condicional, parecido al que acabamos de hacer, pero que solo funcione cunado le llamemos
//Necesitaremos crear el booleano dentro del condicional, de manera que cuando sea verdadero lo transformemos a falso y viceversa

//ya casi está, solo necesitamos añadir el evento "click" que permita que el botón funcione

//si en algún punto el interruptor se "atasca", puede que necesitemos eliminar las clases que no sean necesarias
