
import promptSync from "prompt-sync";
import { jeff } from "../main.js";
import { empregos } from "./trabalho.js";
import { estudos } from "./estudos.js";
import { tempoLivre } from "./tempoLivre.js";
const prompt = promptSync();

// Trabalho
const dedicacao = [
    "[0] Trabalhar empenhado",
    "[1] Trabalhar normalmente",
    "[2] jogar tempo fora",
  ];
  // Tempo Livre
  const livre = ['[0]Academia','[1]Parque'];
  
  // Estudos
  const estudo = ['[0]Dedicado', '[1]Troca de ideias'];


export function aFazeres(oQueFazer) {
    console.log('E agora oque Jeff faz?');
    for (const opcao of oQueFazer) {
        console.log(opcao);        
    }
    console.log();
    let escolha = +prompt()

    if (oQueFazer[escolha] == "[0]Ir trabalhar") {
        console.log(empregos(dedicacao));
        console.log();
    } else if (oQueFazer[escolha] == "[1]Ir estudar") {
        console.log(estudos(estudo));
        console.log();
    }else if (oQueFazer[escolha] == "[2]Tirar um tempo livre") {
        console.log(tempoLivre(livre));
        console.log();
    }
}
