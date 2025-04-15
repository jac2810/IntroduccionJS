//FUNCIONES QUE RETORNAN VALORES

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(totalCompra){
    return 1.15 * total
}

total = agregarCarrito(130);
total = agregarCarrito(430);
total = agregarCarrito(530);

console.log("El total neto es: " + total);

const totalAPagar = calcularImpuesto(total)

console.log(`El total a pagar despues de impuestos es de: $${totalAPagar}`);