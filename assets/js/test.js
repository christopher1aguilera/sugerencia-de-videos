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