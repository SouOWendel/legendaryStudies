const loadMoreButton = document.getElementById('loadMoreButton');
const pokemonOl = document.getElementById('pokemonList');
const pagination = {
	limit: 5,
	offset: 0
};

function loadPokemonItems(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
		pokemonOl.innerHTML += pokemons.map((pokemon) => 
		`<li class="pokemon ${pokemon.type}">
			<span class="number">#0${pokemon.pokeNumber}</span>
			<span class="name">${pokemon.name}</span>
			<div class="details">
				<ol class="types">
					${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
				</ol>
				<img src="${pokemon.img}"
				alt="${pokemon.name}">
			</div>
		</li>`).join('');
	});
}

loadPokemonItems(pagination.offset, pagination.limit);

loadMoreButton.addEventListener('click', () => {
	pagination.offset += pagination.limit;
	loadPokemonItems(pagination.offset, pagination.limit);
});