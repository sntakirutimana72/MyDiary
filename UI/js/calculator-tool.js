function add () {}

function divide () {}

function modulo () {}

function multiply () {}

function factorize () {}

function substract () {}

const digitStartUpLoad = () => {
  const digiTablEl = htmlToElement("table");

  // creating row 1 and its cols
  const rowTrEl1 = htmlToElement("tr");
  ['7', '8', '9'].forEach(digit => {
    const colTdEl1 = htmlToElement("td", digit);
    rowTrEl1.appendChild(colTdEl1);
  });
  digiTablEl.appendChild(rowTrEl1);

  // creating row 2 and its cols
  const rowTrEl2 = htmlToElement("tr");
  ['4', '5', '6'].forEach(digit => {
    const colTdEl2 = htmlToElement("td", digit);
    rowTrEl2.appendChild(colTdEl2);
  });
  digiTablEl.appendChild(rowTrEl2);

  // creating row 3 and its cols
  const rowTrEl3 = htmlToElement("tr");
  ['.', '0', '='].forEach(digit => {
    const colTdEl3 = htmlToElement("td", digit);
    rowTrEl3.appendChild(colTdEl3);
  });
  digiTablEl.appendChild(rowTrEl3);

  sel("[calculator] [calc-digits]").appendChild(digiTablEl);
}

const ctrlStartUpLoad = () => {
  const ctrlTablEl = htmlToElement("table");

  // creating row 1 and its cols
  const rowTrEl1 = htmlToElement("tr");
  ['exp', 'nrt', 'del'].forEach(ctrl => {
    const colTdEl1 = htmlToElement("td", ctrl);
    rowTrEl1.appendChild(colTdEl1);
  });
  ctrlTablEl.appendChild(rowTrEl1);

  // creating row 2 and its cols
  const rowTrEl2 = htmlToElement("tr");
  ['+', '-', '!'].forEach(ctrl => {
    const colTdEl2 = htmlToElement("td", ctrl);
    rowTrEl2.appendChild(colTdEl2);
  });
  ctrlTablEl.appendChild(rowTrEl2);

  // creating row 3 and its cols
  const rowTrEl3 = htmlToElement("tr");
  ['*', '/', '<'].forEach(ctrl => {
    const colTdEl3 = htmlToElement("td", ctrl);
    rowTrEl3.appendChild(colTdEl3);
  });
  ctrlTablEl.appendChild(rowTrEl3);

  sel("[calculator] [calc-ctrls]").appendChild(ctrlTablEl);
}

const powerCalcUI = () => {}

const runCalculatorApp = () => {
  powerCalcUI();
  digitStartUpLoad();
  ctrlStartUpLoad();
}

let calculatorIsReady;
const calculatorReady = () => {
  if (document.readyState === 'complete') {
    clearInterval(calculatorIsReady);
    calculatorIsReady = undefined;
    runCalculatorApp();
  }
};
calculatorIsReady = setInterval(calculatorReady);
