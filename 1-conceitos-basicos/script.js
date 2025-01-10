// Imprimir na tela

console.log("Oiiiii")

// Variáveis

var meu_nome = "Lorrayne"
var minha_idade = 23

console.log(meu_nome)
console.log(minha_idade)

// Constantes

const minha_empresa = "Full Estresse"
const meu_salario = 6000

console.log(minha_empresa)
console.log(meu_salario)

// Arrays

var array = ["maça", "banana", "morango"]

console.log(array[2])

// Operadores Aritméticos

var num1 = 10
var num2 = 5

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

// Operadores de Atribuição

var numero = 10
var outro_numero = 20

var soma = numero += outro_numero

console.log(soma)

// Operadores de Comparação

var numero1 = 3
var numero2 = 6

if (numero1 == numero2) {
    console.log("igual")
} else {
    console.log("diferente")
}

// If / Else

// "Liberado!"

semaforo = "verde"

if (semaforo == "verde") {
    console.log("Liberado!")
}

// "Pare!"

semaforo1 = "vermelho"

if (semaforo1 == "verde") {
    console.log("Liberado!")
} else {
    console.log ("Pare!")
}

// "Atenção!"

semaforo2 = "amarelo"

if (semaforo2 == "verde") {
    console.log("Liberado!")
} else if (semaforo2 == "vermelho") {
    console.log("Pare!")
} else {
    console.log("Atenção!")
}

// Animações com JS

// Transições Simples

let position = 0

const box = document.getElementById("box")

function moveBox() {
    if(position < 1200) {
        position += 10

        box.style.left = position + "px"
        requestAnimationFrame(moveBox)
    }
}

moveBox()

// Transições Controladas

const button = document.getElementById("button")

button.addEventListener('click',
    function() {
        button.classList.toggle('active')
    }
)

// Transições com bibliotecas externas

