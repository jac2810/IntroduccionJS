// "use strict"; //corre JS en modo estricto

const producto = {
    nombreProducto: "TV 20 Pulgadas", //propiedad del objeto
    precio: 300, //propiedad del objeto
    disponible: true //propiedad del objeto
}

Object.freeze(producto) //Se congela o bloquea el objeto para que no se puedan agregar o eliminar propiedades (no marca errores si no estan en strict)

Object.seal(producto) //Se congela o bloquea el objeto pero permite modificar las propiedades existentes

producto.imagen = 'imagen01.jpg' //Agregamos una propiedad al objeto

console.log(Object.isFrozen(producto)) //Metodo para saber si un objeto esta sellado o bloqueado

producto.precio = 13450

console.log(producto)