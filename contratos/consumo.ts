import Contrato from './contrato'

class Servico implements Contrato {
    public nome: string = ""
    public sobrenome: string = ""

    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    nomeCompleto = () => "Alex Galante"
    digaOi = (nome: string) => `Olá ${nome}` 
}


const saudacao = (servico: Contrato) =>  {
    servico.digaOi(servico.nomeCompleto())
}

const servico: Contrato = {
    nome: "Alex",
    sobrenome: "Galante",
    nomeCompleto: () => "Alex Galante",
    digaOi: (nome: string) => `Olá ${nome}`
}

saudacao(servico)
saudacao(new Servico("Alex", "Galante"))

interface Soma {
    (num1: number, num2: number): number
}

const calcularSoma = (num1: number, num2: number, func: Soma) => console.log(func(num1, num2))

const somadora: Soma = (num1: number, num2: number) => num1 + num2

calcularSoma(5, 5, somadora)