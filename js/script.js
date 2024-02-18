import { mountTruthTable } from 'logical-expressions-solver';

function insert(text){
  var texto = document.getElementById('visor').innerHTML 
  document.getElementById('visor').innerHTML = texto + text
}
function limpar(limpa){
  document.getElementById('visor').innerHTML = ""
}
function back(){
  var texto = document.getElementById('visor').innerHTML 
  document.getElementById('visor').innerHTML = texto.substring(0, texto.length - 1)
}
function resultado() {
  let tableContainer = document.getElementById('tableContainer');
  let truthTable = mountTruthTable(document.getElementById('visor').innerHTML);
  tableContainer.appendChild(createTable(truthTable));
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
