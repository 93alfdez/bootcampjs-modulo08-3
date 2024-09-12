import { cartas } from "./model";

export const mostrarImagen = (urlImg: string) => {
    const imgCarta = document.getElementById("carta");
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
            mostrarImagen(cartas[1].imagen);
        })
    }
});
