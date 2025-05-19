import { cartas } from "./model";

// const divCarta2 = document.getElementById("carta2");
// const divCarta1 = document.getElementById("carta1");
const grid = document.getElementById("grid");

// export const mostrarImagen = (div: Element) => {
//   if (div.firstElementChild instanceof HTMLImageElement) {
//     let indice = parseInt(
//       div.firstElementChild.getAttribute("data-indice-id") || ""
//     );
//     div.firstElementChild.src = cartas[indice].imagen;
//   }
// };

// if (grid instanceof HTMLElement) {
//   for (let i = 0; i < grid.children.length; i++) {
//     let div = grid.children[i];

//     div.addEventListener("click", () => {
//       mostrarImagen(div);
//     });
//   }
// }

export const mostrarImagen = (div: Element, urlImg: string) => {
  if (div.firstElementChild instanceof HTMLImageElement) {
    div.firstElementChild.src = urlImg;
  }
};

if (grid instanceof HTMLElement) {
  for (let i = 0; i < grid.children.length; i++) {
    let div = grid.children[i];
    let indice = parseInt(div.getAttribute("data-indice-id") || "");

    div.addEventListener("click", () => {
      mostrarImagen(div, cartas[indice].imagen);
    });
  }
}
