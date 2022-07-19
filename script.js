//  const fetchPokemon = () => {
async function getAllPokemons() {
  const resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const data = await resp.json();

  /* console.log(data) */

data.results.forEach(async function (item) {
    const respPoke = await fetch(item.url);
    const dataPoke = await respPoke.json();
    let idArrey = [];
    idArrey.push(dataPoke.id);
    let idnum = idArrey.length;
    const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonsPromisses = [];
    for (i = 1; i <= idnum; i++) {
        pokemonsPromisses.push(
         fetch(getPokemonUrl(i)).then((response) => response.json())
       );
      }
      Promise.all(pokemonsPromisses).then((pokemons) => {
       console.log(pokemons);
     });
  });
 
}

 getAllPokemons();




// const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
//  const pokemonsPromisses = [];
 


// fetchPokemon();
