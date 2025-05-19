import { cartas } from "./model";

const divCarta2 = document.getElementById("carta2");
const divCarta1 = document.getElementById("carta1");

// export const mostrarImagen = (imgID: string, urlImg: string) => {
//   const imgCarta = document.getElementById(imgID);
//   if (imgCarta instanceof HTMLImageElement) {
//     imgCarta.src = urlImg;
//   }
// };

// divCarta1?.addEventListener("click", () => {
//   mostrarImagen("imgCarta1", cartas[0].imagen);
// });

// divCarta2?.addEventListener("click", () => {
//   mostrarImagen("imgCarta2", cartas[1].imagen);
// });

export const mostrarImagen = (divCarta: HTMLElement, urlImg: string) => {
  if (divCarta.firstElementChild instanceof HTMLImageElement) {
    divCarta.firstElementChild.src = urlImg;
  }
};

divCarta1?.addEventListener("click", () => {
  mostrarImagen(divCarta1, cartas[0].imagen);
});

divCarta2?.addEventListener("click", () => {
  mostrarImagen(divCarta2, cartas[2].imagen);
});
