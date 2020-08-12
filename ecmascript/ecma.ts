// LET & CONST
const ecmaConst = "CONSTANTE"
if (2 > 1) {
    let ecmaLet = "VARIAVEL LOCAL"
    console.log(ecmaLet)
}
console.log(ecmaConst)
// ARROW FUNCTIONS
const funcaoSoma: (num1: number, num2: number) => number = (num1: number, num2: number): number => num1 + num2
// DEFAULT PARAMETER
const funcaoConcate = (text: string, comp: string = " Bem-vindo") => `${text}${comp}`
console.log(funcaoConcate("Alex"))
//SPREAD OPERATOR
console.log(Math.max(...[5, 10, 33, -9, -8]))
//REST OPERATOR
const numerosAleatorios = (...args: number[]): number[] => args
console.log(numerosAleatorios(2, 3, 4, 5, 6, 7, 8))
//DESTRUCTING
const computador = ["Memoria: 2mg", "CPU: I7", "Modelo: DELL", 8000.99]
const [memoria, cpu, modelo, preco] = computador
const notebook = {
    "memoria": "8mg",
    "cpu": "i7",
    "preco": 7500
}
const { memoria: memoriaNote, cpu: cpuNote, preco: precoNote } = notebook
// TEMPLATE STRING
const mensagemPratodos = `Computador ${modelo}, Memória: ${cpu}, Preço: ${preco}`
// PROMISSE
const consultaCep = (cep: number = 83065050) => fetch(`https://viacep.com.br/ws/${cep}/json/`)

consultaCep()
    .then(result => console.log(result))
    .catch(err => console.error(err))
