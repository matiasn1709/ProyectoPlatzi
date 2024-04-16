/* retos:
poner los ataques enemigos de acuerdo a los ataques del personaje.
poner atributos a los personajes y que en base a esto, pueda agregarse un ataque extra. Ej: Agua vs Fuego, atributo agua es más fuerte, tiene un ataque más.
agregar 3 personajes más.*/

//botones
const botonPersonaje = document.getElementById('boton-personaje')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonesAtaque = document.getElementById('botones-ataque')
//selección
const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
const spanPersonajeJugador = document.getElementById('personaje-jugador')
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')
//victorias
const spanVictoriasJugador = document.getElementById('victorias-jugador')
const spanVictoriasEnemigo = document.getElementById('victorias-enemigo')
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
let ataquePersonajeEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let imputScorpion
let imputReptile
let imputErmac
let imputLiuKang
let imputSubZero
let imputBaraka
let personajeJugador
let victoriasJugador = 0
let victoriasEnemigo = 0

/* Personajes */
class Personaje {
    constructor(nombre,foto,vida, atributo){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.atributo = atributo
    }
}

let scorpion = new Personaje('Scorpion','Imagenes/SCORPION.png',5 ,'fuego')

let reptile = new Personaje('Reptile','Imagenes/reptile.png' ,5, 'agua')

let ermac = new Personaje('Ermac','Imagenes/ermac.png',5, 'tierra')

let liuKang = new Personaje('Liu-Kang','Imagenes/liu-kang.png',5, 'fuego')

let subZero = new Personaje('Sub-Zero','Imagenes/sub-zero.png',5, 'agua')

let baraka = new Personaje('Baraka','Imagenes/baraka.png',5, 'tierra')


scorpion.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌎', id:'boton-tierra'}
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

liuKang.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌎', id:'boton-tierra'}
)

subZero.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'}
)

baraka.ataques.push(
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'}, 
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

personajes.push(scorpion, reptile, ermac, liuKang, subZero, baraka)
/* Personajes*/

function iniciarJuego(){  
    sectionSeleccionarAtaque.style.display = 'none'
    botonReiniciar.style.display = 'none'
    
    personajes.forEach((personaje) => {
        opcionDePersonajes = `
        <input type="radio" name="Personajes" id=${personaje.nombre} />
        <label class="tarjeta-de-mokepon ${personaje.atributo}" for=${personaje.nombre}>
        <p>${personaje.nombre}</p> 
        <img src=${personaje.foto} alt=${personaje.nombre}></img>
        `
        tarjetas.innerHTML += opcionDePersonajes

        imputScorpion = document.getElementById('Scorpion')
        imputReptile = document.getElementById('Reptile')
        imputErmac = document.getElementById('Ermac')
        imputLiuKang = document.getElementById('Liu-Kang')
        imputSubZero = document.getElementById('Sub-Zero')
        imputBaraka = document.getElementById('Baraka')
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
    }else if (imputLiuKang.checked){
        spanPersonajeJugador.innerHTML = imputLiuKang.id
        personajeJugador = imputLiuKang.id
    }else if (imputSubZero.checked){
        spanPersonajeJugador.innerHTML = imputSubZero.id
        personajeJugador = imputSubZero.id
    } else if (imputBaraka.checked){
    spanPersonajeJugador.innerHTML = imputBaraka.id
    personajeJugador = imputBaraka.id
    }else {
        alert('Debes elegir una Personaje');
        reiniciar();
    }
    
    seleccionarPersonajeEnemigo()
    extraerAtaques(personajeJugador)
    secuenciaAtaque()
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
        opcionDeAtaques =`<button class="BAtaque" id=${ataque.id}>${ataque.nombre}</button>`

        botonesAtaque.innerHTML += opcionDeAtaques
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = 'black'
                boton.disabled = true
            }  else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = 'black'
                boton.disabled = true
            }   else  {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = 'black'
                boton.disabled = true
            } 
            ataqueAleatorioEnemigo()
        })
    }) 
}

function seleccionarPersonajeEnemigo(){
    let PersonajeAleatorio = aleatorio(0, personajes.length -1)

    spanPersonajeEnemigo.innerHTML = personajes[PersonajeAleatorio].nombre
    ataquePersonajeEnemigo = personajes[PersonajeAleatorio].ataques

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquePersonajeEnemigo.length -1)

    if(ataqueAleatorio == 0){
        ataqueEnemigo.push(ataquePersonajeEnemigo[0])
    }  
    
    /*if(ataqueAleatorio==0 || ataqueAleatorio == 1){ataqueEnemigo.push('FUEGO')}else if(ataqueAleatorio==3 || ataqueAleatorio == 4){ataqueEnemigo.push('AGUA')}else{ataqueEnemigo.push('TIERRA')}
console.log(ataqueEnemigo)*/
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador. length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){ 
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATE')
        } else if ((ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') || (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') || (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA')) {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }

    }
    revisarVictorias()
}

function revisarVictorias(){ 
    if (victoriasJugador > victoriasEnemigo ){
        crearMensajeFinal("🎉Ganaste la partida🎉")
    } else if (victoriasJugador < victoriasEnemigo){
        crearMensajeFinal("😜 Perdiste la partida 😜")
    } else {
        crearMensajeFinal("🥱 Empate amargo 🥱")
    }
}

function crearMensaje(resultado) {
     let nuevoAtaqueDelJugador = document.createElement('p')
     let nuevoAtaqueDelEnemigo = document.createElement('p')
    
     sectionMensajes.innerHTML = resultado
     nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
     nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    
     ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
     ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonReiniciar.style.display = 'block'
}

function reiniciar(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min) 
}


window.addEventListener('load', iniciarJuego) // Esto sirve para cargar el archivo .js en caso de colocarlo al principio del html

