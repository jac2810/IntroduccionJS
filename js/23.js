//SWITCH ES MAS UTIL PARA EVALUAR MULTIPLES CONDICIONES

const metodoPago = 'paypal'

switch(metodoPago){
    case 'bitcoin':
        console.log('Pagaste con Bitcoin');
        break;
    case 'tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
    case 'paypal':
        console.log('Pagaste con Paypal');
        break;
    default:
        console.log('No has pagado');
        break;
}
