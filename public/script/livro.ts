//Criando uma classe para os livros:
export abstract class Livro {

    id: number;
    titulo: string;
    autor: string;
    ISBN: string;
    ano_de_publicacao: number;
    
    

    constructor(t: string, a: string, i: string, p: number, id: number) {
        this.id = id;
        this.titulo = t;
        this.autor = a;
        this.ISBN = i;
        this.ano_de_publicacao = p;
    }
    abstract exibirInformacoes(): void;
}