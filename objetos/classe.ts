import Pessoa from './pessoa'
import Notebook from './notebook'


const fulano = new Pessoa("Fulano", "da Silva")
fulano.saudacao()

const notebookDell = Notebook.criarNotebookDell()
notebookDell.visualizar()
notebookDell.aplicarDesconto()
notebookDell.visualizar()

const mackbook = new Notebook("Macbook", 18777.99, 0.2, true, 16, 8, 1024)
mackbook.os = "MAC"
mackbook.reservar()
