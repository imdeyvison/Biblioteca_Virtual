import { Biblioteca } from './biblioteca.js';
import { Livro } from './livro.js';

// Inicializa a biblioteca com alguns livros no banco de dados fake
let bibliotecaBD = new Biblioteca(); // Cria uma instância da classe Biblioteca para armazenar os livros

// Adiciona alguns livros à biblioteca 
bibliotecaBD.adicionarLivro(new Livro('Dom Casmurro', 'Machado de Assis', '978-8520918891', 'Literatura Brasileira', 1899));
bibliotecaBD.adicionarLivro(new Livro('A Revolução dos Bichos', 'George Orwell', '978-0451526342', 'Satírica', 1945));
bibliotecaBD.adicionarLivro(new Livro('O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', '978-0261103573', 'Fantasia', 1954));
bibliotecaBD.adicionarLivro(new Livro('Moby Dick', 'Herman Melville', '978-1503280786', 'Aventura', 1851));
bibliotecaBD.adicionarLivro(new Livro('A Divina Comédia', 'Dante Alighieri', '978-0553213393', 'Épico', 1320));
bibliotecaBD.adicionarLivro(new Livro('Cem Anos de Solidão', 'Gabriel Garcia Marquez', '978-0060883287', 'Realismo Mágico', 1967));
bibliotecaBD.adicionarLivro(new Livro('Crime e Castigo', 'Fiódor Dostoiévski', '978-0143058144', 'Ficção Psicológica', 1866));
bibliotecaBD.adicionarLivro(new Livro('Orgulho e Preconceito', 'Jane Austen', '978-0143105428', 'Romance', 1813));

// Botões e lacunas usando o DOM 
let botaoEmprestar = document.getElementById('botao_emprestar') as HTMLButtonElement; 
let inputTitulo = document.getElementById('loan-title') as HTMLSelectElement; 
let inputUsuario = document.getElementById('loan-user') as HTMLInputElement; 
let inputData = document.getElementById('loan-date') as HTMLInputElement; 
let listaEmprestimos = document.getElementById('loan-list') as HTMLUListElement; 
let botaoDevolver = document.getElementById('botao_devolver') as HTMLButtonElement; 
let inputTituloDevolucao = document.getElementById('return-title') as HTMLInputElement; 

// Array para armazenar os empréstimos
let emprestimos: { livro: Livro; usuario: string; dataDevolucao: Date }[] = []; 

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

// Emprestimo de um livro
function emprestarLivro() {
    let titulo = inputTitulo.value; 
    let usuario = inputUsuario.value; 
    let dataDevolucao = new Date(inputData.value + 'T00:00:00'); 

    let livro: Livro | undefined;
    
    // Procura o livro na biblioteca
    for (let i = 0; i < bibliotecaBD.livros.length; i++) {
        if (bibliotecaBD.livros[i].titulo === titulo && !bibliotecaBD.livros[i].emprestado) {
            livro = bibliotecaBD.livros[i]; // Se o livro for encontrado e não estiver emprestado, armazena-o na variável
            break; 
        }
    }

    // Se o livro for encontrado
    if (livro) { 
        livro.emprestado = true; // Marca o livro como emprestado
        livro.emprestadoPara = usuario; 
        livro.dataDevolucao = dataDevolucao; 

        // Adiciona o empréstimo ao array de empréstimos
        emprestimos.push({ livro: livro, usuario: usuario, dataDevolucao: dataDevolucao });
        atualizarListaEmprestimos(); 
        popularSelectLivros(); // Atualiza a lista de livros disponíveis para empréstimo
    } else {
        alert('Livro não disponível ou não encontrado'); 
    }
}

// Atualiza a lista de empréstimos no HTML
function atualizarListaEmprestimos() {
    let listaHtml = '';

    // Gera o HTML para exibir a lista de empréstimos
    for (let i = 0; i < emprestimos.length; i++) {
        let emprestimo = emprestimos[i];
        listaHtml += `<li>${emprestimo.livro.titulo} - ${emprestimo.usuario} - Devolução: ${emprestimo.dataDevolucao?.toLocaleDateString()}</li>`; // Exibe o título do livro, o nome do usuário e a data de devolução
    }

    listaEmprestimos.innerHTML = listaHtml; 
}

// Devolve um livro
function devolverLivro() {
    let titulo = inputTituloDevolucao.value; 

    // Procura o livro emprestado na lista de empréstimos
    for (let i = 0; i < emprestimos.length; i++) {
        let emprestimo = emprestimos[i];
        
        // Se o livro for encontrado e estiver emprestado
        if (emprestimo.livro.titulo === titulo && emprestimo.livro.emprestado) { 
            // Marca o livro como não emprestado e limpa as informações de empréstimo
            emprestimo.livro.emprestado = false;
            emprestimo.livro.emprestadoPara = '';
            emprestimo.livro.dataDevolucao = undefined;
            
            // Remove o empréstimo da lista
            emprestimos.splice(i, 1);

            // Atualiza a lista de empréstimos e o <select> com livros disponíveis
            atualizarListaEmprestimos(); 
            popularSelectLivros(); // Atualiza a lista de livros disponíveis para empréstimo
            return; 
        }
    }

    // Se o livro não foi encontrado ou não estava emprestado
    alert('Livro não encontrado ou não está emprestado'); 
}

// Inicializa o formulário com livros disponíveis
popularSelectLivros(); 

// Adiciona o evento de clique ao botão de emprestar
botaoEmprestar.onclick = emprestarLivro; 

// Adiciona o evento de clique ao botão de devolver
botaoDevolver.onclick = devolverLivro; 
