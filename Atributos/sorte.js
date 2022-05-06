import promptSync from "prompt-sync";
import { jeff } from "../main.js";
const prompt = promptSync();

function loteria() {
  let aparecer = Math.floor(Math.random() * 4);
  INICIO: if (aparecer == 2) {
    console.log("Um vendedor aparece lhe oferecendo um bilhete da loteria");
    let resposta = prompt("Você compra?").toLowerCase();

    while (resposta != "sim" || resposta != "nao" ) {
      console.log("Apenas Sim ou Nao");
      resposta = prompt().toLowerCase();
    }
    if (resposta == 'sim') {
        jeff.dinheiro
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
