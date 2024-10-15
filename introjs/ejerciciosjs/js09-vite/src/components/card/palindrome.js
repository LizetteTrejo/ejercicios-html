const palindromo = (texto) => {
    let textoPalindromo;
    textoPalindromo = texto.toLowerCase().replace(/ /g,'').trim();
    
    return textoPalindromo === textoPalindromo.split('').reverse().join(''); //lo pasamos a un array, lo volteamos y lo unimos
}
export {palindromo};