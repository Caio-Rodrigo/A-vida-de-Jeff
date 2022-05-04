import promptSync from "prompt-sync";
import { jeff, emprego,} from "../main.js";
const prompt = promptSync();

function empregos(opcoes, taVivo) {
    
    console.log(opcoes);
    console.log();

    for (const opcao of opcoes) {
        console.log(opcao);
      }

      let escolha = +prompt();
    //   escolha--;
      console.log();

        jeff.dinheiro = jeff.dinheiro + emprego.salario
        jeff.conhecimentoGeral++
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

    } else if (opcoes[escolha] ="[2] jogar tempo fora"){
        let sorte = 0
       console.log(opcoes[escolha]);
            console.log(sorte);
        
        if (sorte == 0) {

            console.log('if');

            console.log('Jeff não presta atenção e acaba sofrendo um acidente ...');
            prompt('Precione enter')
            console.clear()
            console.log('Jeff Morreu!!!');
            console.log();
            console.log('FIM DE JOGO');
            taVivo = true
            return  

        }else{
        console.log('Jeff leva o trabalho na brincadeira');
        emprego.reconhecimento--
        jeff.fome = jeff.fome -10 
        console.log(`Dinheiro: ${jeff.dinheiro}`);        
        console.log(`Fome: ${jeff.fome}`);        
        console.log(`Reconhecimento ${emprego.reconhecimento}`);        
        // console.log(`Experiencia: ${emprego.experiencia}`);
        // return
        console.log('else');
        }
    }
}

export {empregos}