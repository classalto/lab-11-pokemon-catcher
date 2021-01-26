// import functions and grab DOM elements
import { pokeData } from '../pokemon.js';
import { incrementCaught, incrementSeen } from './localStorage.js';
// initialize state
let gamesPlayed = 0;

// generate random index 
export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomIndex];
}

export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

// generate 3 random pokemon images
export function setRandomPokemon() {
    gamesPlayed++;
    // generates three random pokemon in pokedata
    let pokemonOne = getRandomPokemon();
    let pokemonTwo = getRandomPokemon();
    let pokemonThree = getRandomPokemon();

    // check if any pokeImg match each other, if they do generate three random pokmon
    while (pokemonOne.id === pokemonTwo.id || pokemonOne.id === pokemonThree.id || pokemonThree.id === pokemonTwo.id) {
        pokemonOne = getRandomPokemon();
        pokemonTwo = getRandomPokemon();
        pokemonThree = getRandomPokemon();
    }
    const img1 = renderPokemonImg(pokemonOne);
    const img2 = renderPokemonImg(pokemonTwo);
    const img3 = renderPokemonImg(pokemonThree);

    incrementSeen(pokemonOne.id);
    incrementSeen(pokemonTwo.id);
    incrementSeen(pokemonThree.id);
    const section = document.getElementById('pokecatcher');
    section.textContent = '';
    section.append(img1, img2, img3);

}

export function renderPokemonImg(pokemonInstance) {
    const image = document.createElement('img');
    image.src = pokemonInstance.url_image;

    image.addEventListener('click', () => {
        incrementCaught(pokemonInstance.id);

        if (gamesPlayed <= 10) {
            setRandomPokemon();
        } else {
            window.location.url = '../results/results.html';
        }
    });
    return image;
}



