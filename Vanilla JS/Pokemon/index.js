import { INITIAL_POKEMON_API } from "./utils/constants.js";

let container = document.querySelector(".card-container");
const loadMoreButton = document.querySelector(".load-more-btn");
const filterByType = document.querySelector("#types");
const searchInput = document.querySelector(".search")

let allFetchedData = [];
let filteredData = []
let currentLimit = 20


loadMoreButton.addEventListener("click", () => loadMore());
filterByType.addEventListener("change", (e) => filterHandler(e.target.value))
searchInput.addEventListener("input", (e) => searchHandler(e.target.value))


const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

const pokemonCard = (container, poke) => {
    let div = document.createElement("div")
    let card = ` <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <img class="flip-img" src=${poke.sprites.other.dream_world.front_default} style="width:300px;height:300px;">
                    <p>name : ${poke.name}</>
                    <p>type : ${poke.types[0].type.name}</p>
                    </div>
                    <div class="flip-card-back">
                    <p>height ${poke.height}</p>
                    <p>weight ${poke.weight}</p>
                    <p> base_experience ${poke.base_experience}</p>
                    </div>
                </div>
                </div> `
    div.innerHTML = card
    container.append(div)
}


const displayPokemons = async (limit) => {
    const pokemonApiData = await getData(INITIAL_POKEMON_API(limit)); // Use promise.all

    const pokemons = pokemonApiData.results;

    const singlePokemonApiArr = pokemons.map(async ({ name, url }) => {
        const pokemonData = await getData(url)
        return pokemonData
    })

    const singlePokemonDataArr = await Promise.all(singlePokemonApiArr);
    allFetchedData = [...singlePokemonDataArr]

    container.innerHTML = "";

    allFetchedData.map((poke) => {
        pokemonCard(container, poke)
    })
}

const loadMore = async () => {
    currentLimit = currentLimit + 20
    displayPokemons(currentLimit);
   
}

const filterHandler = (type) => {
    
    if (type == "all") {
        filteredData = []
        displayPokemons(currentLimit);

    }

    let res = allFetchedData.filter((el) => el.types[0].type.name == type)
    filteredData = [...res]

    container.innerHTML = "";

    filteredData.map((poke) => {
        pokemonCard(container, poke)
    })

    if(filteredData.length <= 0){
        container.innerHTML = "no pokemon found"
    }
}

const searchHandler = (input) => {
    
}

const fetchPokemonTypes = async () => {
    const data = await getData("https://pokeapi.co/api/v2/type");
    const typeArr = data.results;

    typeArr.map((type) => typeOption(type.name))
}

const typeOption = (type) => {
    const createOption = document.createElement('option');
    createOption.value = type;
    createOption.innerHTML = type;
    
    filterByType.append(createOption)

}

fetchPokemonTypes()


displayPokemons()

