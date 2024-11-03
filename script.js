class Unit {
    example;
    calculate;
    constructor(example, calculate) {
        this.example = example;
        this.calculate = calculate;
    }
}
// 8.81599 => 8.82
const round = int => {
    let roundedInt = Math.round(int * 1000) / 1000;
    // make number readable 7861399.890 => 7 861 399.890
    let [intPart, floatPart] = roundedInt.toString().split(".");
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return floatPart ? `${intPart}.${floatPart}` : intPart;
};

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
        <span>Minuten:</span><span>${round(seconds / 60)}</span>
        <span>Stunden:</span><span>${round(seconds / 3600)}</span>
        <span>Tage:</span><span>${round(seconds / 86400)}</span>
        <span>Wochen:</span><span>${round(seconds / 604800)}</span>
        <span>Monate:</span><span>${round(seconds / 2592000)}</span>
        <span>Jahre:</span><span>${round(seconds / 31536000)}</span></div>`;
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
        <span>Meter:</span><span>${round(meters)}</span>
        <span>Seemeilen:</span><span>${round(meters / 1852)}</span>
        <h3>Imperial:</h3><span></span>
        <span>Zoll:</span><span>${round(meters * 100 / 2.54)}</span>
        <span>Fuß:</span><span>${round(meters * 100 / 30.48)}</span>
        <span>Yard:</span><span>${round(meters * 100 / 91.44)}</span>
        <span>Meilen:</span><span>${round(meters / 1609.344)}</span>
        <h3>Astronomisch</h3><span></span>
        <span>AE:</span><span>${round(meters / 149597870700)}</span>
        <span>Lichtjahr:</span><span>${round(meters / 9.460730472580800e15)}</span></div>`;
    }),
    'Fläche': new Unit('16m2', (value, unit) => {
        let qmeters;
        if (unit == 'mm2') qmeters = value / 1000000;
        else if (unit == 'cm2') qmeters = value / 10000;
        else if (unit == 'dm2') qmeters = value / 100;
        else if (unit == 'm2') qmeters = value;
        else if (unit == 'a') qmeters = value * 100;
        else if (unit == 'ha') qmeters = value * 10000;
        else if (unit == 'km2') qmeters = value * 1000000;
        else return `<h3>Gültige Einheiten</h3><p>mm2, cm2, dm2, m2, a, ha, km2</p>`;
        return `<div class="grid">
        <span>Quadratmillimeter:</span><span>${round(qmeters * 1000000)}</span>
        <span>Quadratzentimeter:</span><span>${round(qmeters * 10000)}</span>
        <span>Quadratdezimeter:</span><span>${round(qmeters * 100)}</span>
        <span>Quadratmeter:</span><span>${round(qmeters)}</span>
        <span>Ar:</span><span>${round(qmeters / 100)}</span>
        <span>Hektar:</span><span>${round(qmeters / 10000)}</span>
        <span>Quadratkilometer:</span><span>${round(qmeters / 1000000)}</span></div>`
    }),
    'Gewicht': new Unit('8kg', (value, unit) => {
        let kilogramm;
        if (unit == 'g') kilogramm = value / 1000;
        else if (unit == 'kg') kilogramm = value;
        else if (unit == 't') kilogramm = value * 1000;
        else if (unit == 'lb') kilogramm = value * 0.45359237;
        else if (unit == 'oz') kilogramm = value / 35.27396;
        else if (unit == 'st') kilogramm = value * 6.35029318;
        else if (unit == 'ct') kilogramm = value * 0.0002;
        else if (unit == 'sl') kilogramm = value * 14.5939;
        else return `<h3>Gültige Einheiten</h3><p>g, kg, t, lb, oz, st, ct, sl</p>`;

        return `<div class="grid">
        <h3>Metrisch:</h3><span></span>
        <span>Gramm:</span><span>${round(kilogramm * 1000)}</span>
        <span>Kilogram:</span><span>${round(kilogramm)}</span>
        <span>Tonne:</span><span>${round(kilogramm / 1000)}</span>
        <h3>Angloamerikanisch:</h3><span></span>
        <span>Pfund:</span><span>${round(kilogramm / 0.45359237)}</span>
        <span>Unze:</span><span>${round(kilogramm * 35.27396)}</span>
        <span>Stein:</span><span>${round(kilogramm / 6.35029318)}</span>
        <h3>Sonstiges:</h3><span></span>
        <span>Carat:</span><span>${round(kilogramm / 0.0002)}</span>
        <span>Slug:</span><span>${round(kilogramm / 14.5939)}</span></div>`;
    }),
    'Temperatur': new Unit('18F', (value, unit) => {
        let celsius;
        if (unit == 'C') celsius = value;
        else if (unit == 'K') celsius = +value - 273.15;
        else if (unit == 'F') celsius = (+value - 32) / (9 / 5);
        else return `<h3>Gültige Einheiten</h3><p>C, K, F</p>`;
        return `<div class="grid">
        <span>Celsius:</span><span>${round(celsius)}</span>
        <span>Kelvin:</span><span>${round(+celsius + 273.15)}</span>
        <span>Fahrenheit:</span><span>${round(+celsius * 9 / 5 + 32)}</span></div>`;
    }),
    'Geschwindigkeit': new Unit('12mih', (value, unit) => {
        let mps;
        if (unit == 'ms') mps = value;
        else if (unit == 'mh') mps = value / 3600;
        else if (unit == 'kms') mps = value * 1000;
        else if (unit == 'kmh') mps = value / 3.6;
        else if (unit == 'c') mps = value * 299792458;
        else if (unit == 'fts') mps = value * 0.3048;
        else if (unit == 'fth') mps = (value * 0.3048) / 3600;
        else if (unit == 'mis') mps = value * 1609.344;
        else if (unit == 'mih') mps = (value * 1609.344) / 3600;
        else if (unit == 'kn') mps = value * 0.514444;
        else if (unit == 'nms') mps = value * 1852;
        else if (unit == 'nmh') mps = (value * 1852) / 3600;
        else return `<h3>Gültige Einheiten</h3><p>ms, mh, kms, kmh, c,<br>fts, fth, mis, mih,<br>kn, nms, nmh</p>`;

        return `<div class="grid">
        <h3>Metrisch:</h3><span></span>
        <span>Meter/Sekunde:</span><span>${round(mps)}</span>
        <span>Meter/Stunde:</span><span>${round(mps * 3600)}</span>
        <span>Kilometer/Sekunde:</span><span>${round(mps / 1000)}</span>
        <span>Kilometer/Stunde:</span><span>${round(mps * 3.6)}</span>
        <span>Lichtgeschwindigkeit:</span><span>${round(mps / 299792458)}</span>
        <h3>Imperial:</h3><span></span>
        <span>Fuß/Sekunde:</span><span>${round(mps / 0.3048)}</span>
        <span>Fuß/Stunde:</span><span>${round((mps / 0.3048) * 3600)}</span>
        <span>Meilen/Sekunde:</span><span>${round(mps / 1609.344)}</span>
        <span>Meilen/Stunde:</span><span>${round((mps / 1609.344) * 3600)}</span>
        <h3>Nautisch:</h3><span></span>
        <span>Knoten:</span><span>${round(mps / 0.514444)}</span>
        <span>Seemeilen/Sekunde:</span><span>${round(mps / 1852)}</span>
        <span>Seemeilen/Stunde:</span><span>${round((mps / 1852) * 3600)}</span></div>`;
    })
}

