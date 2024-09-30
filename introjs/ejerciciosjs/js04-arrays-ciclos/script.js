console.log("JS04-Arrays y Ciclos");
/*
 *  Los arreglos en JavaScript son una estructura de datos utilizada 
 * para almacenar múltiples valores en una sola variable. Cada valor 
 * dentro del arreglo se llama elemento y se accede a través de su 
 * índice (comenzando desde 0).
 */


//Crear un arreglo con corchetes []
// recomendación: el nombre de las variables se usa en plural
let juguetes = [];
const autos = [];

console.log( typeof juguetes ); // object
console.log( typeof autos ); // object
console.log( typeof {name:"sergio", job: "instructor"} ); // object
console.log( Array.isArray( juguetes) ); // true
console.log( Array.isArray( autos) ); // true
console.log( Array.isArray( {name:"sergio", job: "instructor"} ) ); // false

const numeros = [9]; // [9]
const numbers = new Array(9); // [ , , , , , , , , ]
console.log( numeros );
console.log( numbers );

// Acceder a los elementos. =======================================
const nombres = ["Estefany", "América", "Karen", "Lorena"];

// Modificar un elementos del arreglo.
console.log( nombres ); // "Estefany", "América", "Karen", "Lorena"
nombres[2] = "Andrea";
console.log( nombres ); // "Estefany", "América", "Andrea", "Lorena"

// el dato string es un dato inmutable;
let nombreMascota = "Steve";
console.log( nombreMascota[1] ); // t
console.log( nombreMascota ); // Steve
nombreMascota[1] = "x"; // NO se puede cambiar por que es un string es un dato inmutable
console.log( nombreMascota ); // Steve

// Obtener el número de elementos de un arreglo: propiedad length
console.log( nombres.length ); // 4
console.log( [1,2,3].length ); // 3
console.log( nombres[nombres.length -1] ); // 4

// El último elemento del arreglo se puede obtener con [ nameArray.length -1 ]
// Obtener el último elemento de la variable nombres: "Lorena"
console.log( nombres[nombres.length-1] ); // "Lorena"
const cohortes = ["Ch46", "Ch47", "Ch48"];
// Obtener el nombre de la última cohorte
console.log( cohortes[cohortes.length-1] ); // "Ch48"

nombres[nombres.length] = "Sara";
console.log( nombres );

/**
 *  push()
 * 
 *  Añade elementos al final del arreglo
 *
 * */ 
const frutas = ["🍍", "🍎", "🍐"];
console.log( frutas );

// Agregamos cereza y durazno
frutas.push("🍒", "🍑");
console.log( frutas ); // ['🍍', '🍎', '🍐', '🍒', '🍑']

/**
 *  unshift()
 * 
 *  Añade elementos al inicio del arreglo
 */

// Agregar  sandía y fresa
frutas.unshift("🍉", "🍓");
console.log( frutas ); // ['🍉', '🍓', '🍍', '🍎', '🍐', '🍒', '🍑']

/**
 *  pop()
 * 
 *  Eliminar el último elemento del arreglo
 */
console.log( frutas.pop() ); // '🍑'
console.log( frutas ); // ['🍉', '🍓', '🍍', '🍎', '🍐', '🍒']

/**
 *  shift()
 * 
 *  Eliminar el primer elemento del arreglo
 * 
 */
console.log( frutas.shift() ); // '🍉'
console.log( frutas ); // ['🍓', '🍍', '🍎', '🍐', '🍒']

/**
 * splice()
 * 
 *  Elimina elementos de un arreglo.
 *  Retorna los elementos eliminados y modifica el arreglo original.
 *  Es posible añadir nuevos elementos en la posición que se ha eliminado.
 */

// Eliminar manzana y pera
console.log( frutas.splice(2, 2 )  ); // ['🍎', '🍐'];
console.log( frutas ); // ['🍓', '🍍', '🍒']

// Eliminar la piña y agregar kiwi y coco
console.log( frutas.splice(1, 1, "🥝", "🥥") ); // ['🍍']
console.log( frutas ); //['🍓', '🥝', '🥥', '🍒'];

