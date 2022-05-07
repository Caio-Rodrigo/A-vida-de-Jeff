import promptSync from "prompt-sync";
import { jeff } from "../main.js";
const prompt = promptSync();

 function loteria() {
  let aparecer = Math.floor(Math.random() * 4);
  INICIO: if (aparecer == 2) {
    console.log("Um vendedor aparece lhe oferecendo um bilhete da loteria");
    let resposta = prompt("Você compra?").toLowerCase();

    while (resposta != "sim" && resposta != "nao" ) {
      console.log("Apenas Sim ou Nao");
      resposta = prompt().toLowerCase();
    }
    if (resposta == 'sim') {
      jeff.dinheiro = jeff.dinheiro - 25;
        let sorte = Math.floor(Math.random() * 100);        
        if (sorte == 50) {
            console.log("PARABENS JEFF ACABA DE GANHAR NA LOTERIA!!");
            prompt('Precione ENTER')
            console.clear()
            console.log("AGORA JEFF É UM CARA MILHONARIO E NÃO PRECISA MAIS DA SUA AJUDA");
            console.log("TENHA UM BOM DIA E QUE VC TENHA A MESMA SORTE DE JEFF NA VIDA!!");
            jeff.zerouVida = true
        } else  {
            console.log('QUE PENA NÃO FOI DESSA VEZ!!');
            console.log("TENTE UMA PROXIMA");
            break INICIO;
        } 
    }
  }
}


export {loteria}