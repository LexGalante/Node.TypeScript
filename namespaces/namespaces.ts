namespace Geometria {
    export namespace Area {
        const PI: number = 3.14

        export const circuferencia: (raio: number) => number = (raio: number) => PI * Math.pow(raio, 2)

        export const retangulo: (base: number, altura: number) => number = (base: number, altura: number) => base * altura
    }
}

console.log(Geometria.Area.circuferencia(10))
console.log(Geometria.Area.retangulo(10, 20))

export default Geometria

