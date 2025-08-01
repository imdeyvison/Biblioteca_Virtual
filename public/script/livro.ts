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
  // Criando instâncias da classe Livro
//let livro1 = new Livro(
  //"Dom Casmurro",
  //"Machado de Assis",
 // "978-8520918891",
 //"Romance",
  //1899
//);

//let livro2 = new Livro(
  //"1984",
  //"George Orwell",
 // "978-0451524935",
 // "Ficção Científica",
 // 1949
//);

// Usando métodos herdados e sobrescritos
//livro1.exibirResumo();        // Saída: Dom Casmurro, de Machado de Assis
//livro1.exibirInformacoes();   // Informações completas no console

//livro2.exibirResumo();
//livro2.exibirInformacoes();
