// Classe abstrata
export abstract class Publicacao {
    titulo: string;
    autor: string;
  
    constructor(titulo: string, autor: string) {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    // Método abstrato
    abstract exibirResumo(): void;
  }
  
  // Classe Livro herdando Publicacao
  export class Livro extends Publicacao {
    isbn: string;
    genero: string;
    ano_de_publicacao: number;
    id: number;
    private static contador: number = 0; // Propriedade estática que mantém o contador de livros, usado para gerar IDs únicos automaticamente
    emprestado: boolean = false; // Atributo que indica se o livro está emprestado ou não 
    emprestadoPara?: string; // Atributo que armazena o nome da pessoa para quem o livro foi emprestado 
    dataDevolucao?: Date; // Atributo que armazena a data de devolução do livro 
  
    constructor(
      titulo: string,
      autor: string,
      isbn: string,
      genero: string,
      ano_de_publicacao: number
    ) {
      super(titulo, autor); // chama o construtor da classe abstrata
      this.isbn = isbn;
      this.genero = genero;
      this.ano_de_publicacao = ano_de_publicacao;
      this.id = ++Livro.contador;
    }
  
    exibirResumo(): void {
      console.log(`${this.titulo}, de ${this.autor}`);
    }
  
    exibirInformacoes(): void {
      console.log(`Livro: ${this.titulo} Autor: ${this.autor} ISBN: ${this.isbn} Gênero: ${this.genero} Ano: ${this.ano_de_publicacao}`);
    }
  }

