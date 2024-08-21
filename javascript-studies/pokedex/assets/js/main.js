function convertPokemonToHtml(pokemon) {
	return `
		<li class="pokemon ${pokemon.type}">
				<span class="number">#0${pokemon.pokeNumber}</span>
				<span class="name">${pokemon.name}</span>
				<div class="details">
					<ol class="types">
						${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
					</ol>
					<img src="${pokemon.img}"
					alt="${pokemon.name}">
				</div>
			</li>
	`;
}

const pokemonOl = document.getElementById('pokemonList');
pokeApi.getPokemons().then((pokemons = []) => {
	pokemonOl.innerHTML = pokemons.map(convertPokemonToHtml).join('');
});