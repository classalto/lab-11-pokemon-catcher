import { clearPokeStats } from '../poke-catcher/localStorage.js';
import { makePokeRows } from './result-utils.js';
import { getPokeStats } from '../poke-catcher/localStorage.js';
import { makeSeenArray, makeCaughtArray, makeLabelsArray } from './chart-utils.js';




const button = document.getElementById('clear');


button.addEventListener('click', () => {
    clearPokeStats();
    window.location.href = './index.html';
});
makePokeRows();


var ctx = document.getElementById('charts').getContext('2d');

const pokeStats = getPokeStats();

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(pokeStats), // LABELS ARRAY GOES HERE
        datasets: [
            {
                label: '# of times seen',
                data: makeSeenArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
            {
                label: '# of times caught',
                data: makeCaughtArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            // create x axis with step size 1 to show integers instead of ugly decimals
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
