/*
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
Resolve y reject son funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise.
sintaxis:
    const pinkyPromise = new Promise ( fncCallBack );
*/
const viernesTematicoSerch = ( traje ) => {
    // const myPromise = new Promise( ( callBackResolve, callBackReject )=>  );
    const myPromise = new Promise( ( resolve, reject )=>{
        /* Pending */
        if(traje==="Mexicano"){
            /* Resolved */
            resolve("Sí Autorizo");
        }else if(traje==="Elegante"){
            /* Resolved */
            resolve("Sí Autorizo");
        }else if(traje==="Traje de baño"){
            /* Rejected */
            reject({error:404, message: "No autorizo este traje"});
        }else{
            /* Rejected */
            reject("El traje no lo autoriza Tan");
        }
    });
    return myPromise;
}

const manejoDeMyPromiseViernesTematico = async ( traje ) =>{

    try {
        const respuesta = await viernesTematicoSerch( traje );
        console.log( respuesta)    
    } catch (error) {
         console.warn( error );
    }   
 }
 
 const manejoDeMyPromiseConThenCatch = ( traje ) => {
 
     viernesTematicoSerch( traje )
      .then( response => console.log("ThenCatch:", response )  )
      .catch( error => console.warn("ThenCatch:", error ) )
 
 }
 
 manejoDeMyPromiseViernesTematico( "Mexicano" );
 manejoDeMyPromiseViernesTematico( "Traje de baño" );
 manejoDeMyPromiseConThenCatch("Elegante");