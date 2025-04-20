//PROMISE


const usuarioAutenticado = new Promise( (resolve, reject) => { //Crea una nueva instancia del objeto "Promise"
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //La promesa se cumple
    } else {
        reject('No se pudo iniciar sesión'); //La promesa no se cumple
    }
});

console.log(usuarioAutenticado)

/**Los tres valores del Promise son:
 * -Pending: No se ha cumplido pero tampoco se ha rechazado
 * -Fullfilled: Ya se ha cumplido la promesa
 * -Rejected: Se ha rechazado
 */

usuarioAutenticado.then(resultado =>{ console.log(resultado) }) //El parametro hacer referencia a lo que resulte de la promesa cuando se cumpla

usuarioAutenticado.catch(function(error){ //El parametro hacer referencia a lo que resulte de la promesa cuando NO se cumpla
    console.log(error)
})