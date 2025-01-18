class Utils {
    static configLinguagem = "PT-BR"

    static configTime = {
        hour: "2-digit",
        minute: "2-digit"
    }

    static getFormateDate() {
        let date = new Date()
        return date.toLocaleDateString(this.configLinguagem, this.configTime)
    }
}

class Conta {
    constructor(nome, numero, saldo) {
        this.nome = nome
        this.numero = numero
        this.saldo = saldo
        this.extrato = []
    }

    get exibirExtrato() {
        console.log("---------EXTRATO DA CONTA---------")

        this.extrato.forEach(item => {
            console.log(item)
        })

        console.log("---------FIM DO EXTRATO---------")
    }

    registrarNoExtrato(item) {
        this.extrato.push(item)
    }
}

class ContaPoupanca extends Conta {

    #taxaSaque = 0.10

    saque(valor) {
        let TaxaSaqueDoValor = valor * this.#taxaSaque
        let ValorSaqueComTaxa = valor + TaxaSaqueDoValor

        if(ValorSaqueComTaxa > this.saldo) {
            throw new Error("Saldo insuficiente")
        }

        this.saldo = this.saldo - ValorSaqueComTaxa
        this.registrarNoExtrato(Utils.getFormateDate() + " - Saque de: R$" + valor + " - Saldo de: R$" + this.saldo)
        console.log("O saldo atual apos o saque é de: " + this.saldo)
    }

    deposito(valor) {
    this.saldo = this.saldo + valor
    this.registrarNoExtrato(Utils.getFormateDate() + " - Deposito de: R$" + valor + " - Saldo de: R$" + this.saldo)
    }
}

let novaContaPoupanca = new ContaPoupanca("Lorrayne","123", 2000)
novaContaPoupanca.saque(1000)
novaContaPoupanca.deposito(500)
novaContaPoupanca.exibirExtrato