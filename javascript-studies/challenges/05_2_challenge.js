/**
 * 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima
 * cada número par encontrado. Utilizando array e estrutura de repetição.
 */

const numeros = [0, 1, 2, 3, 4, 5, 10, 23, 32, 54, 47, 75, 43, 99, 2832, 2395];
const numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] % 2 === 0) {
		numerosPares.push(numeros[i]);
	}
}

console.log('Os seguintes números são par:', numerosPares);
