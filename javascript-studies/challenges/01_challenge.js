/**
 * Faça um programa para calcular o valor de uma viagem.
 *
 * Você terá 3 variáveis. Sendo elas:
 *   1. Preço do combustível (Litro);
 *   2. Distância média percorrida por litro;
 *   3. Distância em KM da viagem;
 *
 * SPOILER ALERT: A solução está abaixo:
 */

const precoCombustivel = 5.79;
const kmPorLitro = 100 / 10; // O carro faz 10KM por litro.
const distanciaKM = 100; // O carro fez uma viagem de 100KM.

// Em uma viagem de 100KM, gastando 1 litro a cada 10KM
// quanto foi gasto? Qual é o valor da viagem?
const valorViagem = (distanciaKM / kmPorLitro) * precoCombustivel;
console.log('O valor da viagem é:', valorViagem.toFixed(2));

// toFixed() converte o valor para String e define quantos números
// após a casa decimal devem ser exibidos.
