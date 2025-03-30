const producto = {
    nombreProducto: "TV 20 Pulgadas", //propiedad del objeto
    precio: 300, //propiedad del objeto
    disponible: true //propiedad del objeto
}

//Forma anterior
const precioProducto = producto.precio;

//console.log('El precio del producto es de: ' + precioProducto + '$')

//Destructuring
const {precio, nombreProducto} = producto;

console.log(precio)
console.log(nombreProducto)