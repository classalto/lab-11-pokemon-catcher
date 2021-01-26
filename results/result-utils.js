import { getPokeStats } from '../poke-catcher/localStorage';


export function renderResults() {
    const results = getPokeStats();
    console.log(results);
}