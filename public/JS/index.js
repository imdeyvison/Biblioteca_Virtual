"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livro_js_1 = require("./livro.js"); // Importa a classe 'Livro' do módulo 'livro.js'.
class Livro_de_Ficcao extends livro_js_1.Livro {
    exibirInformacoes() {
        console.log(`Ficção: ${this.titulo}, de ${this.autor}, do ISBN ${this.ISBN}, (${this.ano_de_publicacao}, número: ${this.id})`);
    }
}
const livro1 = new Livro_de_Ficcao('Drácula', 'Chiquinho', 'sdfsdfsdfsdf', 1960, 412124141);
console.log("O livro escolhido foi do gênero de:", livro1);
