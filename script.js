  // const fetchPokemon = () => {
    const card= document.querySelector("#card")
    const liPkemons = document.querySelectorAll('.father')
  async function getAllPokemons() {
const resp = await fetch(
   "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
 );
  const data = await resp.json();
  data.results.forEach(async function (item) {
    const respPoke = await fetch(item.url);
    const pokemon = await respPoke.json();
    // console.log(pokemon)
    let idArrey = [];
    idArrey.push(pokemon.id);
    idnum= function(){for(let i=0;i<=idArrey.length;i++){return idArrey[i]}}
     
   document.querySelector('.father').insertAdjacentHTML('beforeend', ` <li class="line" style="margin-bottom: 0.2rem"><h2>${pokemon.name}</h2>
   <span class="character-id">${pokemon.id}</span>
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idnum()}.png"  alt=""> 
      </li> ` );
      })
      liPkemons.forEach((father) => {
 
        father.addEventListener("click", async function (event){
           const cardElement = event.path.filter((item) => item.className == "father");
          console.log(cardElement);
      
         const idCard= cardElement[1].children[1].innerText
        // console.log(idCard)
         
         
           
      //    card.insertAdjacentHTML('beforeend', `<div>
      //    <img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idnum()}.png" alt="">
      //    <h3>${p}</h3>
      //    <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, ad explicabo.</P>
      //  </div>`)
      //    console.log("ok");
         
       //   const card= document.querySelector("#card").insertAdjacentHTML('beforeend', `<div>
       
       //   //   <img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="">
       // //   <h3>pokemon</h3>
       // //   <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, ad explicabo.</P>
       // // </div>`)
        })
 
 
 
 
    });
}

getAllPokemons();
 

 
  






