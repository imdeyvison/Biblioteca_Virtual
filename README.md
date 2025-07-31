# 📚 Biblioteca Virtual

Este é um projeto de uma **Biblioteca Virtual** desenvolvido com **HTML**, **CSS** e **TypeScript**. Ele permite o cadastro, empréstimo e visualização de livros por meio de uma interface simples e funcional.

---

## 🚀 Funcionalidades

- Cadastro de livros com título, autor, ISBN, gênero e ano de publicação
- Empréstimo de livros
- Exibição de acervo de forma organizada
- Interface amigável com múltiplas páginas HTML

---

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- TypeScript
- Node.js (para gerenciamento de dependências)
- Supabase (em desenvolvimento futuro)

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

---

## 📝 Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Criado para fins educacionais.