/**
 * 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, con-
 * siderando o preço normal de etiqueta e a escolha de condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
 * escolhida e efetuar o cálculo adequado.
 *
 * TABELA DE CÓDIGOS DE CONDIÇÃO DE PAGAMENTO:
 * 1 - À vista Débito, recebe 10% de desconto;
 * 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 * 3 - Em duas vezes, preço normal de etiqueta sem juros;
 * 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

const produtoPreco = 10;
const codigoPagamento = 1;

if (codigoPagamento === 1)
	console.log('Pagamento no débito, o valor a pagar é:', produtoPreco * 0.9);
else if (codigoPagamento === 2)
	console.log('Pagamento a vista, o valor a pagar é:', produtoPreco * 0.85);
else if (codigoPagamento === 3)
	console.log('Parcelando em 2x, o valor total a pagar é:', produtoPreco);
else if (codigoPagamento === 4)
	console.log('Parcelando em +3x, o valor a pagar é:', produtoPreco * 1.1);
else console.log('Forma de pagamento seleciona é invalida!');
