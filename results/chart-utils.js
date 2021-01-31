
export function makeSeenArray(userStats) {
    const seenArray = [];
    for (let pokemon of userStats) {
        if (pokemon.seen) {
            seenArray.push(pokemon.seen);
        }
    }
    return seenArray;
}

export function makeCaughtArray(userStats) {
    const caughtArray = [];
    for (let pokemon of userStats) {
        if (pokemon.caught) {
            caughtArray.push(pokemon.caught);
        }
    }
    return caughtArray;
}

export function makeLabelsArray(userStats) {
    const pokemonNameArray = [];
    for (let instance of userStats) {
        pokemonNameArray.push(instance.name);
    }
    return pokemonNameArray;
}