/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */

import { palindromo } from "../../../components/card/palindrome.js";

test("Verificar una palabra si es palindromo", ()=>{
    expect( palindromo("oso") ).toBe(true);
    expect( palindromo("reconocer") ).toBeTruthy();
    expect( palindromo("tengo hambre") ).toBe(false);
    expect( palindromo("") ).toBe(true); //DECIA FALSO
    expect( palindromo("Anita lava la tina") ).toBe(true);
});
