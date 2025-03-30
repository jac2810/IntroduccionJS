//String o cadena de texto

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"
const producto2 = 'Monitor HD'
console.log(producto2.length)
console.log(producto2)

//Para comprobar que parte de una cadena de texto existe una palabra, si devuelve un nomero menor a cero no existe la palabra

console.log(tweet.indexOf('JavaScript'))
console.log(producto2.indexOf('JavaScript'))

//Para comprobar si existe una palabra en la cadena. Devuelve un booleano (true o false)

console.log(tweet.includes('JavaScript'))
console.log(producto2.includes('JavaScript'))