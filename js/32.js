//Async / Await

// function descargarNuevosClientes(){ //Con este codigo se simula que se esta esperando por un  proceso externo al programa
//     return new Promise(resolve => {
//         console.log('Descargando clientes... Espere!!!');

//         setTimeout( () => { //se usa para demorar en xxxx milisegundos la ejecucion de un proceso
//             resolve('Los clientes fueron descargados');
//         },5000)
//     })
// }

// async function app(){
//     try{
//         const resultado = await descargarNuevosClientes(); //Lo que este dentro del try despues del await se bloqueara hasta que se ejecute el codigo pendiente.
//         console.log(resultado)
//     } catch(error){
//         console.log(error);
//     }
    
// }

// app();

// console.log('Este codigo no se bloquea') //el programa sigue su curso mientras sigue esperando que se ejecute lo que esta dentro del async


function descargarNuevosClientes(){ //Con este codigo se simula que se esta esperando por un  proceso externo al programa
    return new Promise(resolve => {
        console.log('Descargando clientes... Espere!!!');

        setTimeout( () => { //se usa para demorar en xxxx milisegundos la ejecucion de un proceso
            resolve('Los clientes fueron descargados');
        },5000)
    })
}

function descargarPedidos(){ //Con este codigo se simula que se esta esperando por un  proceso externo al programa
    return new Promise(resolve => {
        console.log('Descargando pedidos... Espere!!!');

        setTimeout( () => { //se usa para demorar en xxxx milisegundos la ejecucion de un proceso
            resolve('Los pedidos fueron descargados');
        },3000)
    })
}

async function app(){
    try{
        const resultado = await Promise.all([descargarNuevosClientes(), descargarPedidos()]) //Con el promise.all se introducen las funciones dentro de un arreglo [] para trabajar con dos o mas consultas async await
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch(error){
        console.log(error);
    }
  
}

app();

console.log('Este codigo no se bloquea')