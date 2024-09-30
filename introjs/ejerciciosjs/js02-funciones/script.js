console.log("sesión JS 02 - FUNCIONES");
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

console.log(greeting());
function greeting(){
    return "Hola CH46";
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const sum = function sumatoria(a,b){
    return a+b;
}

console.log(sum(7,5)); //12
console.log(typeof sum); //function

/* Función declarada */
console.log(restarNumeros(8,2));
function restarNumeros(a,b){
    return a-b;
}

/* Función expresada */
const division = function dividirNumeros(a,b){
    return a/b;
}
console.log(division(8,2));

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

const rest = (a,b) => a -b;
const saludo = nombre => console.log("Hola " + nombre);
console.log( rest(4,7) ); // -3
saludo("Liz"); // Hola Liz
console.log( saludo("Azul")/* Hola Azul */ ); // undefined

const areaRectangulo = (a,b) => a*b;
console.log(areaRectangulo(5,4));

const areaCuadrado = (a) => a*a;
console.log(areaCuadrado(5));

// Template literals ` ` (backtick) en conjunto con la interpolación ${}
const message = `El área del rectángulo es ${areaRectangulo(5,8)} y del cuadrado ${areaCuadrado(8)}`; 
console.log( message );

/* 
Parámetros por defecto (default parameters)
Parámetros rest (rest parameters)
*/

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

/* imprimir en consola */
const imprimirEnConsola = mensaje => console.log( mensaje );

/* Imprimir en alert */
//const imprimirEnAlert = mensaje => alert( mensaje );

/* Imprimir en una paragraph en HTML */
const imprimirEnParagraph = message => document.getElementById("message").innerHTML = message;
imprimirEnParagraph("Liz recomienda ver la SpainRising de Valorant");

/* Función que imprime en consola, alert o paragraph */
const imprimeMensaje = (mensaje, tipoSalida)=>{
    if(tipoSalida==="consola"){
        imprimirEnConsola(mensaje);
    }else if(tipoSalida==="alert"){
        //imprimirEnAlert(mensaje);
    }else if(tipoSalida==="paragraph"){
        imprimirEnParagraph(mensaje);
    }else{
        console.error("Pon una salida que si exista conchetumaye" + tipoSalida);
    }
}

imprimeMensaje("Dann es una adulto independiente con gustos bien dementes", "alert");
/* Shift + alt + tecla abajo = Duplicar línea */
imprimeMensaje("Ivanna recomienda TechnoBoyzzzz", "paragraph");
imprimeMensaje("Una serie muy buena es presunto inocente", "consola");

/**
 * Imprimir mensaje usando callbacks
 */
const imprimirMensajeUsandoCallBacks = ( mensaje, fncCallback )=> fncCallback(mensaje);
imprimirMensajeUsandoCallBacks("Alice in Borderland", imprimirEnParagraph );
imprimirMensajeUsandoCallBacks("Alice in Borderland", imprimirEnConsola );

imprimirMensajeUsandoCallBacks("Volver al futuro 1", function(mensaje){ console.warn("!"+mensaje) } );
imprimirMensajeUsandoCallBacks("Volver al futuro 2", (mensaje)=> console.warn("!!"+mensaje) );

/*
 Realizar una función (ejecutarOperacion) que pueda ejecutar operaciones matemáticas.
 Inicialmente va a funcionar con sumar y restar.
 La función "ejecutarOperacion" recibe como parámetros:
   valorA: primer valor para la operación
   valorB: segundo valor para la operación
   fncCallBackOperacion: función de callback con la operación a realizar
 La función "ejecutarOperación" debe realizar lo siguiente:
 
 - Enviar un mensaje de Bienvenida
 - Realizar la operación 
 - Mostrar el resultado en la consola
*/

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function ejecutarOperacion(valorA, valorB, fncCallBackOperacion) {
    console.log("¡Bienvenido!");
    const resultadoSumaResta = fncCallBackOperacion(valorA, valorB);
    console.log("El resultado de la operación es: " + resultadoSumaResta);
}

ejecutarOperacion (12,1,sumar);

/**
 *  Cambiar atuendo a mi ternurín
 * 
 *  Realizar 3 funciones de cambio de atuendo:
 *  - Función cambiarRapido(atuendo)
 *    Enviar un mensaje a la consola que indique que el atuendo(nombre) se cambia en 2 minutos
 * 
 *  - Función cambiarConAccesorios(atuendo)
 *   Enviar un mensaje a la consola que indique que el atuendo(nombre) se cambia en 5 minutos
 *   e incluye accesorios
 * 
 *  - Función cambiarComplejo(atuendo)
 *   Enviar un mensaje a la consola que indique que el atuendo(nombre) se cambia en 10 minutos
 *   e incluye accesorios y muchos detalles.
 * 
 *  
 *   Genera una función principal( cambiarAtuendo ) que reciba como parámetros:
 *    > nombre: nombre del ternurín
 *    > atuendo: ropa del turnirín
 *    > fncCallback: función para cambiar el atuendo
 * 
 *   Invocar la función cambiarAtuendo con los 3 tipos de atuendo: rapido, accesorios y complejo.
 */

function cambiarRapido(atuendoTernurin){
   return console.log(atuendoTernurin + " se cambia en 2 minutos");
}

function cambiarConAccesorios(atuendoTernurin){
    return console.log(atuendoTernurin + " se cambia en 5 minutos e incluye accesorios");
}

function cambiarComplejo(atuendoTernurin){
    return console.log(atuendoTernurin + " se cambia en 10 minutos e incluye accesorios y muchos detalles");
}

function cambiarAtuendo(nombreTernurin, atuendoTernurin, fncCallbackAtuendo){
    fncCallbackAtuendo(nombreTernurin, atuendoTernurin);
}

cambiarAtuendo("Liz", "vestido", cambiarRapido);
cambiarAtuendo("Liz", "vestido", cambiarConAccesorios);
cambiarAtuendo("Liz", "vestido", cambiarComplejo);

