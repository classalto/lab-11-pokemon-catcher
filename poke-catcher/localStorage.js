import { findById } from './utils.js';
import { pokeData } from '../pokemon.js';
const POKELOG = 'POKELOG';


export function getPokeStats() {
    let log = JSON.parse(localStorage.getItem(POKELOG));

    if (!log) {
        log = [];
        localStorage.setItem(POKELOG, JSON.stringify(log));
    }
    return log;
}

export function setPokeStats(newLog) {
    localStorage.setItem(POKELOG, JSON.stringify(newLog));
}

export function clearPokeStats() {
    localStorage.setItem(POKELOG, JSON.stringify([]));
}

export function incrementSeen(id) {
    const log = getPokeStats();

    const poke = findById(id, log);

    if (!poke) {
        const dataPokemon = findById(id, pokeData);
        const newLog = {
            name: dataPokemon.pokemon,
            id: id,
            seen: 1,
            caught: 0,
        };
        log.push(newLog);
    } else {
        poke.seen++;
    }
    setPokeStats(log);
    
}

export function incrementCaught(id) {
    const log = getPokeStats();

    const poke = findById(id, log);
    poke.caught++;
    setPokeStats(log);
}