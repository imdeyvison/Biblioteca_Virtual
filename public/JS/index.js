"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const biblioteca_js_1 = require("./biblioteca.js"); // Importa o objeto 'bibliotecaBD' do módulo 'biblioteca.js'.
const livro_js_1 = require("./livro.js"); // Importa a classe 'Livro' do módulo 'livro.js'.
// Obtém referências aos elementos HTML pelos seus IDs
let botaoAddLivro = document.getElementById('botao_adicionar'); // Botão para adicionar um livro
let inputTitle = document.getElementById('title'); // Campo de entrada para o título do livro
let inputYear = document.getElementById('year'); // Campo de entrada para o ano de publicação
let inputAuthor = document.getElementById('author'); // Campo de entrada para o autor do livro
let inputGenre = document.getElementById('genre'); // Campo de entrada para o gênero do livro
let inputIsbn = document.getElementById('isbn'); // Campo de entrada para o ISBN do livro
let botaoListarLivros = document.getElementById('list-books'); // Botão para listar todos os livros
let listaLivros = document.getElementById('book-list'); // Lista onde os livros serão exibidos
let botaoRemoverLivro = document.getElementById('botao_remover'); // Botão para remover um livro
let inputRemoveTitle = document.getElementById('remove-title'); // Campo de entrada para o título do livro a ser removido
let searchInput = document.getElementById('search'); // Campo de entrada para o termo de busca
let searchButton = document.getElementById('search-button'); // Botão para executar a busca
let filteredList = document.getElementById('filtered-list'); // Lista onde os livros filtrados serão exibidos
// Função para adicionar um livro à biblioteca
function addLivro() {
    let tituloLivro = inputTitle.value; // Obtém o título do livro do campo de entrada
    let anoLivro = parseInt(inputYear.value); // Obtém o ano do livro e converte para número
    let autorLivro = inputAuthor.value; // Obtém o autor do livro do campo de entrada
    let generoLivro = inputGenre.value; // Obtém o gênero do livro do campo de entrada
    let isbnLivro = inputIsbn.value; // Obtém o ISBN do livro do campo de entrada
    // Adiciona o novo livro à biblioteca
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro(tituloLivro, autorLivro, isbnLivro, generoLivro, anoLivro));
    console.log(biblioteca_js_1.bibliotecaBD); // Exibe a biblioteca no console
}
// Função para listar todos os livros na tela
function listLivros() {
    let livrosHtml = ''; // String para armazenar o HTML da lista de livros
    let livros = biblioteca_js_1.bibliotecaBD.listarLivros(); // Obtém a lista de livros da biblioteca
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
    let tituloRemover = inputRemoveTitle.value; // Obtém o título do livro a ser removido
    let resultado = biblioteca_js_1.bibliotecaBD.removerLivro(tituloRemover); // Remove o livro e armazena o resultado
    console.log(resultado); // Exibe o resultado da remoção no console
}
// Função para popular a biblioteca com livros pré-definidos
function popularBiblioteca() {
    // Adiciona uma série de livros à biblioteca com informações específicas
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('Dom Casmurro', 'Machado de Assis', '978-8520918891', 'Literatura Brasileira', 1899));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('A Revolução dos Bichos', 'George Orwell', '978-0451526342', 'Satírica', 1945));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', '978-0261103573', 'Fantasia', 1954));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('Moby Dick', 'Herman Melville', '978-1503280786', 'Aventura', 1851));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('A Divina Comédia', 'Dante Alighieri', '978-0553213393', 'Épico', 1320));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('Cem Anos de Solidão', 'Gabriel Garcia Marquez', '978-0060883287', 'Realismo Mágico', 1967));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('Crime e Castigo', 'Fiódor Dostoiévski', '978-0143058144', 'Ficção Psicológica', 1866));
    biblioteca_js_1.bibliotecaBD.adicionarLivro(new livro_js_1.Livro('Orgulho e Preconceito', 'Jane Austen', '978-0143105428', 'Romance', 1813));
}
// Função para filtrar livros com base no termo de busca
function filtrarLivros() {
    let termoDeBusca = searchInput.value; // Obtém o termo de busca do campo de entrada
    let livros = biblioteca_js_1.bibliotecaBD.listarLivros(); // Obtém a lista de livros da biblioteca
    let livrosFiltradosHtml = ''; // String para armazenar o HTML dos livros filtrados
    // Itera sobre todos os livros
    for (let i = 0; i < livros.length; i++) {
        let livro = livros[i]; // Obtém o livro atual
        let titulo = livro.titulo; // Obtém o título do livro
        let autor = livro.autor; // Obtém o autor do livro
        let genero = livro.genero; // Obtém o gênero do livro
        let anoDePublicacao = livro.ano_de_publicacao.toString(); // Converte o ano de publicação para string
        // Verifica se o termo de busca é exatamente igual a qualquer um dos detalhes
        if (titulo === termoDeBusca ||
            autor === termoDeBusca ||
            genero === termoDeBusca ||
            anoDePublicacao === termoDeBusca) {
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
