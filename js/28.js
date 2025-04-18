//Clases

class Producto {
    constructor(tipo, nombre, precio, inventario, color){
        this.tipo = tipo
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.inventario = inventario;
    }

    formatearProducto(){
        if(this.inventario){
            return (`El ${this.tipo} ${this.nombre} de color ${this.color} tiene un precio de: $${this.precio}. Se encuentra disponible`)
        }else{
            return (`El ${this.tipo} ${this.nombre} de color ${this.color} no esta disponible`)
        }
    }
}

//Herencia

class Libro extends Producto{ //Con la palabra reservada extends se hace referencia a la clase padre
    constructor(tipo, nombre, precio, inventario, isbn){
        super(tipo, nombre, precio, inventario); //Con la expresion SUPER se traen las propiedades existentes en la clase padre
        this.isbn = isbn;
    }

    formatearProducto(){
        if(this.inventario){
            return (`El ${this.tipo} ${this.nombre} tiene un precio de: $${this.precio}. Se encuentra disponible y su ISBN es: ${this.isbn}`) //con la exprecion SUPER se trae el codigo del metodo de la clase padre
        }else {
            return (`El ${this.tipo} ${this.nombre} no se encuentra disponible`)
        }
    }
}

const producto = new Producto('Portatil', 'Dell', 1450, true,'azul');
const producto2 = new Producto('Portatil', 'Toshiba', 1100, false,'negro');
const producto3 = new Producto('Monitor','Acer', 1100, true,'plateado');
const producto4 = new Producto('Teclado','Ergonomico Microsoft', 150, true,'negro');

const libro = new Libro('libro','Caballo de Troya', 350, false, '46746876746577')
const libro2 = new Libro('libro','Piense y Hagase Rico', 670, true, '66787634556')

console.log(producto.formatearProducto())
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(libro.formatearProducto())
console.log(libro2.formatearProducto())
console.log(producto4.formatearProducto());
