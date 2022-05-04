/* Para utilizar a importaçao instalar package.json ustilisando (npm init)  e acrecentar dentro da package.json {"type": "module",} */

import { cafeDaManha, almoco, janta } from "./Atributos/refeicoes.js";
import { empregos } from "./Atributos/trabalho.js";

import promptSync from "prompt-sync";

console.clear();
const prompt = promptSync();

//  Ciclo
let dia = 1;

// Trabalho
export let emprego = {
  trabalho: "Auxiliar",
  salario: 5,
  experiencia: 0,
  reconhecimento: 0,
};
const dedicacao = ["[0] Trabalhar empenhado", "[1] Trabalhar normalmente", "[2] jogar tempo fora"];

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
};
let morreu = false

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
Inicio: for (let i = 0; i < dia; i++) {
  console.log(`${dia}º Dia`);
  console.log();

  console.log("Manha");
  console.log();
  console.log("Jeff logo acorda oque ele come?");
  // console.log(cafeDeManha);
  // cafeManha = +prompt();
  // cafeManha--;
  // console.log(cafeDeManha[cafeManha]);

  console.log(cafeDaManha(cafeDeManha));
  console.log();

  console.log(morreu)

  console.log(empregos(dedicacao, morreu));
  if (morreu == true) {
    break;
  } else {
    console.log("Ta vivo");
  }
  console.log();

  console.log(almoco(almooco));
  console.log();

  console.log(morreu)

  console.log(empregos(dedicacao,morreu));
  if (morreu == true) {
    break Inicio;
  } else {
    console.log("Ta vivo");
  }
  console.log();

  let parar = prompt();
  if (parar == "s") {
    break Inicio;
  }

  // console.log(janta(jantar));

  // console.log(morreu)

  // console.log(empregos(dedicacao));
  // if (morreu == true) {
  //   break Inicio;
  // } else {
  //   console.log("Ta vivo");
  // }
  // console.log();

  // console.log(jeff);
  dia++;

  parar = prompt();
  if (parar == "ss") {
    break Inicio;
  }
}
