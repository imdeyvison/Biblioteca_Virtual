import { Livro } from "./livro.js"; // Importa a classe 'Livro' do módulo 'livro.js'.

class Livro_de_Ficcao extends Livro {
    exibirInformacoes(): void {
        console.log(`Ficção: ${this.titulo}, de ${this.autor}, do ISBN ${this.ISBN}, (${this.ano_de_publicacao}, número: ${this.id})`);
    }
}

const livro1 = new Livro_de_Ficcao('Drácula', 'Chiquinho', 'sdfsdfsdfsdf', 1960, 412124141);
console.log("O livro escolhido foi do gênero de:", livro1);