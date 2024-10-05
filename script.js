class Unit {
    example;
    constructor(example) {
        this.example = example;
    }
}

let main = document.getElementById('main');
let win = {
    window: document.getElementById('window'),
    header: document.getElementById('header-win'),
    main: document.getElementById('main-win')
}
let units = {
    'Zeit': new Unit('120s'),
    'Länge': new Unit('20m'),
    'Fläche': new Unit('16m2'),
    'Volumen': new Unit('4cm3'),
    'Masse': new Unit('8kg'),
    'Temperatur': new Unit('18F'),
    'Währung': new Unit('12€')
}

function openUnit(unit) {
    win.header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff" onclick="goBack();"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg><h1>${unit}</h1>`;
    document.getElementById('win-input').innerHTML = `<input type="text" class="input" placeholder="z. B. ${units[unit].example}"><button class="btn-pink">Berechnen</button>`;
    // let html = '';
    // win.main.innerHTML = html;

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

goBack();