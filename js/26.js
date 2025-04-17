//This

const reservacion = {
    nombre: 'Jesus',
    apellido: 'Carrillo',
    total_a_pagar: 5432,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su monto a pagar es de ${this.total_a_pagar}`);
    }
}

reservacion.informacion();

//El THIS se usa para referirse dentro de una funcion, a la propiedad de un objeto del cual es parte esa funcion.

//En este contexto, no se puede usar el THIS con una arrow function ya que ese "this" llamaria a la propiedad x del obejto global "window.x"