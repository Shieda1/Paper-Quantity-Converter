// https://www.omnicalculator.com/conversion/paper-quantity

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const quiresRadio = document.getElementById('quiresRadio');
const sheetsRadio = document.getElementById('sheetsRadio');

let quires;
let sheets = v; 

// labels of the inpust
const variable = document.getElementById('variable');

quiresRadio.addEventListener('click', function() {
  variable.textContent = 'Sheets';
  sheets = v;
  result.textContent = '';
});

sheetsRadio.addEventListener('click', function() {
  variable.textContent = 'Quires';
  quires = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(quiresRadio.checked)
    result.textContent = `Quires = ${computequires().toFixed(0)}`;

  else if(sheetsRadio.checked)
    result.textContent = `Sheets = ${computesheets().toFixed(0)}`;
})

// calculation

function computequires() {
  return Number(sheets.value) * 0.04;
}

function computesheets() {
  return Number(quires.value) / 0.04;
}