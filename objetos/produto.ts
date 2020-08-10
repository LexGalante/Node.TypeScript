abstract class Produto {
    constructor(public nome: string,
        public preco: number,
        public desconto: number = 0.1,
        private status: boolean = true) {
    }

    private calcularDesconto: () => number = () => this.preco * this.desconto

    public aplicarDesconto: () => void = () => this.preco -= this.calcularDesconto()

    public ativar: () => void = () => this.status = true

    protected desativar: () => void = () => this.status = false

    protected obterStatus: () => boolean = () => this.status

    public visualizar: () => void = () => console.log(this)
}

export default Produto