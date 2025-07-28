"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = exports.Publicacao = void 0;
// Classe abstrata
class Publicacao {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}
exports.Publicacao = Publicacao;
// Classe Livro herdando Publicacao
class Livro extends Publicacao {
    constructor(titulo, autor, isbn, genero, ano_de_publicacao) {
        super(titulo, autor); // chama o construtor da classe abstrata
        this.emprestado = false; // Atributo que indica se o livro está emprestado ou não (inicialmente false)
        this.isbn = isbn;
        this.genero = genero;
        this.ano_de_publicacao = ano_de_publicacao;
        this.id = ++Livro.contador;
    }
    exibirResumo() {
        console.log(`${this.titulo}, de ${this.autor}`);
    }
    exibirInformacoes() {
        console.log(`📚 Livro: ${this.titulo}
  Autor: ${this.autor}
  ISBN: ${this.isbn}
  Gênero: ${this.genero}
  Ano: ${this.ano_de_publicacao}`);
    }
}
exports.Livro = Livro;
Livro.contador = 0;
