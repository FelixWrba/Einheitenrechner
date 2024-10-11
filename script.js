class Unit {
    example;
    calculate;
    constructor(example, calculate) {
        this.example = example;
        this.calculate = calculate;
    }
}

let unitResults = document.getElementById('unit-results');
let main = document.getElementById('main');
let win = {
    window: document.getElementById('window'),
    header: document.getElementById('header-win'),
    main: document.getElementById('main-win')
}

let units = {
    'Zeit': new Unit('120s', (value, unit) => {
        let seconds = value;
        return `<p>Sekunden: ${seconds}</p>
        <p>Minuten: ${seconds / 60}</p>
        <p>Stunden: ${seconds / 3600}</p>
        <p>Tage: ${seconds / 86400}</p>
        <p>Jahre: ${seconds / 31536000}</p>`;
    }),
    'Länge': new Unit('20m', (value, unit) => {

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
    document.getElementById('win-input').innerHTML = `<input type="text" class="input" placeholder="z. B. ${units[unit].example}" id="unit-input" autocomplete="off"><button class="btn-pink" onclick="unitResults.innerHTML = calculate(document.getElementById('unit-input').value, '${unit}')">Berechnen</button>`;

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
}

function calculate(input, type) {
    // Check if input valid
    input = input.trim();
    if(input == '' || !/[A-z]/.test(input) || !/[0-9]/.test(input)) {
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