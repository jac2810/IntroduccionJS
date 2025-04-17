const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//For Each y Map son metodos exclusivos de arreglos

carrito.forEach( producto => console.log(producto.nombre)); //Se usa para iterar arreglos y mostrar los resultados


//For Each

const arreglo2 = carrito.map( producto => producto.nombre)

console.log(arreglo2)

//Este se usa para devolver el valor y crear nuevos arreglos a partir de los datos de un arreglo existente.

