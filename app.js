/* Imports */

/* Get DOM Elements */

const climateDropdown = document.getElementById('climate-dropdown');
const architectureDropdown = document.getElementById('architecture-dropdown');
const attractionsDropdown = document.getElementById('attractions-dropdown');
const climateCountEl = document.getElementById('climate-count');
const architectureCountEl = document.getElementById('architecture-count');
const attractionsCountEl = document.getElementById('attractions-count');
const climateImage = document.getElementById('climate-image');
const architectureImage = document.getElementById('architecture-image');
const attractionsImage = document.getElementById('attractions-image');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const slogansEl = document.getElementById('slogans');

/* State */

let climateCount = 0;
let architectureCount = 0;
let attractionsCount = 0;
let slogans = ['test 1', 'test 2', 'test 3'];

displaySlogans();

/* Events */

/* Display Functions */

function displaySlogans() {
    slogansEl.textContent = '';

    for (let slogan of slogans) {
        const newElement = document.createElement('p');
        newElement.classList.add('slogan');
        newElement.textContent = slogan;

        slogansEl.append(newElement);
    }
}
// (don't forget to call any display functions you want to run on page load!)
