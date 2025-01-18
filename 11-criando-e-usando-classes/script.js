class Professora {
    constructor(nome, aula) {
        this.nome = nome
        this.aula = aula
    }

    aulaDe() {
        console.log("A professora " + this.nome + " da aulas de " + this.aula + "!")
    }
}

let professora = new Professora("Solange","geografia")
professora.aulaDe()