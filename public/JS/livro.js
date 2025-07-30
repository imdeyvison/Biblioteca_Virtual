// Classe abstrata
export class Publicacao {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}
// Classe Livro herdando Publicacao
export class Livro extends Publicacao {
    constructor(titulo, autor, isbn, genero, ano_de_publicacao) {
        super(titulo, autor); // chama o construtor da classe abstrata
        this.emprestado = false; // Atributo que indica se o livro está emprestado ou não 
        this.isbn = isbn;
        this.genero = genero;
        this.ano_de_publicacao = ano_de_publicacao;
        this.id = ++Livro.contador;
    }
    exibirResumo() {
        console.log(`${this.titulo}, de ${this.autor}`);
    }
    exibirInformacoes() {
        console.log(`Livro: ${this.titulo} Autor: ${this.autor} ISBN: ${this.isbn} Gênero: ${this.genero} Ano: ${this.ano_de_publicacao}`);
    }
}
Livro.contador = 0; // Propriedade estática que mantém o contador de livros, usado para gerar IDs únicos automaticamente
