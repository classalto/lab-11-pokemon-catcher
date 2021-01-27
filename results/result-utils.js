import { getPokeStats } from '../poke-catcher/localStorage.js';
import { findById } from '../poke-catcher/utils.js';
import { pokeData } from '../pokemon.js';


// make rows for every pokemon in local storage
const tableBody = document.getElementById('body'); // target element for pokemon rows
const tableHead = document.getElementById('thead'); // target element for headers


export function makePokeRows() {
    // local storage array
    const encountersArr = getPokeStats();
    // make header row and row cells
    const thRow = document.createElement('tr');
    const nameHead = document.createElement('td');
    const seenHead = document.createElement('td');
    const caughtHead = document.createElement('td');

    // change text content of header cells
    nameHead.textContent = 'Name';
    seenHead.textContent = 'Seen';
    caughtHead.textContent = 'Caught';
    thRow.append(nameHead, seenHead, caughtHead);
    tableHead.append(thRow);

    // loop through array
    for (let item of encountersArr) {
        const currentPokemon = findById(item.id, pokeData);
    
        const tableRow = document.createElement('tr');
        const nameTd = document.createElement('td');
        const seenTd = document.createElement('td');
        const caughtTd = document.createElement('td');

        nameTd.textContent = currentPokemon.pokemon;
        seenTd.textContent = item.seen;
        caughtTd.textContent = item.caught;

        tableRow.append(nameTd, seenTd, caughtTd);
        tableBody.append(tableRow);
    }
}