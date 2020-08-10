let pessoa: { nome: string, sobrenome: string, idade: number, ativo: boolean } = {
    "nome": "Alex",
    "sobrenome": "Galante",
    "idade": 30,
    "ativo": true
}

console.log(typeof pessoa)

let pessoaFuncionario: {
    nome: string
    sobrenome: string
    processarHierarquia: (salario: number) => string
} = {
    "nome": "Alex",
    "sobrenome": "Volnei Galante",
    "processarHierarquia": (salario: number) => {
        if (salario > 10000)
            return "Chefe"
        else
            return "Oreia"
    }
}

console.log(pessoaFuncionario.processarHierarquia(11000))

type Admin = {
    "ehAdmin": boolean
}

let administrador: Admin = {
    ehAdmin: true
}

console.log(administrador.ehAdmin)