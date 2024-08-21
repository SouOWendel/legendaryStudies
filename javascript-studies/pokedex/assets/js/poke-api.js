const pokeApi = {};

/**
	 * O função Fetch para requisição de uma Promise e todo o seu tratamento.
	 * Feita a requisição, o método THEN é chamado juntamente a sua resposta
	 * que deve vir quando a Promise é aprovada ou rejeitada. Depois disso
	 * o código do THEN será executado.
	 * 
	 * O método CATCH será chamado apenas se a função FETCH retornar um erro.
	 * O método FINALLY será chamado assim que a requisição do FETCH por concluída,
	 * independente de ser sido aceita ou rejeitada.
	 */
pokeApi.getPokemons = async (offset=0, limit=10) => {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
	try {
		const response = await fetch(url);
		if(!response.ok) throw new Error('Resposta de conexão não está OK!');
		const jsonBody = await response.json();
		return jsonBody.results;
	} catch (error) {
		return console.error(error);
	}
};

// fetch(url)
// 	.then((response) => response.json())
// 	.then((jsonBody) => jsonBody.results)
// 	.then((pokemonList) => {
// 		for (const pokemon of pokemonList) {
// 			const pokemonOl = document.getElementById('pokemonList');
// 			pokemonOl.innerHTML += convertPokemonToHtml(pokemon);
// 		}
// 	})
// 	.catch((error) => console.error(error))
// 	.finally(() => console.info('Requisição concluída!'));