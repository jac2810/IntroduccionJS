function sumar(n1 = 0, n2 = 0){   //n1 y n2 son parametros que se le asignan a la funcion, y el valor =0 viene siendo el valor por defecto en caso de que no se le pase ningun argumento a la funcion cuando se invoque
    console.log(n1 + n2)
}

sumar(34,45) //34 y 45 numeros al azar que vienen a ser argumentos que se situan en su respectivo valor en los parametros de la funcion arriba definidos


const sumar2 = function(a1,a2){
    console.log(a1 + a2)
}

sumar2(20,35);