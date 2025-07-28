import { Livro } from './livro.js'; // Importa a classe 'Livro' do módulo 'livro.js'.

export class Biblioteca { // Declara a classe 'Biblioteca' e a exporta para que possa ser utilizada em outros módulos.
    livros: Livro[]; // Define um array de objetos do tipo 'Livro' para armazenar os livros na biblioteca.

    constructor() { // Define o construtor da classe 'Biblioteca'.
        this.livros = []; // Inicializa o array 'livros' como vazio quando uma nova instância de 'Biblioteca' é criada.
    }

    adicionarLivro(livro: Livro) { // Método para adicionar um novo livro à biblioteca.
        this.livros.push(livro); // Adiciona o objeto 'livro' ao array 'livros'.
    }

    removerLivro(titulo: string): string { // Método para remover um livro da biblioteca pelo título, retorna uma mensagem de sucesso ou falha.
        for (let i = 0; i < this.livros.length; i++) { // Itera sobre o array de livros.
            if (this.livros[i].titulo === titulo) { // Verifica se o título do livro atual corresponde ao título fornecido.
                this.livros.splice(i, 1); // Remove o livro do array 'livros' na posição 'i'.
                return 'Livro removido com sucesso'; // Retorna uma mensagem indicando que a remoção foi bem-sucedida.
            }
        }
        return 'Livro não encontrado'; // Retorna uma mensagem indicando que o livro não foi encontrado.
    }

    listarLivros(): Livro[] { // Método para listar todos os livros da biblioteca, retorna um array de objetos 'Livro'.
        console.log('livros na biblioteca:', this.livros); // Exibe no console a lista de livros armazenados.
        return this.livros; // Retorna o array de livros armazenados.
    }
}

export const bibliotecaBD = new Biblioteca(); // Cria e exporta uma instância da classe 'Biblioteca' chamada 'bibliotecaBD' para uso em outros módulos.
