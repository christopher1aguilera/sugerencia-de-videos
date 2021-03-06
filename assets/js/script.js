class Video {
    // closures
    constructor(url){
        let _url = url

        this.geturl = () => {
            return _url
        }
    }
    // metodos insertar videos
    get url () {
        return this.geturl()
    }
}

class Music extends Video{
    constructor (url){
        super(url)
    }
}
class Movie extends Video{
    constructor (url){
        super(url)
    }
}
class Serie extends Video{
    constructor (url){
        super(url)
    }
}
// variables publicas
let musicURL = `<iframe width="560" height="315"src="https://www.youtube.com/embed/VDd_sdAMbtE" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let movieURL = `<iframe width="560" height="315"src="https://www.youtube.com/embed/5PSNL1qE6VY" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let serieURL = `<iframe width="560" height="315"src="https://www.youtube.com/embed/rlR4PJn8b8I" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const musicVideo = new Music(musicURL)
const movieVideo = new Movie(movieURL)
const serieVideo = new Serie(serieURL)
console.log(musicVideo.url)
console.log(movieVideo.url)
console.log(serieVideo.url)
//patron modulo
const moduloPrueba = (() => {
//varaibles privadas
let mtarget, ptarget, starget
mtarget = $("#musica")
ptarget = $("#peliculas")
starget = $("#series")
//funciones privadas
agregarmusica = () => {
    return function(){
        $(".card-body.text-center").empty()
        mtarget.append(musicVideo.url)
    }
}
agregarpelicula = () => {
    return function(){
        $(".card-body.text-center").empty()
        ptarget.append(movieVideo.url)
    }
},
agregarserie = () => {
    return function(){
        $(".card-body.text-center").empty()
        starget.append(serieVideo.url)
    }
}
//funciones privadas se ejecutaran como publicas
return {
    agregarmusicas: () => {
        return agregarmusica()
    },
    agregarpeliculas: () => {
        return agregarpelicula()
    },
    agregarseries: () => {
        return agregarserie()
    }
}
})()
// 
const video = (() => {
var musicBtn = $('[data-target="#collapseOne"]')
var movieBtn = $('[data-target="#collapseTwo"]')
var serieBtn = $('[data-target="#collapseThree"]')
//funcion publica llamando funcion privada
return {
musica: musicBtn.on("click", function(){
    return moduloPrueba.agregarmusicas()
}()),
pelicula: movieBtn.on("click", function(){
    return moduloPrueba.agregarpeliculas() 
}()),
serie: serieBtn.on("click", function(){
    return moduloPrueba.agregarseries()
}()),
}
})()


















// class Video {
//     constructor (videoMusica, videoPelicula, videoSerie) {
//         let _videoMusica = videoMusica;
//         this.getvideoMusica = () => _videoMusica;
//         this.setvideoMusica = (nuevo_videoMusica) => _videoMusica = nuevo_videoMusica;
//         let _videoPelicula = videoPelicula;
//         this.getvideoPelicula = () => _videoPelicula;
//         this.setvideoPelicula = (nuevo_videoPelicula) => _videoPelicula = nuevo_videoPelicula;
//         let _videoSerie = videoSerie;
//         this.getvideoSerie = () => _videoSerie;
//         this.setvideoSerie = (nuevo_videoSerie) => _videoSerie = nuevo_videoSerie;
//     }
//     get videoMusica () {
//         return this.getvideoMusica();
//     }
//     set videoMusica(nuevo_videoMusica) {
//         this.setvideoMusica(nuevo_videoMusica)
//     }
//     get videoPelicula () {
//         return this._videoMusica
//     }
//     set videoPelicula(videoMusica) {
//         this._videoMusica = videoMusica
//     }    
//     get videoSerie () {
//         return this._videoMusica
//     }
//     set videoSerie(videoMusica) {
//         this._videoMusica = videoMusica
//     }
//     mostrarMusica() {

//     }
//     mostrarPelicula() {
        
//     }
//     mostrarSeries() {
        
//     }
// }

// class Musica extends Video {
//     constructor(videoMusica, videoPelicula, videoSerie){
//         super(videoMusica, videoPelicula, videoSerie)
//     }
//     mostrarMusica() {

//     }
// }

// class Pelicula extends Video {
//     constructor(videoMusica, videoPelicula, videoSerie){
//         super(videoMusica, videoPelicula, videoSerie)
//     }
//     mostrarPelicula() {

//     }
// }

// class Serie extends Video {
//     constructor(videoMusica, videoPelicula, videoSerie){
//         super(videoMusica, videoPelicula, videoSerie)
//     }
//     mostrarSeries() {

//     }
// }


// //main
// const moduloPrueba = (() => {
//     //variables privadas
//     let musica, pelicula, serie;
//     musica = document.getElementById("musica")
//     pelicula = document.getElementById("peliculas")
//     serie = document.getElementById("series")
//     //funciones privadas
//     return {
//     mostrarMusica: () => {
//         return console.log("hola")
//     },
//     mostrarPelicula: () => {
//         return console.log("hola")
//     },
//     mostrarSeries: () => {
//         return serie.insertAdjacentHTML("afterend",'<video width="400" controls><source src="https://www.youtube.com/watch?v=znk2OICHbjY" type="video/mp4">Your browser does not support HTML video.</video>')
//     }
// }
// })()

// moduloPrueba.mostrarMusica()
// moduloPrueba.mostrarPelicula()
// moduloPrueba.mostrarSeries()