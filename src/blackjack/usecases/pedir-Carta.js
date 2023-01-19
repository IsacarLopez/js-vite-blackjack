/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deckEs Es un arreglo de string
 * @returns {String} Regresa una carta que se tomo del deck
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
