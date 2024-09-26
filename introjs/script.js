//alert("Hola Mundo");

/*console.log("Hola consola"); //Mensaje en consola*//*

document.write("Osito Gominola"); //Mensaje en página*/

//let nombre = prompt("Ingresa tu nombre: ");

//alert("Hola, " + nombre + ". ¿Cómo estás?");

let nombre = prompt("Ingresa tu nombre:");

let signo = prompt ("Ingresa tu signo en minúsculas y sin acentos:");

//let mensaje = nombre + " y tu signo es: " + signo;

//alert("Eres " + mensaje);


switch(signo){
    case "aries":
        mensaje = alert(nombre + " eres " + signo + ": Signo de fuego, apasionado, valiente y decidido");    
    break;
    case "tauro":
        mensaje = alert(nombre + " eres " + signo + ": Signo de tierra, leal, práctico y buen compañero");    
    break;
    case "geminis":
        mensaje = alert(nombre + " eres " + signo + ": Signo de aire, curioso, polifacético y dual");
    break;
    case "cancer":
        mensaje = alert(nombre + " eres " + signo + ": Signo de agua, protector, empático y sensible ");
    break;
    case "leo":
        mensaje = alert(nombre + " eres " + signo + ": Signo de fuego, carismático, líder y seguro de sí mismo");
    break;
    case "virgo":
        mensaje = alert(nombre + " eres " + signo + ": Signo de perfeccionismo");
    break;
    case "libra":
        mensaje = alert(nombre + " eres " + signo + ": Signo de equilibrio");
    break;
    case "escorpio":
        mensaje = alert(nombre + " eres " + signo + ": Signo de pasión");
    break;
    case "sagitario":
        mensaje = alert(nombre + " eres " + signo + ": Son personas aventureras, que buscan explorar el mundo y nuevas experiencias. ");
    break;
    case "capricornio":
        mensaje = alert(nombre + " eres " + signo + ": Son muy fiables y cuentan con una gran capacidad de sacrificio.");
    break;
    case "acuario":
        mensaje = alert(nombre + " eres " + signo + ": Creativo, original, independiente e intelectual.");
    break;
    case "piscis": 
        mensaje = alert(nombre + " eres " + signo + "Se caracteriza por ser sensible, empático, y creativo.");
    break;

    default:
        alert("Lo siento, no encontramos ese signo :c");
}
    