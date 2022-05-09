import { jeff } from "../../main.js";

export function vida() {
  if (jeff.fome <= 0) {
    console.log("Jeff esta com fome ele perde 20 de saude");
    jeff.saude = jeff.saude - 20;
    console.log("Saude: "+jeff.saude);
  } else if (jeff.estresse > 50) {
    console.log("jeff entrou em depreção");
    prompt("Pressione 'ENTER'");
    console.log("JEFF COMETEU SUICIDIO X.X");
    jeff.zerouVida = true;
  }
  if (jeff.saude <= 0) {
    console.log("Jeff morreu!!");
    jeff.zerouVida = true;
  } 
}
