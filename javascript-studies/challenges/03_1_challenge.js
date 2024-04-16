/**
 * 1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre
 * da faculdade calcule e imprima a sua média e a sua classificação conforme
 * a tabela abaixo:
 *
 * Média = (nota 1 + nota 2 + nota 3) / 3
 *
 * Classificação:
 * - Média menor que 5, reprovação;
 * - Média entre 5 e 7, recuperação;
 * - Média acima de 7, passou de semestre.
 */

const notas = [3, 6, 8];

// reduce(): aplicado em arrays, passa um calculo por todos as posições de um array
// resultando em um valor cumulativo de todos os calculos.
const media =
	notas.reduce((cumulativeSum, currentValue) => {
		return cumulativeSum + currentValue;
	}, 0) / notas.length;
console.log('A média das notas é', media.toFixed(2));

if (media < 5) console.log('Reprovado!');
else if (media >= 5 && 7 <= media) console.log('Recuperação');
else console.log('Aprovado! Passou de semestre.');
