import { mountTruthTable } from 'logical-expressions-solver';

function insert(text){
  var texto = document.getElementById('visor').innerHTML 
  document.getElementById('visor').innerHTML = texto + text
}
function limpar(limpa){
  document.getElementById('visor').innerHTML = ""
  document.getElementById('tableContainer').innerHTML = ""
  document.querySelector('.label-container p').remove()
}
function back(){
  var texto = document.getElementById('visor').innerHTML 
  document.getElementById('visor').innerHTML = texto.substring(0, texto.length - 1)
  console.log(texto.substring(0, texto.length - 1))
}
function resultado() {
  const tableContainer = document.getElementById('tableContainer');
  const labelContainer = document.querySelector('.label-container');
  const label = document.querySelector('.label-container p')
  const resultTable = tableContainer.querySelector('table');

  let truthTable = mountTruthTable(document.getElementById('visor').innerHTML);

  const resultColumn = truthTable.map((row) => Object.values(row).at(-1));
  if (label) label.remove(); 
  labelContainer.appendChild(createLabel(resultColumn))
  
  if (resultTable) resultTable.remove();
  tableContainer.appendChild(createTable(truthTable));
}

function createLabel(resultColumn) {
  const label = document.createElement('p');

  if (resultColumn.every((item) => item == true)) label.innerText = 'É uma tautologia!'
  else if (resultColumn.some((item) => item == true)) label.innerText = 'É uma contingência!'
  else label.innerText = 'É uma contradição!';

  return label;
}

function createTable(data) {
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var headRow = document.createElement('tr');
  Object.keys(data[0]).forEach(function(key) {
    var th = document.createElement('th');
    th.textContent = key;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  data.forEach(function(rowData) {
    var row = document.createElement('tr');
    Object.values(rowData).forEach(function(value) {
      var cell = document.createElement('td');
      cell.textContent = value ? 'V' : 'F';
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}


window.insert = insert;
window.limpar = limpar;
window.back = back;
window.resultado = resultado;

