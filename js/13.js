const producto = {
    nombreProducto: "TV 20 Pulgadas", //propiedad del objeto
    precio: 300, //propiedad del objeto
    disponible: true //propiedad del objeto
}

const medidas = {
    peso: '1Kg',
    ancho: '1m'
}

const nuevoProducto = {...producto, ...medidas} //Spread Operator, sirve para unir objetos sin mutarlos (modificarlos)

console.log(nuevoProducto)