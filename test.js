import promptSync from "prompt-sync";
import { jeff } from "./main";
const prompt = promptSync();

// let escolha = +prompt();
// while (escolha < 0 || escolha > 2 || isNaN(escolha)) {
//   console.log("escolha de 0 a 2 ");
//   escolha = +prompt();
// }

// const j = [1, 2, 3, 4];

// for (const i of j) {
//   console.log(i);
// }


function loteria() {
  let aparecer = 2 /* Math.floor(Math.random() * 4);*/
  INICIO: if (aparecer == 2) {
    console.log("Um vendedor aparece lhe oferecendo um bilhete da loteria");
    let resposta = prompt("Você compra?").toLowerCase();

    while (resposta != "sim" && resposta != "nao" ) {
      console.log("Apenas Sim ou Nao");
      resposta = prompt().toLowerCase();
    }
    if (resposta == 'sim') {
        jeff.dinheiro = jeff.dinheiro -50
        let sorte = Math.floor(Math.random() * 10);        
        if (sorte == 5) {
            console.log("PARABENS JEFF ACABA DE GANHAR NA LOTERIA!!");
            jeff.dinheiro = jeff.dinheiro + 1000000000
        } else  {
            console.log('QUE PENA NÃO FOI DESSA VEZ!!');
            console.log("TENTE UMA PROXIMA");
            break INICIO;
        } 
    }
  }
}
console.log(loteria())     