import Produto from './produto'

class Notebook extends Produto {
    constructor(nome: string,
        preco: number,
        desconto: number,
        status: boolean,
        public readonly memoria: number,
        public readonly cpu: number,
        public readonly hd: number,
        private _os: string = "UNIX") {
        super(nome, preco, desconto, status)

    }

    public reservar(): boolean {
        try {
            this.aplicarDesconto()
            this.desativar()

            return true
        } catch (e) {
            console.error(e)

            return false
        }
    }

    get os(): string {
        return this._os
    }

    set os(os: string) {
        this._os = os
    }

    static criarNotebookDell(): Notebook {
        let dell: Notebook = new Notebook("Notebook DELL", 5899.99, 0.1, true, 8, 4, 512)
        dell.os = "WINDOWS"

        return dell
    }
}

export default Notebook