//Objetos

const nombreProducto = 'Tv 20 pulgadas'
const precio = 1500
const disponible = true

const producto = {
    nombreProducto: "TV 20 Pulgadas", //propiedad del objeto
    precio: 300, //propiedad del objeto
    disponible: true //propiedad del objeto
}

// //Acceder a alguna propiedad del objeto

// console.log(producto.precio)
// console.log(producto.nombreProducto)

// console.log(producto["precio"])

//Agregar propiedades a un objeto
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponible;

console.log(producto)
