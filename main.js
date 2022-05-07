/* Para utilizar a importaçao instalar package.json ustilisando (npm init)  e acrecentar dentro da package.json {"type": "module",} */

import { aFazeres } from "./Funcoes/oqueFazer.js";
import { cafeDaManha, almoco, janta } from "./Funcoes/refeicoes.js.js";
import { vida } from "./Funcoes/saude.js";
import promptSync from "prompt-sync";

console.clear();
const prompt = promptSync();

//  Ciclo
let dia = 1;
const periodo = ["Manha", "Tarde", "Noite"];

const fazer = ["[0]Ir trabalhar", "[1]Ir estudar", "[2]Tirar um tempo livre"];

// Trabalho
export let emprego = {
  trabalho: "Auxiliar",
  salario: 10,
  experiencia: 0,
  reconhecimento: 0,
};

//Refeiçoes do dia
const cafeDeManha = ["[0]Pao", "[1]Cafe reforçado", "[2]Ficar sem comer"];
const almooco = [
  "[0]Salgado",
  "[1]Almoço completo",
  "[2]Amoço normal",
  "[3]Ficar sem comer",
];
const jantar = [
  "[0]Salada",
  "[1]Janta completa",
  "[2]janta normal",
  "[3]Ficar sem jantar",
];

// Personagem
export let jeff = {
  conhecimento: 0,
  dinheiro: 100,
  estresse: 0,
  fome: 40,
  Networking: 0,
  saude: 50,
  zerouVida: false,
};

// Historia
/*
console.log(
  "Por favor clique na seta ao lado do X do terminal para que ele se expanda e você tenha uma melhor experiencia !"
);
prompt('-----Pressione "Enter para continuar"-----');
console.clear();

console.log("Olá seja Muito bem vindo a vida de Jeff!!");
console.log();
prompt('-----Pressione "Enter para continuar"-----');
console.clear();

console.log("Jeff é um cara carismático e feliz");
console.log();
console.log(
  "Seu proposito é manter Jeff vivo e bem , quem sabe até mesmo bem sucedido "
);
console.log();
console.log(
  "Jeff é um cara que trabalha em uma fabrica como ajudante geral, e estuda nas horas que lhe da na telha!"
);
console.log();
console.log("Sem mais delongas um bom jogo !");
console.log();
prompt('-----Pressione "Enter para continuar"-----');
console.clear();
*/

// Ciclo
GameOver: for (let i = 0; i < dia; i++) {
  console.log(`${dia}º Dia`);
  console.log();

  for (let i = 0; i < 3; i++) {
    console.log(periodo[i]);

    if (periodo[i] == "Manha") {
      // Manha
      console.log("ja é de manha Jeff toma café?");
      console.log(cafeDaManha(cafeDeManha));
      console.log();

      console.log(aFazeres(fazer));
      console.log(vida());
      if (jeff.zerouVida == true) {
        break GameOver;
      }
    } else if (periodo[i] == "Tarde") {
      console.log("Esta na Hora do almoço oque vai almoça?");
      console.log(almoco(almooco));
      console.log();
      console.log(aFazeres(fazer));
      console.log(vida());
      if (jeff.zerouVida == true) {
        break GameOver;
      }
    } else if (periodo[i] == "Noite") {
      console.log("Esta na Hora da Janta oque vai comer?");
      console.log(janta(jantar));
      console.log();
      console.log(aFazeres(fazer));
      console.log(vida());
      if (jeff.zerouVida == true) {
        break GameOver;
      }
    }
  }

  let parar = prompt();
  if (parar == "s") {
    break GameOver;
  }

  console.log();

  console.log(jeff);
  console.log();
  console.log(emprego);
  console.log();
  dia++;

  parar = prompt('PRESSIONE "S" PARA ENCERRAR O JOGO');
  if (parar == "s") {
    break;
  }
}
