class Video {
    constructor(url){
        this._url = url
    }
    get url () {
        return this._url
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

let musicURL = `<iframe width="560" height="315"src="https://www.youtube.com/embed/VDd_sdAMbtE" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`;

let movieURL = `<iframe width="560" height="315"src="https://www.youtube.com/embed/5PSNL1qE6VY" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`;

let serieURL = `<iframe width="560" height="315"src="https://www.youtube.com/embed/rlR4PJn8b8I" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`;


const musicVideo = new Music(musicURL)
const movieVideo = new Movie(movieURL)
const serieVideo = new Serie(serieURL)
console.log(musicVideo.url)
console.log(movieVideo.url)
console.log(serieVideo.url)

var musicBtn = $('[data-target="#collapseOne"]')
var movieBtn = $('[data-target="#collapseTwo"]')
var serieBtn = $('[data-target="#collapseThree"]')

musicBtn.on("click", function(){
    var target = $("#musica")
    return function(){
        $(".card-body.text-center").empty()
        target.append(musicVideo.url)
    }
}())
movieBtn.on("click", function(){
    var target = $("#peliculas")
    return function(){
        $(".card-body.text-center").empty()
        target.append(movieVideo.url)
    }
}())

serieBtn.on("click", function(){
    var target = $("#series")
    return function(){
        $(".card-body.text-center").empty()
        target.append(serieVideo.url)
    }
}())


















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