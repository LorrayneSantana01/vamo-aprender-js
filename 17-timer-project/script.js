window.addEventListener('DOMContentLoaded', function() {

const relogioHTML = document.querySelector("#relogio")
let segundos = 0
let minutos = 0
let horas = 0
let intervalo

var iniciarButton = document.querySelector("#iniciar")
var pausarButton = document.querySelector("#pausar")
var zerarButton = document.querySelector("#zerar")

function iniciar() {
    relogio()
    intervalo = setInterval(relogio, 1000)
}

const pausar = () => {
    clearInterval(intervalo)
}

const zerar = () => {
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    relogioHTML.innerHTML = "00:00:00"
}

function zeroAEsquerda (digit) {
    
    if(digit < 10){
        return `0${digit}`
    } else {
        return digit
    }
}

iniciarButton.addEventListener('click', iniciar)
pausarButton.addEventListener('click', pausar)
zerarButton.addEventListener('click', zerar)

function relogio() {

    segundos++

    if(segundos === 60){
        segundos = 0
        minutos++
    }

    if(minutos === 60){
        minutos = 0
        horas++
    }

    relogioHTML.innerHTML = zeroAEsquerda(horas) + ":" + zeroAEsquerda(minutos) + ":" + zeroAEsquerda(segundos)
}

})