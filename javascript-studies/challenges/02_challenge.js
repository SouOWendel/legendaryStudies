/**
 * Faça um programa para calcular o valor de uma viagem.
 *
 * Você terá 5 variáveis. Sendo elas:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - O tipo de combustível;
 * 4 - Gasto médio de combustível do carro por KM;
 * 5 - Distância em KM da viagem;
 *
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

let precoCombustivel = null;
const isGasolina = true;
const kmPorLitro = 100 / 10;
const distanciaKM = 100;

if (isGasolina) precoCombustivel = 4.55; // Gasolina
else precoCombustivel = 6.23; // Etanol

const valorViagem = (distanciaKM / kmPorLitro) * precoCombustivel;
console.log('O valor da viagem é:', valorViagem.toFixed(2));
