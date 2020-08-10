// tipo é inferido
let nome = "Alex"
let sobrenome: string = "Volnei Galante"
let idade: number = 30
let salario: number = 999.999
let ativo: boolean = true
let funcionario: any = { "xpto": "xpto" }
let nomes: string[] = ["Alex", "Volnei", "Galante"]
let situacao: [boolean, string] = [true, "Ativo"]
let usuario: [string, number, boolean] = ["alexg", 123456, true]

//dinamico 
let dinamico: any = true
dinamico = 1
dinamico = "teste"
dinamico = { "teste": 12 }
dinamico = [1, true, ""]

// enum
enum Cor {
    Vermelho,
    Azul,
    Amarelo,
    Rosa,
    Verde
}

// union types
let ativo2: boolean | number = 1
ativo2 = true;

if (typeof ativo2 == "number")
    console.log(`ativo2 number ${ativo2}`)
else
    console.log(`ativo2 boolean ${ativo2}`)

// never, explicitamos que a função não tem fim
let loopDead = (text: string): never => {
    while (true) {
        console.log(text)
    }
}

let opcional: boolean | null = null

// desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)