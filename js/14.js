const numeros = [10,20,30,40,50] //Los arreglos se arman entre corchetes ( [ ] )

// const arreglo = [10,'hola',false,{nombre:'pedro', apellido:'perez'},456,'esto es un arreglo de varios tipos de datos']

// console.log(numeros)

// console.table(arreglo)

// console.log(numeros[2])


// console.log(arreglo.length)

// numeros.forEach(function(numero){
//     console.log(numero)
// })   //forEach es para iterar los elementos de un arreglo

numeros[5] = 60 //Agrega elemento al final del arreglo conociendo la longitud del mismo


numeros.push(70) //Agrega elementos al arreglo al final sin conocer la longitud del mismo
numeros.unshift(-10,-20) //Agrega elementos al arreglo al inicio del mismo

console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
// meses.pop() //Quita el ulimo elemento al final del arreglo   
// meses.shift() //Quita el primer elemento al principio del arreglo

//meses.splice(2,1) //splice elimina un valor entre el primero y el ultimo

console.table(meses)

//Rest Operator

const nuevoArreglo = [ 'Junio', ...meses]
console.table(nuevoArreglo)


