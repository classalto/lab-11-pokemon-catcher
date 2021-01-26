import { getPokeStats } from '../poke-catcher/localStorage.js';

// for every pokemon in local storage

export function logRows() {
    const currentResults = getPokeStats();

    for (let item of currentResults) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.textContent = item.pokemon;
        td2.textContent = item.seen;
        td3.textContent = item.caught;

        tr.append(td1, td2, td3);
    }
}

