console.log("JS05 - Operadores");

// Tipos de operadores
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
const categorias = [
  "Aritméticos", 
  "Asignación", 
  "Comparación", 
  "Lógicos",
  "Incremento y decremento",
  "Ternarios"
];
console.table( categorias );

const listItems = categorias.map( (categoria)=> `<li> ${categoria} </li>` );
console.table( listItems );
const refCategorias = document.getElementById("categorias");
console.log(refCategorias.innerHTML);
const stringListItems = listItems.join("");
console.log( stringListItems );
refCategorias.innerHTML = stringListItems;

// ---------------- Opéradores aritméticos ----------------
/* 
   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/

console.log("3" * "3"); //9
console.log("3" - 4); //1

// Saber si 3 números terminan con el mis dígito
// Ejemplo 1098, 78,  8  -> true
//           77,  6, 23  -> false

const verificarUltimoDigitoUsandoString = (numA, numB, numC) =>{
  const strNumA = String(numA);
  const strNumB = String(numB);
  const strNumC = String(numC);

  const lastDigitNumA = strNumA[strNumA.length-1];
  const lastDigitNumB = strNumB[strNumB.length-1];
  const lastDigitNumC = strNumC[strNumC.length-1];

  const result = lastDigitNumA === lastDigitNumB && lastDigitNumA === lastDigitNumC;
  return result;
}

console.log(verificarUltimoDigitoUsandoString(1098,78,8));

const verificarUltimoDigitoUsandoResiduo = (numA, numB, numC) =>{
  const lastDigitNumA = numA % 10; 
  const lastDigitNumB = numB % 10; 
  const lastDigitNumC = numC % 10; 
  
  const result = lastDigitNumA === lastDigitNumB && lastDigitNumA === lastDigitNumC;
  return result;
}

console.log(verificarUltimoDigitoUsandoString( 1098, 78, 8 ) ); // true
console.log(verificarUltimoDigitoUsandoString( 77, 6, 23 ) ); // false
console.log(verificarUltimoDigitoUsandoResiduo( 1098, 78, 8 ) ); // true
console.log(verificarUltimoDigitoUsandoResiduo( 77, 6, 23 ) ); // false

// Saber si un año es bisiesto, verificar solo si es divisible entre 4
// Ejemplo: 2024 fue bisiesto, febrero tuvo 29 días
//          2023 no fue bisiesto
//          2020 fue bisiesto

const isLeapYear = ( year ) => year%4 === 0;

  console.log( isLeapYear(2024) ); // true
  console.log( isLeapYear(2023) ); // false
  console.log( isLeapYear(2020) ); // true

console.log(  3 * 2 / 2  ); //3
console.log(  3 / 2 * 2  ); //3
console.log(  2 * 4 / 2**3 ); //1
console.log(  3 ** 2 ** 3  ); //6561
console.log( 20 / 4 + 3 * (2 + 3) - 4 ** 2 ); //4

// ------- Operadores de asignación ----------------
/*
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:

 asignación =
 
 Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2

*/

// suma unaria
const dinero = -100;
let pago = + dinero;
console.log( dinero, pago);
const money = "100.5";
// const amount = money + 500; // 100.5500
// const amount = parseInt(money) + 500; // 600
const amount = parseFloat(money) + 500; // 600.5
// const amount = Number(money) + 500; // 600.5
// const amount = +money + 500; // 600.5
console.log( amount );

// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales
// - parseInt convierte solo la parte entera
console.log( parseInt("10.456")); // 10
// - Number devuelve NaN si la cadena contiene algún caracter no numérico
// - parseInt convierte los enteros hasta encontrar una caracter no numérico
//       Si la entrada no comienza con un valor numérico, devuelve NaN

console.log( parseInt("10-25") ); // 10
console.log( Number("10-25") ); // NaN
console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0
console.log( parseInt( true ) ); // NaN
console.log( 3 * "4" ); // 3 * 4 = 12
console.log( 3 * Number("4") ); // 3 * 4 = 12
console.log( 3 * "10-2" ); // 3 * NaN = NaN
console.log( 3 * parseInt("10-2") ); // 3 * 10 = 30
// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined
console.log( Boolean(1) ); //true
console.log( Boolean(1000) ); //true
console.log( Boolean(-1000) ); //true
console.log( Boolean("Ya mero nos vamos a comer, me duele la cabeza") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true por que hay un espacio

// Number
// [] -> 0 , [30] -> 30, [30,33] -> NaN, false -> 0, true -> 1

// String
// [] -> "" , [12,2] -> "12,2", function(){} -> "funtion(){}", {} -> [object, object]
console.log( String( [] ), String( [12,2] ) ); // "", 12,2
console.log( String({name:"sergio", job:"instructor" } ) ); // [object Object]
console.log( JSON.stringify({name:"sergio", job:"instructor" } ) ); // {"name":"sergio", "job":"instructor" }

// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor
  Operador de post-incremento y post-decremento
    valor ++
    valor --
*/
let x = 10;
x++; // x = x + 1;
console.log( x ); // 11
let y = 30;
++y; // y = y + 1;
console.log( y ); // 31


let valorC = 5;
console.log(  5 + valorC ++ ); // 10
console.log( valorC ); // 6

/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/* for(let index=1; index<=100; index++){
  if(index%3==0){
    console.log("fizz");
  }else if(index%5==0){
    console.log("buzz");
  }else if(index%3==0 && index%5==0){
    console.log("fizzbuzz");
  }else{
    console.log(index);
  }
  
} */

// ====================================================

let diaSemana = 5;

console.log("El día de hoy es el n." + ++diaSemana ); // 6
                         // diaSemana = diaSemana + 1
                         // console.log("El día..." + diaSemana );
console.log("Mañana será el n.: " + diaSemana ); // 6

// =======================================================

let medidaCereal = 30;

console.log("Me comí un puñito de Cereal, ahora tiene: " + --medidaCereal ); // 29
                                                    // medidaCereal = medidaCereal -1 //29
                                                    // console.log("Me comí.." + medidaCereal) // 29
console.log("Me volvió a dar hambre y volví a comer, ahora tiene: " + --medidaCereal); // 28
                                                    // medidaCereal = medidaCereal -1 // 28
                                                    // console.log("Me volvió.." + medidaCereal) // 28
console.log("Lo revisé después y tiene la medida de: " + medidaCereal); // 28

let a = 0;
let b = 0;

               // b = a
               // a = a + 1;
for(  ; a < 3 ; b = a++ ){
  console.log( a, b); 
         //   0 , 0
         //   1 , 0
         //   2 , 1
}

console.log( a, b); // a = 3 , b = 2 

a = 0;
b = 0;
               // a = a +1;
               // b = a;
for(  ; a < 3 ; b = ++a ){
  console.log( a, b); 
          //   0, 0
          //   1, 1
          //   2, 2
 
}
console.log( a, b); //  3, 3