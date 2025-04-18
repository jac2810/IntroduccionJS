//TRY CATCH hace referencia cuando hay un error en el programa pero no detiene la ejecucion del resto del codigo

const num1 = 10;
const num3 = 30;

console.log(num1)

try {
    console.log(num2)
} catch (error) {
    console.log(error);
}

console.log(num3);