@decoradorClasse
class LinguagemProgramacao {
    constructor() {
        console.info(`Construtor ${typeof this} invocado!!!`)
    }
}

function decoradorClasse(construtor: Function) {
    console.log(construtor)
}

