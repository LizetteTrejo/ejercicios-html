const truncarTitulo = (titulo, maxCaracteres) => {
    let tituloRecortado;
    const decorador = "...";
    if(titulo.length > maxCaracteres){
        tituloRecortado = titulo.slice (0, (maxCaracteres-decorador.length));
        tituloRecortado += "...";
    }else{
        tituloRecortado = titulo;
    }
    // TODO truncar el título y agregar "..."
    // Ejemplo "Born to Make You Happy" , maxCaracteres 10( 10 - 3 = 7)
    // return "Born to..."
    return tituloRecortado;//titulo truncado
}


console.log(truncarTitulo("Ya nos vamos al descanso", 10));
export {truncarTitulo};