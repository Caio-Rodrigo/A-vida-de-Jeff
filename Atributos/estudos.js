import promptSync from "prompt-sync";
import { jeff } from "../main.js";
const prompt = promptSync();

function estudos(opcoes) {
  for (const escolha of opcoes) {
    console.log(escolha);
  }

  let escolha = +prompt();
  while ((escolha < 0 || escolha > 1)||(isNaN(escolha))) {
    console.log("escolha de 0 a 1 ");
    escolha = +prompt()
  }
  //   escolha--;
  console.log();
  console.log(opcoes[escolha]);

  jeff.conhecimento = jeff.conhecimento + 10;
  jeff.dinheiro = jeff.dinheiro - 15;
  jeff.estresse = jeff.estresse + 2;
  jeff.fome = jeff.fome - 5;

  if (opcoes[escolha] == "[0]Dedicado") {
    console.log("Jeff se empenha nos estudos");

    jeff.conhecimento = jeff.conhecimento + 10;
    jeff.estresse = jeff.estresse + 3;
    jeff.fome = jeff.fome - 6;

    console.log(`Conhecimento: ${jeff.conhecimento}`);
    console.log(`Dinheiro: ${jeff.dinheiro}`);        
    console.log(`Extress ${jeff.estresse}`);        
    console.log(`Fome: ${jeff.fome}`);        
  } else if (opcoes[escolha] == "[1]Troca de ideias") {
    console.log("Jeff troca conhecimentos com os professores");

    jeff.conhecimento = jeff.conhecimento + 10;
    jeff.estresse = jeff.estresse + 3;
    jeff.fome = jeff.fome - 6;
    jeff.Networking = jeff.Networking + 2;

    console.log(`Conhecimento: ${jeff.conhecimento}`);
    console.log(`Dinheiro: ${jeff.dinheiro}`);        
    console.log(`Extress: ${jeff.estresse}`);        
    console.log(`Fome: ${jeff.fome}`);     
    console.log(`Networking: ${jeff.Networking}`);
  }
}

export {estudos}