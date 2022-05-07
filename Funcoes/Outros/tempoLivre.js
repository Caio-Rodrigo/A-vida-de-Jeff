import promptSync from "prompt-sync";
import { jeff } from "../../main.js";
const prompt = promptSync();

export function tempoLivre(fazeres) {
  for (const opcao of fazeres) {
    console.log(opcao);
  }

  let escolha = +prompt();
  while ((escolha < 0 || escolha > 1)||(isNaN(escolha))) {
    console.log("escolha de 0 a 1 ");
    escolha = +prompt()
  }
  console.log();

  jeff.estresse = jeff.estresse - 10;
  jeff.fome = jeff.fome - 2;
  jeff.saude = jeff.saude + 15;

  console.log("Jeff tira um tempo para si");

  if (fazeres[escolha] == "[0]Academia") {
    console.log("Ele decide ir a academia");
    console.log();
    jeff.dinheiro = -15;
    jeff.estresse = jeff.estresse - 10;
    jeff.fome = jeff.fome - 2;
    jeff.saude = jeff.saude + 15;

    const sentimento = [
      "Ele sai se sentindo fortao",
      "Ele sai se sentindo o tal",
      "Ele sai se sentindo o Super Men",
      "Fico quebrado",
    ];
    let qual = Math.floor(Math.random() * 5);
    console.log(sentimento[qual]);

    console.log(`Dinheiro: ${jeff.dinheiro}`);
    console.log(`Fome: ${jeff.fome}`);
    console.log(`Estresse: ${jeff.estresse}`);
    console.log(`Saude: ${jeff.saude}`);
    return;
  } else if (fazeres[escolha] == "[1]Parque") {
    console.log("Ele decide ir fazr uma caminhada no parque");

    let sorte = Math.floor(Math.random() * 11);
console.log(sorte);
    if (sorte >= 5) {
      jeff.estresse = jeff.estresse - 10;
      jeff.fome = jeff.fome - 2;
      jeff.saude = jeff.saude + 15;

      console.log(`Fome: ${jeff.fome}`);
      console.log(`Estresse: ${jeff.estresse}`);
      console.log(`Saude: ${jeff.saude}`);
      return;
    } else if (sorte >= 2 && sorte < 5) {
      console.log("Ele conhece alguém ");
      jeff.estresse = jeff.estresse - 10;
      jeff.fome = jeff.fome - 2;
      jeff.Networking++;
      jeff.saude = jeff.saude + 15;
      console.log(`Fome: ${jeff.fome}`);
      console.log(`Estresse: ${jeff.estresse}`);
      console.log(`Networking: ${jeff.Networking}`);
      console.log(`Saude: ${jeff.saude}`);
    } else {
      console.log("Ele é assaltado e acaba levando um tiro");
      let chance = Math.floor(Math.random() * 11);

      if (chance > 5) {
        console.log("Jeff morre a caminho do hospital ");
        console.log("FIM DE JOGO");
        jeff.morreu = true;
        return;
      } else {
        jeff.saude = jeff.saude - 60;
        jeff.dinheiro = jeff.dinheiro - 30;
        jeff.estresse = jeff.estresse + 30;

        if (jeff.saude > 0) {
          console.log("Ainda não chegou a hora de Jeff");
          console.log();
          console.log(`Fome: ${jeff.fome}`);
          console.log(`Estresse: ${jeff.estresse}`);
          console.log(`Networking: ${jeff.Networking}`);
          console.log(`Saude: ${jeff.saude}`);
          console.log();
          prompt("Precione ENTER");

          if (jeff.estresse > 60) {
            console.log(" Jeff tem um infarto");
            console.log();
            console.log("FIM DE JOGO");
            jeff.morreu = true;
            return
          } else {
              console.log("Jeff se recupera Bem");
          }
        }
      }
    }
  }
}

