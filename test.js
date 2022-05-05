import promptSync from "prompt-sync";
const prompt = promptSync();

let escolha = +prompt()
while ((escolha < 0 || escolha > 2)||(isNaN(escolha))) {
    console.log("escolha de 0 a 2 ");
    escolha = +prompt()
  }