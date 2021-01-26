import { logRows } from './result-utils.js';

const div = document.getElementById('result');
const table = document.createElement('table');

const pokeRows = logRows();

table.append(pokeRows);
div.append(table);