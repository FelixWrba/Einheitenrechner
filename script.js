class Unit {
    example;
    calculate;
    constructor(example, calculate) {
        this.example = example;
        this.calculate = calculate;
    }
}
// 8.81599 => 8.82
const round = int => Math.round(int * 1000) / 1000;

let unitResults = document.getElementById('unit-results');
let main = document.getElementById('main');
let win = {
    window: document.getElementById('window'),
    header: document.getElementById('header-win'),
    main: document.getElementById('main-win')
}

let units = {
    'Zeit': new Unit('120s', (value, unit) => {
        let seconds;
        if (unit == 's') seconds = value;
        else if (unit == 'min') seconds = value * 60;
        else if (unit == 'h') seconds = value * 3600;
        else if (unit == 'd') seconds = value * 86400;
        else if (unit == 'w') seconds = value * 604800;
        else if (unit == 'mon') seconds = value * 2592000;
        else if (unit == 'y') seconds = value * 31536000;
        else return `<h3>Gültige Einheiten</h3><p>s, min, h, d, w, mon, y</p>`;

        return `<div class="grid"><span>Sekunden:</span><span>${round(seconds)}</span>
        <span>Minuten:</span></span>${round(seconds / 60)}</span>
        <span>Stunden:</span></span>${round(seconds / 3600)}</span>
        <span>Tage:</span></span>${round(seconds / 86400)}</span>
        <span>Wochen:</span></span>${round(seconds / 604800)}</span>
        <span>Monate:</span></span>${round(seconds / 2592000)}</span>
        <span>Jahre:</span></span>${round(seconds / 31536000)}</span></div>`;
    }),
    'Länge': new Unit('20m', (value, unit) => {
        let meters;
        if (unit == 'm') meters = value;
        else if (unit == 'nm') meters = value * 1852;
        else if (unit == 'z') meters = value / 100 * 2.54;
        else if (unit == 'ft') meters = value / 100 * 30.48;
        else if (unit == 'y') meters = value / 100 * 91.44;
        else if (unit == 'mi') meters = value * 1609.344;
        else if (unit == 'ae') meters = value * 149597870700;
        else if (unit == 'ly') meters = value * 9.460730472580800e15;
        else return `<h3>Gültige Einheiten</h3><p>m, nm, z, ft, y, mi, ae, ly</p>`;

        return `<div class="grid">
        <h3>Metrisch:</h3><span></span>
        <span>Meter:</span></span>${round(meters)}</span>
        <span>Seemeilen:</span></span>${round(meters / 1852)}</span>
        <h3>Imperial:</h3><span></span>
        <span>Zoll:</span></span>${round(meters * 100 / 2.54)}</span>
        <span>Fuß:</span></span>${round(meters * 100 / 30.48)}</span>
        <span>Yard:</span></span>${round(meters * 100 / 91.44)}</span>
        <span>Meilen:</span></span>${round(meters / 1609.344)}</span>
        <h3>Astronomisch</h3><span></span>
        <span>AE:</span></span>${round(meters / 149597870700)}</span>
        <span>Lichtjahr:</span></span>${round(meters / 9.460730472580800e15)}</span></div>`;
    }),
    'Fläche': new Unit('16m2', (value, unit) => {

    }),
    'Volumen': new Unit('4cm3', (value, unit) => {

    }),
    'Masse': new Unit('8kg', (value, unit) => {

    }),
    'Temperatur': new Unit('18F', (value, unit) => {

    }),
    'Währung': new Unit('12€', (value, unit) => {

    })
}

function openUnit(unit) {
    document.getElementById('header-win-title').innerHTML = unit;
    document.getElementById('win-input').innerHTML = `<input type="text" class="input" placeholder="z. B. ${units[unit].example}" id="unit-input" autocomplete="off"><button class="btn-pink">Berechnen</button>`;
    document.getElementById('win-input').onsubmit = () => unitResults.innerHTML = calculate(document.getElementById('unit-input').value, unit);

    win.window.style.top = '0%';
    win.window.style.opacity = '1';
}

function goBack() {
    let html = '<p>Einheit zum Berechnen anklicken...</p><ul id="unit-list">';
    for (key in units) {
        html += `<li onclick="openUnit('${key}')" role="button">${key}</li>`;
    }
    html += '</ul>';
    document.getElementById('header').scrollIntoView();
    main.innerHTML = html;
    win.window.style.top = '110%';
    win.window.style.opacity = '0';
    document.getElementById('unit-results').innerHTML = '';
}

function calculate(input, type) {
    // Check if input valid
    input = input.trim();
    if (input == '' || !/[A-z]/.test(input) || !/[0-9]/.test(input)) {
        return '<div class="error">Eingabe nicht gültig</div>';
    }
    let fistLetterPos = findFirstLetter(input);
    // parse input in value and unit
    let value = input.slice(0, fistLetterPos);
    let unit = input.slice(fistLetterPos);
    return units[type].calculate(value, unit);
}

function findFirstLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (/[A-z]/.test(str[i])) {
            return i;
        }
    }
    return -1;
}

goBack();
openUnit('Länge');