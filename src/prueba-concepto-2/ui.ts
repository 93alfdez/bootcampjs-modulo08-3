import { Carta, cartas } from "../prueba-concepto-1/model";


const crearContenedor = (nombreCarta: string, contenedor: HTMLDivElement): HTMLDivElement => {
    const div = document.createElement("div");
    div.classList.add(nombreCarta);
    div.id = nombreCarta;
    contenedor.appendChild(div);
    return div;
}

export const mostrarImagen = (carta: Carta) => {

    const app = document.getElementById("app");

    if (app && app instanceof HTMLDivElement) {
        const crearDivImagenes = crearContenedor(carta.nombre, app);
        crearDivImagenes.innerHTML = `<img src="${carta.imagen}" alt="${carta.nombre}" />`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarImagen("leon1");
});


