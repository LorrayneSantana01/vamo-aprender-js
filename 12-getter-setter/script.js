class Banco {
    constructor(saldo) {
        this.saldo = saldo
    }

    get obterAtributos () {
        return this.saldo
    }

    set definirAtributos (valor) {
        this.saldo = valor
    }
}

let exemplo = new Banco ("NuBank")
console.log(exemplo.obterAtributos)

exemplo.definirAtributos = "Inter"
console.log(exemplo.obterAtributos)