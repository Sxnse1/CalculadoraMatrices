

function confirmarMatriz() {

let filasMatriz = document.getElementById('filasMatriz').value;
let columnasMatriz = document.getElementById('columnasMatriz').value;


console.log(filasMatriz + " y " + columnasMatriz);

document.getElementById('div-inicial').style.display = 'none';
document.getElementById('div-matriz').style.display = 'flex';  

}
