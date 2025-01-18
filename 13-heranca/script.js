class Pessoa {
    constructor(nome, telefone, email) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }

    andar() {
        console.log(this.nome + " está andando")
    }

    falar() {
        console.log(this.nome + " está falando")
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, telefone, email, cpf) {
        super(nome, telefone, email)
        this.cpf = cpf
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, telefone, email, cnpj) {
        super(nome, telefone, email)
        this.cnpj = cnpj
    }

    pagarSalario(){
        console.log(this.nome + " está pagando os salarios")
    }
}

let pessoa1 = new PessoaFisica("Lorrayne","123","lorrayne@lorrayne.com","123456")
pessoa1.andar()
pessoa1.falar()
console.log(pessoa1.nome, pessoa1.cpf)

let pessoa2 = new PessoaJuridica("Marcelo","098","marcelo@marcelo.com","098765")
pessoa2.andar()
pessoa2.falar()
pessoa2.pagarSalario()
console.log(pessoa2.nome, pessoa2.cnpj)