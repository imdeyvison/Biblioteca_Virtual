import { Livro } from './livro.js'; 

export class Biblioteca { 
    livros: Livro[]; 

    constructor() { 
        this.livros = []; 
    }

    adicionarLivro(livro: Livro) { // Método para adicionar um novo livro à biblioteca.
        this.livros.push(livro); // Adiciona o objeto 'livro' ao array 'livros'.
    }

    // Método para remover um livro da biblioteca pelo título
    removerLivro(titulo: string): string { 
        for (let i = 0; i < this.livros.length; i++) { // Itera sobre o array de livros.
            if (this.livros[i].titulo === titulo) { // Verifica se o título do livro atual corresponde ao título fornecido.
                this.livros.splice(i, 1); 
                return 'Livro removido com sucesso'; 
            }
        }
        return 'Livro não encontrado'; 
    }

    // Método para listar todos os livros da biblioteca
    listarLivros(): Livro[] { 
        console.log('livros na biblioteca:', this.livros); 
        return this.livros; // Retorna o array de livros armazenados.
    }
}

export const bibliotecaBD = new Biblioteca(); // Cria e exporta uma instância da classe 'Biblioteca' chamada 'bibliotecaBD' para uso em outros módulos.

