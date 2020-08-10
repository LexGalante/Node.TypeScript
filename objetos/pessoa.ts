class Pessoa {
    public nome: string
    public sobrenome: string

    constructor(nome: string, sobrenome: string = "da Silva") {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    saudacao: () => void = () => console.log(`Olá ${this.nome} ${this.sobrenome}`)
}

export default Pessoa