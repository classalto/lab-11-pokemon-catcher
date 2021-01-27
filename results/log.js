import { clearPokeStats } from '../poke-catcher/localStorage.js';
import { makePokeRows } from './result-utils.js';




const button = document.getElementById('clear');


button.addEventListener('click', () => {
    clearPokeStats();
    window.location.href = './index.html';
});
makePokeRows();