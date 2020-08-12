export default interface IContrato {
    nome: string
    sobrenome: string
    [prop: string]: any
    digaOi: (nome: string) => void
    nomeCompleto: () => string
}