import Pessoa from '../objetos/pessoa';

class Resposta<T> {
    constructor(private _data: T,
        public status: boolean = false,
        public message: string = "") {

        }

    public imprimir = () => {
        console.info(typeof this._data)
        console.log(this._data)
    }
}

const resposta: Resposta<Pessoa> = new Resposta<Pessoa>(new Pessoa("Alex", "Galante"), true, "generics")
resposta.imprimir()

const nomes: Array<string> = ["Alex", "Galante"]
console.log(nomes.length)

