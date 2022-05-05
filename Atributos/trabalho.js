import promptSync from "prompt-sync";
import { jeff, emprego,} from "../main.js";
const prompt = promptSync();



function empregos(opcoes) {

    for (const esfoco of opcoes) {
        console.log(esfoco);
      }

      let escolha = +prompt();
    while ((escolha < 0 || escolha > 2)||(isNaN(escolha))) {
        console.log("escolha de 0 a 2 ");
        escolha = +prompt()
      }
      console.log();
      console.log(opcoes[escolha]);

        jeff.dinheiro = jeff.dinheiro + emprego.salario
        jeff.conhecimento++
        jeff.estresse = jeff.estresse + 3
        jeff.fome = jeff.fome -5
        jeff.saude = jeff.saude -5

    if (opcoes[escolha] == "[0] Trabalhar empenhado") {
        console.log('Jeff se empenha ao máximo');
        emprego.experiencia = emprego.experiencia + 2
        emprego.reconhecimento = emprego.reconhecimento + 2
        jeff.estresse = jeff.estresse + 8
        jeff.fome = - 20
        jeff.Networking++

        console.log('Dinheiro: ', + jeff.dinheiro);
        console.log('Conhecimento: ', + jeff.conhecimento);
        console.log('Estresse: ', + jeff.estresse);
        console.log('Fome: ', + jeff.fome);
        console.log('Networking: ', + jeff.Networking);
        console.log('Saude: ', + jeff.saude);
        console.log('Experiencia: ', + emprego.experiencia);
        console.log('Reconhecimento: ', + emprego.reconhecimento);
        return 

    }else if (opcoes[escolha] == "[1] Trabalhar normalmente") {
        
        emprego.experiencia++
        emprego.reconhecimento++
        jeff.fome = jeff.fome -10 

        console.log(`Dinheiro: ${jeff.dinheiro}`);        
        console.log(`Fome: ${jeff.fome}`);        
        console.log(`Reconhecimento ${emprego.reconhecimento}`);        
        console.log(`Experiencia: ${emprego.experiencia}`);     
        return   

        //a variavel jeff.morreu deve ser alterada somente se essa opção for selecionada
    } else if (opcoes[escolha] ="[2] jogar tempo fora"){
        let sorte = Math.floor(Math.random() * 11);
        

        if (sorte == 5) {

            console.log('if');

            console.log('Jeff não presta atenção e acaba sofrendo um acidente ...');
            prompt('Precione enter')
            console.clear()
            console.log('Jeff jeff.morreu!!!');
            console.log();
            console.log('FIM DE JOGO');

            jeff.morreu = true
            console.log(jeff.morreu);
            //mude jeff.morreu para 
            return  

        }else{
        console.log('Jeff leva o trabalho na brincadeira');
        emprego.reconhecimento--
        jeff.fome = jeff.fome -10 
        console.log(`Dinheiro: ${jeff.dinheiro}`);        
        console.log(`Fome: ${jeff.fome}`);        
        console.log(`Reconhecimento ${emprego.reconhecimento}`);        
        console.log(`Experiencia: ${emprego.experiencia}`);
        return
        
        }
    }
}

export {empregos}