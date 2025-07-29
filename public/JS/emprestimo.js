import { Biblioteca } from './biblioteca.js';
import { Livro } from './livro.js';
// Inicializa a biblioteca com alguns livros
let bibliotecaBD = new Biblioteca(); // Cria uma instância da classe Biblioteca para armazenar os livros
// Adiciona alguns livros à biblioteca com título, autor, ISBN, gênero e ano de publicação
bibliotecaBD.adicionarLivro(new Livro('Dom Casmurro', 'Machado de Assis', '978-8520918891', 'Literatura Brasileira', 1899));
bibliotecaBD.adicionarLivro(new Livro('A Revolução dos Bichos', 'George Orwell', '978-0451526342', 'Satírica', 1945));
bibliotecaBD.adicionarLivro(new Livro('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', '978-0261103573', 'Fantasia', 1954));
bibliotecaBD.adicionarLivro(new Livro('Moby Dick', 'Herman Melville', '978-1503280786', 'Aventura', 1851));
bibliotecaBD.adicionarLivro(new Livro('A Divina Comédia', 'Dante Alighieri', '978-0553213393', 'Épico', 1320));
bibliotecaBD.adicionarLivro(new Livro('Cem Anos de Solidão', 'Gabriel Garcia Marquez', '978-0060883287', 'Realismo Mágico', 1967));
bibliotecaBD.adicionarLivro(new Livro('Crime e Castigo', 'Fiódor Dostoiévski', '978-0143058144', 'Ficção Psicológica', 1866));
bibliotecaBD.adicionarLivro(new Livro('Orgulho e Preconceito', 'Jane Austen', '978-0143105428', 'Romance', 1813));
// Obtém elementos do DOM (Document Object Model)
let botaoEmprestar = document.getElementById('botao_emprestar'); // Botão para emprestar um livro
let inputTitulo = document.getElementById('loan-title'); // Campo de seleção de títulos disponíveis para empréstimo
let inputUsuario = document.getElementById('loan-user'); // Campo de entrada para o nome do usuário que está emprestando
let inputData = document.getElementById('loan-date'); // Campo de entrada para a data de devolução
let listaEmprestimos = document.getElementById('loan-list'); // Lista onde os empréstimos serão exibidos
let botaoDevolver = document.getElementById('botao_devolver'); // Botão para devolver um livro
let inputTituloDevolucao = document.getElementById('return-title'); // Campo de entrada para o título do livro a ser devolvido
// Array para armazenar os empréstimos
let emprestimos = []; // Array que armazena informações dos empréstimos (livro, usuário e data de devolução)
// Preenche o <select> com livros disponíveis
function popularSelectLivros() {
    let livros = bibliotecaBD.listarLivros(); // Obtém a lista de livros da biblioteca
    let optionsHtml = '';
    for (let i = 0; i < livros.length; i++) {
        let livro = livros[i];
        if (!livro.emprestado) { // Se o livro não estiver emprestado
            optionsHtml += `<option value="${livro.titulo}">${livro.titulo}</option>`; // Adiciona o livro à lista de opções
        }
    }
    inputTitulo.innerHTML = optionsHtml; // Atualiza o <select> com a lista de livros disponíveis
}
// Empresta um livro
function emprestarLivro() {
    let titulo = inputTitulo.value; // Obtém o título do livro selecionado
    let usuario = inputUsuario.value; // Obtém o nome do usuário que está emprestando o livro
    let dataDevolucao = new Date(inputData.value + 'T00:00:00'); // Converte a data de devolução para um objeto Date
    let livro;
    // Procura o livro na biblioteca
    for (let i = 0; i < bibliotecaBD.livros.length; i++) {
        if (bibliotecaBD.livros[i].titulo === titulo && !bibliotecaBD.livros[i].emprestado) {
            livro = bibliotecaBD.livros[i]; // Se o livro for encontrado e não estiver emprestado, armazena-o na variável
            break; // Sai do loop
        }
    }
    if (livro) { // Se o livro foi encontrado
        livro.emprestado = true; // Marca o livro como emprestado
        livro.emprestadoPara = usuario; // Armazena o nome do usuário que está emprestando o livro
        livro.dataDevolucao = dataDevolucao; // Armazena a data de devolução do livro
        // Adiciona o empréstimo ao array de empréstimos
        emprestimos.push({ livro: livro, usuario: usuario, dataDevolucao: dataDevolucao });
        atualizarListaEmprestimos(); // Atualiza a lista de empréstimos exibida na página
        popularSelectLivros(); // Atualiza a lista de livros disponíveis para empréstimo
    }
    else {
        alert('Livro não disponível ou não encontrado'); // Exibe um alerta caso o livro não esteja disponível
    }
}
// Atualiza a lista de empréstimos no HTML
function atualizarListaEmprestimos() {
    var _a;
    let listaHtml = '';
    // Gera o HTML para exibir a lista de empréstimos
    for (let i = 0; i < emprestimos.length; i++) {
        let emprestimo = emprestimos[i];
        listaHtml += `<li>${emprestimo.livro.titulo} - ${emprestimo.usuario} - Devolução: ${(_a = emprestimo.dataDevolucao) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()}</li>`; // Exibe o título do livro, o nome do usuário e a data de devolução
    }
    listaEmprestimos.innerHTML = listaHtml; // Atualiza a lista de empréstimos exibida na página
}
// Devolve um livro
function devolverLivro() {
    let titulo = inputTituloDevolucao.value; // Obtém o título do livro para devolver
    // Procura o livro emprestado na lista de empréstimos
    for (let i = 0; i < emprestimos.length; i++) {
        let emprestimo = emprestimos[i];
        if (emprestimo.livro.titulo === titulo && emprestimo.livro.emprestado) { // Se o livro for encontrado e estiver emprestado
            // Marca o livro como não emprestado e limpa as informações de empréstimo
            emprestimo.livro.emprestado = false;
            emprestimo.livro.emprestadoPara = '';
            emprestimo.livro.dataDevolucao = undefined;
            // Remove o empréstimo da lista
            emprestimos.splice(i, 1);
            // Atualiza a lista de empréstimos e o <select> com livros disponíveis
            atualizarListaEmprestimos(); // Atualiza a lista de empréstimos exibida na página
            popularSelectLivros(); // Atualiza a lista de livros disponíveis para empréstimo
            return; // Sai da função após a devolução ser processada
        }
    }
    // Se o livro não foi encontrado ou não estava emprestado
    alert('Livro não encontrado ou não está emprestado'); // Exibe um alerta caso o livro não esteja na lista de empréstimos
}
// Inicializa o formulário com livros disponíveis
popularSelectLivros(); // Preenche o <select> com os livros disponíveis para empréstimo
// Adiciona o evento de clique ao botão de emprestar
botaoEmprestar.onclick = emprestarLivro; // Define que ao clicar no botão de emprestar, a função emprestarLivro será executada
// Adiciona o evento de clique ao botão de devolver
botaoDevolver.onclick = devolverLivro; // Define que ao clicar no botão de devolver, a função devolverLivro será executada
