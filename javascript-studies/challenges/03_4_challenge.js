/**
 * Treino de funções!
 * - Escreva uma função que retorne "Meu nome é <nome>". Por exemplo: "Meu nome é Wendel";
 * - Escreva uma função que verifica se o usuário é maior de idade ou não.
 */

function whatsYourName(nome) {
	return 'Meu nome é ' + nome;
}

function isLegalAge(idade) {
	if (idade < 0) return 'A idade precisa ser um valor positivo!';
	return idade >= 18 ? 'É maior de idade.' : 'É menor de idade.';
}

console.log(qualSeuNome('Wendel'));
console.log(isLegalAge(23));
