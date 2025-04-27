async function obtenerEmpleados(){
        
   const archivo = 'empleados.json';

// //Utilizar fetch para traer datos de una "base de datos" con promesas

//    fetch(archivo)
//    .then( resultado => resultado.json())
//    .then( datos => {
//       // console.log(datos.empleados)

//       const { empleados }= datos //se hace destructuring para extraer el arreglo de empleados del archivo json hacia una variable que podamos luego mostrar por consola:
//       console.log(empleados)
//    })

//Utilizar fetch para traer datos de una "base de datos" con async/await

   const resultado = await fetch(archivo);
   const datos = await resultado.json();
   console.log(datos)


}



obtenerEmpleados();