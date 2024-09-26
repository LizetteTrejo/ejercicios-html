/*Tipos de datos en javascript
son clasificados en dos: primitivos y estructurados (simples y objetos)
Primitivo > son inmutables, no tinen atributos ni metodos.
-string o cadena de carateres
-number (numeros)
-boolean (binario/ verdadero o falso / 0 o 1)
-NaN
-null
-undefined
-biginit - Mención corta
-symbol- Por esta sesión quedará fuera
-Tipo Object
-Tipo Array
*/
/*Tipo de dato: string
 *Las cadenas o el tipo de dato string, se utilizan para representar o transmitir datos en forma de texto/alfabetico
 *una cadena puede estar compuesta por cero o más caracteres. Una cadena que no tine ningun caracter se llama cadena vacia.*/
 let cadenaTexto = "texto1";// con el uso de las comillas dobles del tipo string
 let cadenaTextoSegunda = 'texto2';// con el uso de comillas simples del tipo string
 /*Como el compilador reconoce que es del tipo texto, si yo hago una asignación con el operador + a una tercera variable, hara una concatenación*/
 let concatenar = cadenaTexto + cadenaTextoSegunda;
 console.log(concatenar); 
 let name = "tibio";
 let tipoAnimal = 'gato';
 //Nuestra variable de curp vacia puede existir porque estamos esperando que nuestra clienta ingrese su curp
 //let curp = "";
 //Depues de que nuestra clienta ingrese su curp
 let curp ="auwl9410MGRNGL02";
 /*string template literal
  * es una forma flexible y legible de trabajar con cadenas de texto. Utiliza unas comillas invertidas (``)
  * en lugar de las comillas simples o dobles y permiten insertar expresiones (variables) dentro de la cadena de texto utilizando
  * La interpolación ${VARIABLE}.
  **/
 let numeroDias = "03";
 let mensaje = `Faltan ${numeroDias} días para navidad`;
 console.log(mensaje);
 /* Tipo de dato number
 *Utilizamos para representar información del tipo numero que necesitamos hacer operaciones matemáticas con ella, en JStodos los numeros son de valores de punto flotante.
 *En JS 2=2.0, 2.5=2.5, se pueden escribir de tipo decimal o enteros, pueden ser positivos y negativos o cero, 1, 0, -1
 *NaN > Not At Number, esto ocurrirá cuando intentes realizar una operación matemática imposible o sin número.
 */
let peso=5;
let altura=30;
let añoNacimiento=2021;
let añoActual=2024;
console.log(`Tibio tiene ${añoActual-añoNacimiento} años`);
/* Funciones globales de JS y bibliotecas que te permiten hacer cálculos matemáticos rápido y sin que lo programes desde cero */
/* BigInt */
let bigExample=90084650;
/* NaN example */
let x=100/"apple";
console.log(x); //Esperamos que el resultado no tenga sentido, porque no puedes hacer operaciones matemáticas con un número y una cadena de texto del tipo "apple"
let a=1, b=2;
let aStringNumber="1", bStringNumber = "2";
console.log(aStringNumber/bStringNumber);
/* Infinity o -infinity > es el valor que JS devolverá si calcula un número fuera del mayor posible */
const maxNumber = Math.pow(10,1000);
if(maxNumber === Infinity){
    console.log("Si es un infinity");
}
console.log(Infinity);
console.log(Infinity+1);
console.log(1/0);
/**Tipo de dato Boolean: true o false
 *  Seguido cuando programamos, necesitamos confirmar o desmentir algo para hacer comparaciones, y para esto necesitaremos valores como:
 * si/no
 * encendido/apagado
 * verdadero/falso
 * 1/0
*/
let namePerson = "Liz", hasAuto = true, isTibioInClass=false;
let tibioAnimal = "cat";
let isTibioaCat;
if(tibioAnimal == "cat"){
isTibioaCat = true; 
}
console.log("Tibio es un gato: "+isTibioaCat);
/* Undefined y Null
*Valor tanto como tipo de dato, se usa para indicar que una variable no tiene un valor definido.
*Cuando una variable se declara pero no se designa
*/
let exampleUndefined;
console.log(exampleUndefined);
/*Null > es un valor que podemos asignar a una variable, para indicar que no tiene valor. Se utiliza para representar "vacío"*/
let curpExample=null;
console.log(curpExample);
/* typeof */
console.log(typeof exampleUndefined);
console.log(typeof isTibioInClass);
console.log(typeof concatenar);