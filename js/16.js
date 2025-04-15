//FUNCIONES

//DECLARACION DE FUNCIONES

function sumar(){
    console.log(10 + 10)
} //Este tipo de funciones se pueden llamar incluso antes de declararlas ya que Javascript se ejecuta en dos vueltas, en la primera lee las funciones y en la segunda vuelta ejecuta el codigo incluso el llamado de esas funciones

sumar() //se llama la funcion

//EXPRESION DE LA FUNCION

const sumar2 = function(){
    console.log(20 +20)
}

sumar2();

//IIFE funciones que se llaman a si mismas

(function() {
    console.log('Esto es una funcion')
}
)();