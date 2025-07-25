"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
//Criando uma classe para os livros:
class Livro {
    constructor(t, a, i, p, id) {
        this.id = id;
        this.titulo = t;
        this.autor = a;
        this.ISBN = i;
        this.ano_de_publicacao = p;
    }
}
exports.Livro = Livro;
