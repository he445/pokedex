  // const fetchPokemon = () => {
async function getAllPokemons() {
const resp = await fetch(
   "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
 );
  const data = await resp.json();
  data.results.forEach(async function (item) {
    const respPoke = await fetch(item.url);
    const pokemon = await respPoke.json();
    let idArrey = [];
    idArrey.push(pokemon.id);
    idnum= function(){for(let i=0;i<=idArrey.length;i++){return idArrey[i]}}
     
   const liPkemon = document.querySelector('#father').insertAdjacentHTML('beforeend', ` <li class="line" style="margin-bottom: 0.2rem"> <h2>${pokemon.name}</h2>
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idnum()}.png"  alt=""> 
      </li> ` )
    
  
  });


 }

getAllPokemons();

 

 
  






