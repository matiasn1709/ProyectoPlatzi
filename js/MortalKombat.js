//botones
const botonPersonaje = document.getElementById('boton-personaje')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botones = document.getElementById('botones')
//selección
const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
const spanPersonajeJugador = document.getElementById('personaje-jugador')
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')
//vidas
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
//ataques
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
//final
const sectionMensajes = document.getElementById('resultado')
const botonReiniciar = document.getElementById('boton-reiniciar')
const tarjetas = document.getElementById('tarjetas')

let personajes = []
/*let ataque = []*/
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePersonajes
let opcionDeAtaques
let botonFuego
let botonAgua
let botonTierra
let imputScorpion
let imputReptile
let imputErmac
let personajeJugador
let vidasJugador = 3
let vidasEnemigo = 3

/* Personajes */
class Personaje {
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let scorpion = new Personaje('Scorpion', 'Imagenes/1685027093258.jpg', 5)

let reptile = new Personaje('Reptile','Imagenes/78e5e96fc775133e538d334074ef08826e0f118er1-670-512v2_hq.jpg' ,5)

let ermac = new Personaje('Ermac','Imagenes/nLM9cMNU_400x400.jpg',5)

scorpion.ataques.push(
    {nombre: 'Fuego', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌎', id: 'boton-tierra'}
)

reptile.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'}
)

ermac.ataques.push(
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'}, 
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

personajes.push(scorpion, reptile, ermac)
/* Personajes*/

function iniciarJuego(){  
    sectionSeleccionarAtaque.style.display = 'none'
    botonReiniciar.style.display = 'none'
    
    personajes.forEach((personaje) => {
        opcionDePersonajes = `
        <input type="radio" name="Personajes" id=${personaje.nombre} />
        <label class="tarjeta-de-mokepon" for=${personaje.nombre}>
        <p>${personaje.nombre}</p> 
        <img src=${personaje.foto} alt=${personaje.nombre}></img>
        `
        tarjetas.innerHTML += opcionDePersonajes

        imputScorpion = document.getElementById('Scorpion')
        imputReptile = document.getElementById('Reptile')
        imputErmac = document.getElementById('Ermac')
    })
    botonPersonaje.addEventListener('click', seleccionarPersonajeJugador)

    botonReiniciar.addEventListener('click', reiniciar)
} //Esto funciona junto con el elemento window del final

function seleccionarPersonajeJugador(){
    
    sectionSeleccionarPersonaje.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if (imputScorpion.checked){
        spanPersonajeJugador.innerHTML = imputScorpion.id
        personajeJugador = imputScorpion.id
    } else if (imputReptile.checked){
        spanPersonajeJugador.innerHTML = imputReptile.id
        personajeJugador = imputReptile.id
    } else if (imputErmac.checked){
        spanPersonajeJugador.innerHTML = imputErmac.id
        personajeJugador = imputErmac.id
    } else {
        alert('Debes elegir una Personaje');
        reiniciar();
    }
    
    seleccionarPersonajeEnemigo()
    extraerAtaques(personajeJugador)
}

function extraerAtaques(personajeJugador) {
    let ataques
    for (let i = 0; i < personajes.length; i++) {
        if (personajeJugador === personajes[i].nombre) {
            ataques = personajes[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        opcionDeAtaques = ` <button id=${ataque.id}>
        ${ataque.nombre}
        </button>`

        botones.innerHTML += opcionDeAtaques

        botonFuego = document.getElementById('boton-fuego')
        botonAgua = document.getElementById('boton-agua')
        botonTierra = document.getElementById('boton-tierra')
    })


    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarPersonajeEnemigo(){
    let PersonajeAleatorio = aleatorio(0, personajes.length -1)

    spanPersonajeEnemigo.innerHTML = personajes[PersonajeAleatorio].nombre
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio==1){ataqueEnemigo='FUEGO'}else if(ataqueAleatorio==2){ataqueEnemigo='AGUA'}else{ataqueEnemigo='TIERRA'}

    combate()
}

function combate(){ 
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'))
    {   crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()
}

function revisarVidas(){ 
    if (vidasEnemigo == 0){
        crearMensajeFinal("🎉Felicitaciones! ganaste la partida🎉")
    } else if (vidasJugador == 0){
        crearMensajeFinal("😜 Perdiste la partida 😜")
    }
}

function crearMensaje(resultado) {
     let nuevoAtaqueDelJugador = document.createElement('p')
     let nuevoAtaqueDelEnemigo = document.createElement('p')
    
     sectionMensajes.innerHTML = resultado
     nuevoAtaqueDelJugador.innerHTML = ataqueJugador
     nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
     ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
     ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true 
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonReiniciar.style.display = 'block'
}

function reiniciar(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min) 
}


window.addEventListener('load', iniciarJuego) // Esto sirve para cargar el archivo .js en caso de colocarlo al principio del html

