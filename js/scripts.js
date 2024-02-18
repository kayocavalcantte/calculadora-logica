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
function resultado(){
  
}