function openUnit(unit) {
    document.getElementById('header-win-title').innerHTML = unit;
    document.getElementById('win-input').innerHTML = `<input type="text" class="input" placeholder="z. B. ${units[unit].example}" id="unit-input" autocomplete="off"><button class="btn-pink">Berechnen</button>`;
    document.getElementById('win-input').onsubmit = () => unitResults.innerHTML = calculate(document.getElementById('unit-input').value, unit);

    win.window.style.display = 'block';
    setTimeout(() => {
        win.window.style.top = '0%';
        win.window.style.opacity = '1';
    }, 10);
}

function goBack() {
    let html = '<p>Einheit zum Berechnen anklicken...</p><ul id="unit-list">';
    for (key in units) {
        html += `<li onclick="openUnit('${key}')" role="button">${key}</li>`;
    }
    html += '</ul>';
    document.getElementById('header').scrollIntoView();
    main.innerHTML = html;

    win.window.style.top = '10%';
    win.window.style.opacity = '0';
    setTimeout(() => win.window.style.display = 'none', 300);
    document.getElementById('unit-results').innerHTML = '';
}

function calculate(input, type) {
    // Check if input valid
    input = input.trim();
    if (input == '' || !/[A-z]/.test(input) || !/[0-9]/.test(input)) {
        return '<div class="error">Eingabe nicht gültig. Tippe "99help" für Hilfe.</div>';
    }
    if (input.indexOf(',') > -1) {
        return '<div class="error">Verwende einen Punkt anstatt ein Komma.</div>';
    }
    let firstLetterPos = findFirstLetter(input);
    // parse input in value and unit
    let value = input.slice(0, firstLetterPos);
    let unit = input.slice(firstLetterPos);
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