/* Obtener la referencia del formulario */
/* const register = document.getElementById("register-form"); */
/* const register = document.querySelector("form"); */
/* const register = document.querySelector("#register-form"); */
const register = document.forms["register-form"];

/**
 *  AddEventListener permite agregar funciones que se ejecutarán
 *  en respuesta a un evento específico que ocurre aun elemento del DOM.
 * 
 *  register.addEventListener( type  , fncCallback );
 * 
 *  addEvenListener podemos manejar interacciones del usuario como clics,
 * cambios de teclado, movimientos del mouse, entre otros.
 */

/* curl -X POST -d '{"email":"tigger@disney.com","password":"12345678","firstName":"tigger", "lastName":"rayas"}' -H "Content-Type:application/json" http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users/45 */
/* curl -X PUT -d '{"email":"tigger@disney.com","password":"12345678","firstName":"Tigger", "lastName":"Rayas"}' -H "Content-Type:application/json" http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users/45 */
/* curl -X DELETE http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users/45 */
/* curl -X GET http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users */

const isValid = ( newUser ) =>{
    let valid = true;
    if( newUser.password.length < 8  || newUser.password.length > 51  ) {
       alert("La longitud del password debe ser mayor a 8");
       valid = false;
    } else if( !newUser.checkbox ) {
        alert("Debes aceptar los términos y condiciones");
        valid = false;
    }
    return valid;
}

const postUser = async ( newUser ) => {
    const url = "http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users";
    const options = { 
     method: "POST", // POST, PUT, DELETE, GET
     headers: { "Content-Type":"application/json" },
     body:  JSON.stringify( newUser ) // conversión de Object a JSON
    }
    try {
      const response = await fetch( url, options  );
      const registeredUser = await response.json(); 
      console.table( registeredUser );
      alert("Felicidades, el registro ha sido exitoso");
    } catch (error) {
      console.warn(error);
    }
 }


register.addEventListener ("submit", (event)=>{
    event.preventDefault();
    console.log("Atendiendo al formulario");

      // Leer los inputs del formulario
      const newUser = {
        firstName: register.elements["firstName"].value,
        lastName: register.elements["lastName"].value,
        email: register.elements["email"].value,
        password: register.elements["password"].value,
        checkbox: register.elements["gridCheck"].checked
    }
    // Verificar datos del formulario
    if( isValid(newUser) === true ){
        postUser( newUser); // enviar datos al servidor
    }
});