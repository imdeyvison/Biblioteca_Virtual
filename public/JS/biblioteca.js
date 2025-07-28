"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bibliotecaBD = exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.livros = []; // Inicializa o array 'livros' como vazio quando uma nova instância de 'Biblioteca' é criada.
    }
    adicionarLivro(livro) {
        this.livros.push(livro); // Adiciona o objeto 'livro' ao array 'livros'.
    }
    removerLivro(titulo) {
        for (let i = 0; i < this.livros.length; i++) { // Itera sobre o array de livros.
            if (this.livros[i].titulo === titulo) { // Verifica se o título do livro atual corresponde ao título fornecido.
                this.livros.splice(i, 1); // Remove o livro do array 'livros' na posição 'i'.
                return 'Livro removido com sucesso'; // Retorna uma mensagem indicando que a remoção foi bem-sucedida.
            }
        }
        return 'Livro não encontrado'; // Retorna uma mensagem indicando que o livro não foi encontrado.
    }
    listarLivros() {
        console.log('livros na biblioteca:', this.livros); // Exibe no console a lista de livros armazenados.
        return this.livros; // Retorna o array de livros armazenados.
    }
}
exports.Biblioteca = Biblioteca;
exports.bibliotecaBD = new Biblioteca(); // Cria e exporta uma instância da classe 'Biblioteca' chamada 'bibliotecaBD' para uso em outros módulos.
