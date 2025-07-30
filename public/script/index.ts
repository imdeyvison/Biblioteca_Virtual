import { bibliotecaBD } from "./biblioteca.js"; 
import { Livro } from "./livro.js"; 

// Obtém referências aos elementos HTML pelos seus IDs
let botaoAddLivro = document.getElementById('botao_adicionar') as HTMLElement; 
let inputTitle = document.getElementById('title') as HTMLInputElement; 
let inputYear = document.getElementById('year') as HTMLInputElement; 
let inputAuthor = document.getElementById('author') as HTMLInputElement; 
let inputGenre = document.getElementById('genre') as HTMLInputElement; 
let inputIsbn = document.getElementById('isbn') as HTMLInputElement; 
let botaoListarLivros = document.getElementById('list-books') as HTMLElement; 
let listaLivros = document.getElementById('book-list') as HTMLUListElement; 
let botaoRemoverLivro = document.getElementById('botao_remover') as HTMLButtonElement; 
let inputRemoveTitle = document.getElementById('remove-title') as HTMLInputElement; 
let searchInput = document.getElementById('search') as HTMLInputElement; 
let searchButton = document.getElementById('search-button') as HTMLButtonElement; 
let filteredList = document.getElementById('filtered-list') as HTMLUListElement; 

// Função para adicionar um livro à biblioteca nos campos de entrada respectivos
function addLivro() {
    let tituloLivro: string = inputTitle.value; 
    let anoLivro: number = parseInt(inputYear.value); 
    let autorLivro: string = inputAuthor.value; 
    let generoLivro: string = inputGenre.value; 
    let isbnLivro: string = inputIsbn.value; 

    // Adiciona o novo livro à biblioteca
    bibliotecaBD.adicionarLivro(new Livro(tituloLivro, autorLivro, isbnLivro, generoLivro, anoLivro));
    console.log(bibliotecaBD); // Exibe a biblioteca no console
}

// Função para listar todos os livros na tela
function listLivros() {
    let livrosHtml = ''; // String para armazenar o HTML da lista de livros
    let livros = bibliotecaBD.listarLivros(); // Obtém a lista de livros da biblioteca

    // Itera sobre todos os livros
    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i]; // Obtém o livro atual
        // Adiciona o livro à string HTML
        livrosHtml += `<li>${livro.titulo} - ${livro.autor} - ${livro.ano_de_publicacao}</li>`;
    }

    // Atualiza o conteúdo da lista de livros na tela
    listaLivros.innerHTML = livrosHtml;
}

// Função para remover um livro da biblioteca
function removeLivro() {
    let tituloRemover: string = inputRemoveTitle.value; 
    let resultado = bibliotecaBD.removerLivro(tituloRemover); 
    console.log(resultado); 
}

// Função para "popular" a biblioteca  um banco de dados fake de alguns livros 
function popularBiblioteca() {
    bibliotecaBD.adicionarLivro(new Livro('Dom Casmurro', 'Machado de Assis', '978-8520918891', 'Literatura Brasileira', 1899));
    bibliotecaBD.adicionarLivro(new Livro('A Revolução dos Bichos', 'George Orwell', '978-0451526342', 'Satírica', 1945));
    bibliotecaBD.adicionarLivro(new Livro('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', '978-0261103573', 'Fantasia', 1954));
    bibliotecaBD.adicionarLivro(new Livro('Moby Dick', 'Herman Melville', '978-1503280786', 'Aventura', 1851));
    bibliotecaBD.adicionarLivro(new Livro('A Divina Comédia', 'Dante Alighieri', '978-0553213393', 'Épico', 1320));
    bibliotecaBD.adicionarLivro(new Livro('Cem Anos de Solidão', 'Gabriel Garcia Marquez', '978-0060883287', 'Realismo Mágico', 1967));
    bibliotecaBD.adicionarLivro(new Livro('Crime e Castigo', 'Fiódor Dostoiévski', '978-0143058144', 'Ficção Psicológica', 1866));
    bibliotecaBD.adicionarLivro(new Livro('Orgulho e Preconceito', 'Jane Austen', '978-0143105428', 'Romance', 1813));
}

// Função para filtrar livros com base no termo de busca
function filtrarLivros() {
    let termoDeBusca = searchInput.value; // Obtém o termo de busca do campo de entrada
    let livros = bibliotecaBD.listarLivros(); // Obtém a lista de livros da biblioteca
    let livrosFiltradosHtml = ''; // String para armazenar o HTML dos livros filtrados

    // Itera sobre todos os livros
    for (let i = 0; i < livros.length; i++) {
        let livro = livros[i]; 
        let titulo = livro.titulo; 
        let autor = livro.autor; 
        let genero = livro.genero; 
        let anoDePublicacao = livro.ano_de_publicacao.toString(); // Converte o ano de publicação para string

        // Verifica se o termo de busca é exatamente igual a qualquer um dos detalhes
        if (
            titulo === termoDeBusca ||
            autor === termoDeBusca ||
            genero === termoDeBusca ||
            anoDePublicacao === termoDeBusca
        ) {
            // Adiciona o livro à string HTML dos livros filtrados
            livrosFiltradosHtml += `<li>${livro.titulo} - ${livro.autor} - ${livro.genero} - ${livro.ano_de_publicacao}</li>`;
        }
    }

    // Se nenhum livro for encontrado, exibe uma mensagem no console
    if (livrosFiltradosHtml === '') {
        console.log('Nenhum livro encontrado com o termo de pesquisa:', termoDeBusca);
    }

    // Atualiza o conteúdo da lista de livros filtrados na tela
    filteredList.innerHTML = livrosFiltradosHtml;
}

// Inicializa a biblioteca com livros pré-definidos e define os eventos dos botões
popularBiblioteca();
botaoAddLivro.onclick = addLivro; // Define a função para adicionar um livro ao clicar no botão
botaoListarLivros.onclick = listLivros; // Define a função para listar livros ao clicar no botão
botaoRemoverLivro.onclick = removeLivro; // Define a função para remover um livro ao clicar no botão
searchButton.onclick = filtrarLivros; // Define a função para filtrar livros ao clicar no botão
