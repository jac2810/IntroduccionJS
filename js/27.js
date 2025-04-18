//POO

//OBJECT LITERAL

const prod = {
    nombre: 'Televisor',
    precio: 340,
}

//OBJECT CONSTRUCTOR

function Producto(nombre, precio, inventario){
    this.nombre = nombre;
    this.precio = precio;
    this.inventario = inventario
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`; //Prototype es para que una funcion pueda usarse solo en su objeto respectivo
}

function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente se llama ${this.nombre} ${this.apellido}`;
}

const producto = new Producto('Laptop Dell', 1450, true);
const producto2 = new Producto('Laptop Toshiba', 1100, false);
const cliente = new Cliente('Jesus', 'Carrillo')
const cliente2 = new Cliente('Paula', 'Alexandra')

console.log(producto.formatearProducto())
console.log(cliente.formatearCliente())
console.log(cliente2.formatearCliente())
