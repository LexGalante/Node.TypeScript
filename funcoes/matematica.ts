function imprimir(numero: number): void {
    console.log(numero)
}

function soma(val1: number, val2: number): number {
    return val1 + val2
}

const multiplicar = (val1: number, val2: number): number => val1 * val2

let total: number = soma(5, 10)
imprimir(total)