/**
 * Inverta uma string sem utilizar loops (for, do while), apenas utilizando função recursiva
 * isto, utilizando a função, dentro da própria função.
 */

let invertString = '';
const palavra = 'aoba';
function inverte(string, index) {
	if (invertString?.length == string.length) return;
	invertString += string[index - 1];
	inverte(string, --index);
}
inverte(palavra, palavra.length);
console.log(invertString);
