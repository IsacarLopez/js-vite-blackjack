// esta funcion nos indica cual es el valor de la carta tomada;
/**
 *
 * @param {String} carta Recibe el parametro carta que proviene de la funcion pedirCarta
 * @returns {Number} Returna el valor asignado de la carta que tomamos
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