// Agregar banana entre kiwi y coco
console.log( frutas.splice(2, 0, "🍌") ); // []
console.log( frutas ); // ['🍓', '🥝', '🍌', '🥥', '🍒']

/**
 * Ejercicio ir a martes de frutas y verduras
 * 
 * - Comenzar con cesta vacía
 * - Comprar coco '🥥'
 * - Comprar banana '🍌'
 * - Comprar piña ( ponerla entre el coco y banana) '🍍'
 * - Comprar fresa (al último, después de la banana) '🍓'
 * - Comprar sandía (poner al fondo, antes del coco) '🍉'
 */

const cesta = [];
console.log( "Cesta vacía: " + cesta );

cesta.push("🥥");
console.log( "Compramos coco: " + cesta );

cesta.push("🍌");
console.log( "Compramos banana: " + cesta );

cesta.splice(1, 0, "🍍");
console.log( "Compramos piña (entre coco y banana): " + cesta );

cesta.push("🍓");
console.log( "Compramos fresa: " + cesta );

cesta.unshift("🍉");
console.log( "Compramos sandía (al inicio): " + cesta );

/**
 *  PEPS: Primeras entradas, primeras salidas 
 *  FIFO: First in, First out
 *  QUEUE: colas
 * 
 *  Usos:
 *   - Colas de impresión, se imprimen los trabajor en el orden que fueron recibidos
 *   - Buffer de datos: transmisión de audio y video
 *   - Manejo de solicitudes en servidores
 * 
 */
const queue = [];
queue.push("Elemento 1");
queue.push("Elemento 2");
queue.shift(); // "Elemento 1"
/**
 *  UEPS: Últimas entradas, primeras salidas
 *  LIFO: Last in, First Out
 *  Stack: pila
 * 
 *  Usos:
 *    - Llamadas a funciones recursivas (pila de ejecución)
 *    - Deshacer/rehacer acciones en aplicaciones
 */
const stack = [];
stack.push("Plato 1");
stack.push("Plato 2");
stack.push("Plato 3");
stack.pop(); // Plato 3

/**
 * El pase de datos de los objetos es por referencia
 * 
 * El pase de datos por referencia significa que, en lugar de pasar 
 * una copia del valor a una función o variable, se pasa una 
 * referencia a la ubicación en memoria de los datos originales. 
 * Esto implica que cualquier cambio realizado a los datos 
 * dentro de la función afectará directamente al valor original.
 * 
 * */

const colores = ["Amarillo", "Verde", "Azul"];
const tema = colores; // Se pasa la referencia del arreglo en colores a tema
// Cualquier modificación en tema, ocurrirá en colores.

function agregarColor (array) {
    array.push ("Magenta");
}

agregarColor(tema);

console.log(colores);
console.log(tema);

// Para copiay y clolar un arreglo a un nuevo arreglo se uesa slice()
const coloresPreferidos = colores.slice();
coloresPreferidos.pop();
coloresPreferidos.pop();
coloresPreferidos.pop();
console.log( coloresPreferidos );
console.log( colores );

// Iterar arreglos.
const names = ["Sari", "Estefany", "Circe", "Ranfi"];
for (let index = 0; index < names.length  ; index++ ) { // bloque de código
    console.log( names[index] );
}

// while( condición ) instrucción;
let counter  = 0;
//while(  confirm("Deseas continuar?")  ){
// counter ++;
// console.log("Números de veces que has confirmado:" + counter);
//}
console.log("Se ha terminado el ciclo while");

const animales = ["León", "Cerdito", "Cabra", "Pony Salvaje"];

// Imprimir en la consola el siguiente mensaje
// "Hola amiguito <Nombre de animal>"
// Realiza la iteración usando un ciclo for

//for(index=0; index < animales.length; index++ ){
//console.log("Hola amiguito " + animales[index]);
//}

let index = 0;
while(index < animales.length){
    index++;
    console.log("Hola amiguito " + animales[index]);
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

for (const animal of animales ){
    console.log("Hola animalito " + animal);
  }

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
for (const animal of animales ){
    if( animal === "Cerdito") break;
    console.log("Hola  " + animal);
    console.log("Holi  " + animal);
  }