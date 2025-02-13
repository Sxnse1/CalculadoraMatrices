

function confirmarMatriz() {

    let numFilasMatriz = document.getElementById('filasMatriz').value;
    let numColumnasMatriz = document.getElementById('columnasMatriz').value;

    numFilasMatriz >= 1 ? numFilasMatriz : numFilasMatriz = 2;
    numColumnasMatriz >= 1 ? numColumnasMatriz : numColumnasMatriz = 2;


    console.log(numFilasMatriz + " y " + numColumnasMatriz);

    document.getElementById('div-pantalla-principal').style.display = 'none';
    //document.getElementById('div-pantalla-matriz').style.display = 'flex';  

    creacionMatrizDinamica(numFilasMatriz, numColumnasMatriz)
}

function creacionMatrizDinamica(numFilasMatriz, numColumnasMatriz) {
    pantallaMatrices = document.createElement("div");
    document.body.appendChild(pantallaMatrices)
    pantallaMatrices.id = "div-pantalla-matriz";

    matrizA = document.createElement("div");
    matrizA.textContent = "Matriz A";
    matrizA.id = "matrizA";
    pantallaMatrices.appendChild(matrizA);
    matrizB = document.createElement("div");
    matrizB.textContent = "Matriz B";
    matrizB.id = "matrizB";
    pantallaMatrices.appendChild(matrizB);

    tablaA = document.createElement("table");
    matrizA.appendChild(tablaA)
    tablaB = document.createElement("table");
    matrizB.appendChild(tablaB);

    tablaA.classList.add("matricesLiteral")
    tablaB.classList.add("matricesLiteral")

    for (let i = 0; i < numFilasMatriz; i++) {
        //Creacion del tr para matriz A
        trA = document.createElement("tr");
        tablaA.appendChild(trA);
        trA.classList.add("trClass");

        //Creacion del tr para matriz B
        trB = document.createElement("tr");
        tablaB.appendChild(trB);
        trB.classList.add("trClass");

        for (let j = 0; j < numColumnasMatriz; j++) {

            tdA = document.createElement("td");
            trA.appendChild(tdA);
            inputNumMatrizA = document.createElement("input");
            inputNumMatrizA.type = "number"
            tdA.appendChild(inputNumMatrizA);
            inputNumMatrizA.classList.add("inputNumMatriz");
            inputNumMatrizA.id = `indiceInputA-${i}-${j}`;

            tdB = document.createElement("td");
            trB.appendChild(tdB);
            inputNumMatrizB = document.createElement("input");
            tdB.appendChild(inputNumMatrizB);
            inputNumMatrizB.classList.add("inputNumMatriz");
            inputNumMatrizB.type = "number"
            inputNumMatrizB.id = `indiceInputB-${i}-${j}`;
        }


    }

    botonSuma = document.createElement("button");
    pantallaMatrices.appendChild(botonSuma);
    botonSuma.textContent = "Suma"
    botonSuma.onclick = function() {
        operacionSuma(numFilasMatriz, numColumnasMatriz);
    };
    

}

function operacionSuma(numFilasMatriz, numColumnasMatriz) {
    //Creacion matriz A
    let matrizA = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    console.log(matrizA);

    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizA[i][j] = document.getElementById(`indiceInputA-${i}-${j}`).value;
        }
    }

    console.log(matrizA);

    //Creacion matriz B
    let matrizB = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    console.log(matrizB);

    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizB[i][j] = document.getElementById(`indiceInputB-${i}-${j}`).value;
        }
    }

    console.log(matrizB);


}