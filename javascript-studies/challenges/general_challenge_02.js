/**
 * Faça um programa que calcule e imprima o salário a ser transferido para um
 * funcionário. Para realizar o calculo, receba o valor gruto salário e o adicional
 * dos benefícios. O salário a ser transferido é calculado da seguinte maneira:
 * 	Valor bruto do salário - Imposto Condicional ao Salário (%) + Benefícios
 * 
 * De 0 a 1099: 5%
 * de 1100 a 2500: 10%
 * maior que 2500: 15%
 */

const salario = 1500;
const beneficios = 250;
let salarioImposto = 0;

if (salario < 1100) salarioImposto = salario * 0.05;
else if (salario >= 1100 && salario <= 2500) salarioImposto = salario * 0.1;
else if (salario > 2500) salarioImposto = salario * 0.15;

console.log(salario - salarioImposto + beneficios);