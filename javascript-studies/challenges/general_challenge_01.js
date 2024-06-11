/**
 * Faça um programa que receba N (quantidade de números) e seus respectivos valores
 * imprima o maior número par e menor número impar.
 */

const numbers = [5, 3, 4, 2, 6, 7, 10, 12, 9];
let odds = null; // Par
let evens = null; // Impar

for(const numb of numbers) {
	if (numb % 2 === 0 && numb > odds) odds = numb;
	else {
		evens ??= numb;
		evens < numb || (evens = numb);
	}
}

console.log(odds, evens);