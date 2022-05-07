import { emprego, jeff } from "../main.js";

// function cargo(funcao) {
//   if (funcao == "Auxiliar") {
//     emprego.salario = 10;
//   } else if (funcao == "Lider") {
    
//   } else if (funcao == "Chefe") {
    
//   } else if (funcao == "CEO") {
    
//   }
// }

function subirCargo(funcao) {
  if (
    (emprego.trabalho == "Auxiliar" && emprego.experiencia == 10) ||
    emprego.reconhecimento == 8
  ) {
    emprego.trabalho = funcao[1];
    emprego.salario = 50;
  } else if (
    (emprego.trabalho == "Lider" && emprego.experiencia == 20) ||
    emprego.reconhecimento == 16 ||
    jeff.Networking == 5
  ) {
    emprego.trabalho = funcao[2];
    emprego.salario = 100;
  } else if (
    (emprego.trabalho == "Chefe" &&
      emprego.experiencia > 50 &&
      jeff.conhecimento == 50) ||
    (jeff.Networking == 15 && jeff.conhecimento == 50)
  ) {
    emprego.trabalho = funcao[3];
    emprego.salario = 1000;
  }
}

// function confereCargo(funcao) {
//   subirCargo(funcao);
//   cargo(funcao);
// }
export {  subirCargo };
