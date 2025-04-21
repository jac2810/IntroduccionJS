const boton = document.querySelector('#boton'); //querySelector se usa para seleccionar elementos del HTML
boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

//Mostramos una notificacion
if(Notification.permission == 'granted'){
    new Notification('Eleggua',{         //Instanceamos la clase "Notificacion" y le pasamos 2 parametros: el titulo de la notificacion y luego un objeto con las propiedades de icon que es la imagen y body que es el texto de la notificacion.
        icon: 'img/Eleggua.png',
        body: 'Eleggua abre todos los caminos!!!',
    })
}