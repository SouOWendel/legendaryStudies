/**
 * 2 - Crie uma classe para representar pessoas. Para cada pessoa teremos os
 * atributos nome, peso e altura. As pessoas devem ter a capacidade de dizer
 * o valor do seu IMC (peso / (altura * altura)). Instancie uma pessoa chamada
 * José para dizer o valor do seu IMC.
 */

class Pessoa {
	constructor(nome, peso, altura) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}

	imc() {
		const imc = (this.peso / this.altura ** 2).toFixed(2);
		return {
			value: imc,
			classificao: this.classIMC(),
		};
	}

	classIMC(imc) {
		if (imc < 18.5) return 'Abaixo do peso com IMC: ' + imc;
		else if (imc >= 18.5 && 25 >= imc) return 'Peso normal com IMC: ' + imc;
		else if (imc > 25 && 30 >= imc) return 'Acima do peso com IMC: ' + imc;
		else if (imc > 30 && 40 >= imc) return 'Obeso com IMC: ' + imc;
		else if (imc > 40) return 'Obesidade grave com IMC: ' + imc;
		else return 'ERROR 404: IMC invalido ou faltando.';
	}
}

const jose = new Pessoa('José Saramago', 60, 1.7);
console.info(`O IMC de ${jose.nome} é ${jose.imc().value}`);
console.info(`A sua classificação é: ${jose.imc().classificao}`);
