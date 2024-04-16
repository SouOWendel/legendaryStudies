/**
 * O IMC - Indice de Massa Corporal é um críterio da organização Mundial de Saúde
 * para dar uma indicação sobre a condição de peso de uma pessoa adulta.
 *
 * A formula do IMC é: IMC = peso / (altura^2)
 *
 * Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
 *
 * TABELA DE IMC EM ADULTOS:
 * - Abaixo de 18.5 - Abaixo do peso;
 * - Entre 18.5 e 25 - Peso normal;
 * - Entre 26 e 30 - Acima do peso;
 * - Entre 31 e 40 - Obeso;
 * - Acima de 40 - Obesidade Grave;
 */

const peso = 65; // Em quilos
const altura = 1.65; // Em centimetros
const imc = peso / altura ** 2; // Ou Math.pow(altura, 2);
console.log(imc);
if (imc < 18.5) console.log('Abaixo do peso com IMC:', imc);
else if (imc >= 18.5 && 25 >= imc) console.log('Peso normal com IMC:', imc);
else if (imc > 25 && 30 >= imc) console.log('Acima do peso com IMC:', imc);
else if (imc > 30 && 40 >= imc) console.log('Obeso com IMC:', imc);
else if (imc > 40) console.log('Obesidade grave com IMC:', imc);
