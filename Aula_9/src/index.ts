import {book} from "./books"

const livro1 = new book("Jogos Vorazes", "Suzanne Collins", 2008, "Rocco");
const livro2 = new book("Crepúsculo", "Stephenie Meyer", 2005, "Intrínseca");

livro1.exibirDados();
livro2.exibirDados();
livro1.anoPublicacao = 2007;

import {usuario} from "./books"

const Usuario1 = new usuario("Gabriel", "bieldemisilva@gmail.com");

Usuario1.boasVindas()

import {carros} from "./books"

const carro1 = new carros("Toyota", "Corolla", 2008);
carro1.mostrarCarro()

carro1.ano = 2018;
carro1.mostrarCarro