//Metodos de propiedad (creados por uno mismo)

const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion: ${id}`);
    },

    pausar : function(){
        console.log('Pausando...')
    },

    crearPlaylist : function(nombre){
        console.log(`Creando PlayList: ${nombre}`)
    },

    reproducirPlaylist : function(id){
        console.log(`Repoduciendo PlayList: ${id}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(547);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Merengue');
reproductor.reproducirPlaylist('Merengue');