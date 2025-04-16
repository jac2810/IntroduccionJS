//ESTRUCTURAS DE CONTROL

const puntaje = 1004;

if(puntaje === 1000){
    console.log('Si el puntaje es 1000');
}else {
    console.log('No es igual')
}

if(puntaje !== 1000){
    console.log('Si el puntaje es 1000');
}else {
    console.log('No es igual')
}

rol = 'CLIENTE'

if(rol === 'ADMINISTRADOR'){
    console.log('Tienes Full Access')
} else if(rol === 'EDITOR') {
    console.log('Tienes acceso de edición')
} else if(rol === 'VISITANTE') {
    console.log('Solo puedes leer')
} else {
    console.log('No tienes acceso')
}

//EL IF ES UTIL CUANDO SE VA A EVALUAR UNA SOLA CONDICION