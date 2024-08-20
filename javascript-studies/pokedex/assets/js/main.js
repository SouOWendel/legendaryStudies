const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
	return `
		<li class="pokemon">
				<span class="number">#001</span>
				<span class="name">${pokemon.name}</span>
				<div class="details">
					<ol class="types">
						<li class="type">grass</li>
						<li class="type">poison</li>
					</ol>
					<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
					alt="${pokemon.name}">
				</div>
			</li>
	`;
}

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
fetch(url)
	.then((response) => response.json())
	.then((jsonBody) => jsonBody.results)
	.then((pokemonList) => {
		for (const pokemon of pokemonList) {
			const pokemonOl = document.getElementById('pokemonList');
			pokemonOl.innerHTML += convertPokemonToHtml(pokemon);
		}
	})
	.catch((error) => console.error(error))
	.finally(() => console.info('Requisição concluída!'));