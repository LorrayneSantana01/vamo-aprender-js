class Impostos{
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    #porcentagemImposto = 0.20

    #calcularImposto(){
        return this.salario * this.#porcentagemImposto
    }

    obterSalario(){
        return this.salario - this.#calcularImposto()
    }
}

let pessoa1 = new Impostos("Lorrayne", 1000)
console.log(pessoa1.obterSalario())