//datos personalizados
//string
var cadena = 'martalf@gmail.com';
cadena = 2;
//number
var edad = 33;
//boolean
var verdadero_falso = true;
//any
var cualquiera = false;
//arrays
var lenguajes = ['PHP', 'Javascript', 'JAVA'];
var years = [12, 3, 4, 5];
// Alcance de variables let y var
var numero_1 = 10;
var numero_2 = 12;
if (numero_1 = 10) {
    var numero_1_1 = 5; // no redefine porque solo actua a nivel de bloque
    var numero_2 = 15; // redefine el valor de la variable numero_2
    console.log(numero_1_1, numero_2);
}
console.log(numero_1, numero_2);
console.log(cadena, edad, verdadero_falso, cualquiera, lenguajes, years);
/*

    * * * * * * * * * *  *
    * TIPS DE CLASE      *
    * * * * * * * * * *  *

    Tipo de datos:
    
    string -> caracaters.
    number -> números.
    boolean -> verdadero/falso.
    any -> cualquier dato, el compilador no indica errores.
    arrays -> arreglos, le puedes indicar que tipo de datos va a llevar el arrreglo
    de la siguiente manera: var lenguajes: Array<string> lo que va dentro de las <> debe ser el tipo
    de datos si colocas any el array permitirá cualquier tipo de datos.

    hay dos formas de declarar arreglos

    El compilador automatico para lograr que te reconozca el nuevo archivo TS, se debe detner la
    compilación automática y luego se crea el archivo de nuevo.

    cuando uno tiene un error de programación, el compilador te indica automáticamente donde se
    encuentra el error.
    el mismo te avisa del error pero te permite la compilación.

    se pueden tener multiples tipos de datos asignados a una variable colocando el simbolo | en la
    declaración de la variable.

    también puedes crear nuevos tipos de datos:
    y se debe usar la palabra type y se declara de la siguiente manera:
    type alfanumerico = string | number;

    la definicion de una varaible let o var, es el alcance que llevan ellas let es a nivel de bloque
    var es a nivel global.


*/ 
