import { cartas } from "./model";

const divCartas = document.getElementById("carta");

export const mostrarImagen = (urlImg: string) => {
  const imgCarta = document.getElementById("imgCarta");
  if (imgCarta instanceof HTMLImageElement) {
    imgCarta.src = urlImg;
  }
};

divCartas?.addEventListener("click", () => {
  mostrarImagen(cartas[0].imagen);
});
