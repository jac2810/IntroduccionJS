//ARROW FUNCTIONS (SE USAN LOS EJERCICIOS DEL ARCHIVO 15.JS)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
]

//forEach

meses.forEach(mes =>
    {
        if(mes == 'Marzo'){
            console.log('Marzo si existe')
        }
    }
)
//Tanto forEach como el Includes sirven para determinar si un elemento existe en el arreglo (arreglos planos)


//El SOME permite determinar la existencia de objetos dentro de los arreglos
resultado = carrito.some(producto => producto.nombre === 'Audifonos')
console.table(resultado)

//REDUCE puede acumular los valores de una propiedad de los objetos dentro del arreglo

resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.table(resultado)

//filter es el metodo mas usado y te devuelve las propiedades de los objetos segun la condicion que se aplique (===, !==, <, >, etc)

resultado = carrito.filter(producto => producto.precio < 200);
console.table(resultado)

