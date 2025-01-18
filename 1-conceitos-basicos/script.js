// Imprimir na tela

console.log("Oiiiii")

// Tipo de Dados e TypeOf

var String = "Frase"
var Inteiro = 123
var Float = 123.01
var Booleano = true

console.log(String)
console.log(Inteiro)
console.log(Float)
console.log(Booleano)

console.log(typeof String)
console.log(typeof Inteiro)
console.log(typeof Float)
console.log(typeof Booleano)

// Variáveis

var meu_nome = "Lorrayne" // valor variável
var minha_idade = 23 // valor variável

console.log(meu_nome)
console.log(minha_idade)

// Constantes

const minha_empresa = "Full Estresse" // valor constante
const meu_salario = 6000 // valor constante

console.log(minha_empresa)
console.log(meu_salario)

// Arrays

var array = ["maça", "banana", "morango"]

console.log(array[2])

// Trocar Informações de Variaveis

var a = 5
var b = 8

let c = a
a = b
b = c

console.log("a: " + a)
console.log("b: " + b)

// Operadores Aritméticos

var num1 = 10
var num2 = 5

console.log(num1 + num2) // soma
console.log(num1 - num2) // subtração
console.log(num1 * num2) // multiplicação
console.log(num1 / num2) // divisão
console.log(num1 % num2) // resto
console.log(num1 ** num2) // expoente

var soma = 1 + 2 // soma
var subtracao = 1 - 2 // subtração
var multiplicacao = 1 * 2 // multiplicação
var divisao = 1 / 2 // divisão
var resto = 1 % 2 // resto
var expoente = 1 ** 2 // expoente

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)
console.log(expoente)

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
} else if (numero1 === numero2) {
    console.log("igual até de tipo")
} else if (numero1 != numero2) {
    console.log("diferente")
} else if (numero1 !== numero2) {
    console.log("diferente até de tipo")
} else if (numero1 < numero2) {
    console.log("menor que")
} else if (numero1 > numero2) {
    console.log("maior que")
} else if (numero1 <= numero2) {
    console.log("menor ou igual que")
} else if (numero1 >= numero2) {
    console.log("maior ou igual que")
} else {
    console.log("acabou!")
}

// Operadores Lógicos

var letra1 = "x"
var letra2 = "y"

console.log("x" == "x" && "y" == "y") // AND
console.log("x" == "x" || "y" == "y") // OR
console.log(!("a"=="a")) // NOT

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