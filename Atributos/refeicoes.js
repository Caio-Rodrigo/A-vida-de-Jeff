import promptSync from "prompt-sync";
import { jeff } from "../main.js";
const prompt = promptSync();

function cafeDaManha(listaDeCafe) {
  for (const opcao of listaDeCafe) {
    console.log(opcao);
  }
  let escolhacafe = +prompt();
  // escolhacafe--;
  console.log();

  if (listaDeCafe[escolhacafe] == "[0]Pao") {
    jeff.fome = jeff.fome + 10;

    jeff.dinheiro = jeff.dinheiro - 2;
    console.log();

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  } else if (listaDeCafe[escolhacafe] == "[1]Cafe reforçado") {
    jeff.fome = jeff.fome + 35;

    jeff.dinheiro = jeff.dinheiro - 15;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  } else if (listaDeCafe[escolhacafe] == "[2]Ficar sem comer") {
    
    console.log('Jeff prefere economisar');
    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;
  }
}

function almoco(listaDoAlmoco) {

  for (const opcao of listaDoAlmoco) {
    console.log(opcao);
  }
  let escolhaAlmoco = +prompt();
  escolhaAlmoco--;
  console.log()

  if (listaDoAlmoco[escolhaAlmoco] == "[0]Salgado") {
    jeff.fome = jeff.fome + 10;

    jeff.dinheiro = jeff.dinheiro - 5;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  } else if (listaDoAlmoco[escolhaAlmoco] == "[1]Almoço completo") {
    jeff.fome = jeff.fome + 45;

    jeff.dinheiro = jeff.dinheiro - 25;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  } else if (listaDoAlmoco[escolhaAlmoco] == "[2]Amoço normal") {
    jeff.fome = jeff.fome + 20;

    jeff.dinheiro = jeff.dinheiro - 10;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  }else if (listaDoAlmoco[escolhaAlmoco] == "[3]Ficar sem comer") {
    
    console.log('Jeff prefere economisar');
    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;
  }
}

function janta(listaJanta) {

  for (const opcao of listaJanta) {
    console.log(opcao);
  }
  let escolhaJanta = +prompt();
  escolhaJanta--;
  console.log()

  if (listaJanta[escolhaJanta] == "[0]Salada") {
    jeff.fome = jeff.fome + 10;

    jeff.dinheiro = jeff.dinheiro - 5;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  } else if (listaJanta[escolhaJanta] == "[1]Janta completa") {
    jeff.fome = jeff.fome + 45;

    jeff.dinheiro = jeff.dinheiro - 25;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  } else if (listaJanta[escolhaJanta] == "[2]janta normal") {
    jeff.fome = jeff.fome + 20;

    jeff.dinheiro = jeff.dinheiro - 10;

    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;

  }else if (listaJanta[escolhaJanta] == "[3]Ficar sem jantar") {
    
    console.log('Jeff prefere economisar');
    return `fome:${jeff.fome}\ndinheiro:${jeff.dinheiro}`;
  }
}


export { cafeDaManha, almoco, janta };
