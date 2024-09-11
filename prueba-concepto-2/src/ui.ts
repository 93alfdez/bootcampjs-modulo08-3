import { cartas } from "./model";

export const mostrarImagen = (carta: Carta) => {
	const imgCarta = document.getElementById("imgCarta");

	if (app && app instanceof HTMLDivElement) {
		const crearDivImagenes = crearContenedor(carta.nombre, app);
		crearDivImagenes.innerHTML = `<img src="${carta.imagen}" alt="${carta.nombre}" />`;
	}

    if 
};

document.addEventListener("DOMContentLoaded", () => {
	const divCarta = document.getElementById("app");

	mostrarImagen("leon1");
});
