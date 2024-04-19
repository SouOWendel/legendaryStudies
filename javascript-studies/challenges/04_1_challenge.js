/**
 * 1 - Crie uma classe para representar carros. Os carros devem possuir marca,
 * uma cor e um gasto médio de combustível por quilômetro rodado. Crie um método
 * que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 */

class Carro {
	constructor(marca, cor, gastoMedioPorKM) {
		this.marca = marca;
		this.cor = cor;
		this.gastoMedioPorKM = gastoMedioPorKM;
	}

	gastoPercurso(distanciaPercorrida, precoCombustivel) {
		return (
			distanciaPercorrida *
			this.gastoMedioPorKM *
			precoCombustivel
		).toFixed(2);
	}
}

const opala = new Carro('Volkswagen', 'Azul Escuro', 1 / 5);
console.info('A marca é', opala.marca);
console.info('O carro faz', opala.gastoMedioPorKM, 'Litros por KM.');
console.info('O carro gastou', opala.gastoPercurso(70, 4.55), 'reais em 70km.');
