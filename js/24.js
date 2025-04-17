//FOR LOOP

/* for( let i = 0; i <= 10; i++) {
    console.log(i)
}

for( let i = 0; i <= 100; i++) {
    if (i % 2 === 0){
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es IMPAR`);
    }
    
}

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]

for( let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre )
} */

//While Loop

let i = 1; //A diferencia del FOR, el iterador se iniciliza fuera del condicional

while(i <= 100) { //Se evalua antes de realizar la operacion, si no se cumple no hace nada
    if(i % 2 === 0){
        console.log(`El numero ${i} es PAR`)
    } else {
        console.log(`El numero ${i} es IMPAR`)
    }
    i++; //EL INCREMENTO SE COLOCA AL FINAL
}

//DO WHILE

let e = 20; //se declara el indicie 

do{
    console.log(e)  //se ejecuta el codigo

    e++;  //hace el incremento
}while( e < 10 )  // y luego evalua

//Por lo tanto el do while va a ejecutar el codigo aunque sea una vez!!!