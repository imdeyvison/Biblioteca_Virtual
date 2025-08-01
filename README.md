# 📚 Biblioteca Virtual

Este é um projeto de uma **Biblioteca Virtual** desenvolvido com **HTML**, **CSS** e **TypeScript**. Ele permite o cadastro, empréstimo e visualização de livros por meio de uma interface simples e funcional.

---

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- TypeScript
- Node.js (para gerenciamento de dependências)

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [VS Code](https://code.visualstudio.com/) ou outro editor com suporte a Live Server
- Extensão Live Server (caso use o VS Code)

---

## 💻 Passo a Passo para Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/Biblioteca_Virtual.git
```

### 2. Acesse o diretório do projeto

```bash
cd Biblioteca_Virtual
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Compile os arquivos TypeScript

```bash
npx tsc
```

Isso irá gerar os arquivos JavaScript na pasta de destino (caso esteja configurada no `tsconfig.json`).

### 5. Execute o projeto

#### Opção 1: Usando o Live Server (recomendado)

- Abra a pasta do projeto no VS Code
- Clique com o botão direito no arquivo `site.html` (ou outro HTML principal)
- Selecione **"Open with Live Server"**

#### Opção 2: Manualmente

- Navegue até a pasta `public/view/html`
- Abra o arquivo `site.html` com um navegador (clique duas vezes ou use `Ctrl+O` no navegador)

---

## 📁 Estrutura de Pastas (simplificada)

```
Biblioteca_Virtual/
├── public/
│   └── view/
│       ├── html/
│       │   ├── cadastro de livros.html
│       │   ├── emprestimo_livro.html
│       │   ├── contato.html
│       │   └── site.html
│       └── css/
├── tsconfig.json
├── package.json
└── LICENSE

```

🧩 Funcionalidades
📘 1. Cadastro de Livros (livro.ts, biblioteca.ts)
Cada livro é representado por uma classe Livro, com:

Título

Autor

ISBN

Gênero

Ano de publicação

ID único (gerado automaticamente)

A seguir é exemplicado a adição de um livro à lista de livros: 


A classe Biblioteca gerencia um array de livros, permitindo:

adicionarLivro(livro) – adiciona um novo livro à lista
![alt text](/public/imagens/cadastro.png)
removerLivro(id) – remove um livro pelo ID
![alt text](/public/imagens/remover.png)
listarLivros() – retorna todos os livros cadastrados
![alt text](/public/imagens/listar.png)

📚 2. Exibição de Livros na Página (index.ts)
O arquivo index.ts manipula o DOM para:

Exibir a lista de livros dinamicamente no HTML

![alt text](/public/imagens/inicial.png)

🔄 3. Empréstimo de Livros (emprestimo.ts)
Simula o processo de empréstimo, com:

Nome do usuário

ID do livro

Data de devolução prevista

Realiza validações para garantir que:

Todos os campos estejam preenchidos

O ID do livro exista

Ao confirmar o empréstimo, exibe uma mensagem no console de emprestimo como "true"

![alt text](/public/imagens/emprestimo.png)

📨 4. Página de Contato (contato.html)
Contém um formulário com campos:

Nome

E-mail

Mensagem

Essa funcionalidade é apenas ilustrativa (não envia dados reais)

![alt text](/public/imagens/contato.png)
---


---

## 📝 Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

📌 Observações
Este projeto não possui backend ou banco de dados.

Os dados são armazenados apenas em memória no navegador enquanto a página está aberta.

Por fim, este projeto foi criado para fins educacionais.