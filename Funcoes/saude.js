import { jeff } from "../main.js";

export function vida() {
  if (jeff.saude <= 0) {
    jeff.zerouVida = true;
  } else if (jeff.fome <= 0) {
    jeff.saude = jeff.saude - 20;
  } else if (jeff.estresse > 50) {
    console.log("jeff entrou em depreção");
    prompt("Pressione 'ENTER'");
    console.log("JEFF COMETEU SUICIDIO X.X");
    jeff.zerouVida = true;
  }
}
