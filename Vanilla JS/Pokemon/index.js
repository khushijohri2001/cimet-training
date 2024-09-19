import { INITIAL_POKEMON_API } from "./utils/constants.js";

const flipCard = document.querySelector(".flip-card");

// const 

const getData = async (url) => {
    try{
    const response = await fetch(url);
    const data = await response.json(); 
    return data;

    } catch(error){
        console.log(error);
        
    }
    
}

const displayPokemons = async () => {
    const pokemonApiData = await getData(INITIAL_POKEMON_API); // Use promise.all
    
    const pokemons = pokemonApiData.results;
    const nextPokemonApi = pokemonApiData.next

    pokemons.map(async ({name, url}) => {
       const pokemonData = await getData(url)
        console.log(pokemonData);
        
    })

   

    
}

displayPokemons()

