
const card = document.querySelector("#card");
const liPkemons = document.querySelectorAll(".father");
const img = document.querySelector(".img");
const pName = document.querySelector(".name");
const pType = document.querySelector(".type");
const pNum = document.querySelector(".number");
const description = document.querySelector(".description");

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
    idnum = function () {
      for (let i = 0; i <= idArrey.length; i++) {
        return idArrey[i];
      }
    };

    document.querySelector(".father").insertAdjacentHTML(
      "beforeend",
      `
   <li class="line" style="margin-bottom: 0.2rem">
   <h2>${pokemon.name}</h2>
   <h2 class="character-id">${pokemon.id}</h2>
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idnum()}.png"  alt=""> 
   </li>
      `
    );
  });
  liPkemons.forEach((line) => {
    line.addEventListener("click", async function (event) {
      const cardElement = event.path.filter((item) => item.className == "line");
     

      const idCard = cardElement[0].children[1].innerHTML;
     
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idCard}`);
      const data = await resp.json();
      const pokeresp = await fetch(data.species.url);
      const pokeDesc = await pokeresp.json();
      const types = data.types.map((typeInfo) => typeInfo.type.name);
      console.log(pokeDesc);
      img.setAttribute(
        "src",
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
      );
      pName.innerText = `${data.name} Nº ${data.id}`;
      pType.innerText = `${types.join(" | ")}`;
      description.innerText = pokeDesc.flavor_text_entries[9].flavor_text;
    });
  });
}

getAllPokemons();
