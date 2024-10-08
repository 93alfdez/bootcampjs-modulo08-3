import { cartas } from "./model";

export const mostrarImagen = (urlImg: string) => {
    const imgCarta = document.getElementById("imgCarta");
    if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
        imgCarta.src = urlImg;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const divCartas = document.getElementById("gridCartas");

    if (divCartas !== null &&
        divCartas !== undefined &&
        divCartas instanceof HTMLDivElement
    ) {
        divCartas.addEventListener("click", () => {
            mostrarImagen(cartas[0].imagen);
        })
    }
});
