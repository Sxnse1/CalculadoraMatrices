

function confirmarMatriz() {

    let numFilasMatriz = document.getElementById('filasMatriz').value;
    let numColumnasMatriz = document.getElementById('columnasMatriz').value;

    numFilasMatriz >= 1 ? numFilasMatriz : numFilasMatriz = 2;
    numColumnasMatriz >= 1 ? numColumnasMatriz : numColumnasMatriz = 2;
    console.log(numFilasMatriz + " y " + numColumnasMatriz);

    document.getElementById('div-pantalla-principal').style.display = 'none';
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

    divBotones = document.createElement("div");
    pantallaMatrices.appendChild(divBotones);
    divBotones.id = "divBotones"

    botonSuma = document.createElement("button");
    divBotones.appendChild(botonSuma);
    botonSuma.textContent = "Suma"
    botonSuma.classList.add("botones");
    botonSuma.onclick = function () {
        operacionSuma(numFilasMatriz, numColumnasMatriz);
    };

    botonResta = document.createElement("button");
    divBotones.appendChild(botonResta);
    botonResta.textContent = "Resta"
    botonResta.classList.add("botones");
    botonResta.onclick = function () {
        operacionResta(numFilasMatriz, numColumnasMatriz);
    };

    botonDivision = document.createElement("button");
    divBotones.appendChild(botonDivision);
    botonDivision.textContent = "División"
    botonDivision.classList.add("botones");
    botonDivision.onclick = function () {
        operacionDivision(numFilasMatriz, numColumnasMatriz);
    };


}

function operacionSuma(numFilasMatriz, numColumnasMatriz) {

    matrizA = creacionMatrizA(numFilasMatriz, numColumnasMatriz);
    matrizB = creacionMatrizB(numFilasMatriz, numColumnasMatriz);


    let matrizResultado = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizResultado[i][j] = parseInt(matrizA[i][j]) + parseInt(matrizB[i][j]);
        }
    }

    console.log(matrizResultado);
    creacionMatrizResultado(matrizResultado);
}

function operacionResta(numFilasMatriz, numColumnasMatriz) {

    matrizA = creacionMatrizA(numFilasMatriz, numColumnasMatriz);
    matrizB = creacionMatrizB(numFilasMatriz, numColumnasMatriz);


    let matrizResultado = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizResultado[i][j] = parseInt(matrizA[i][j]) - parseInt(matrizB[i][j]);
        }
    }

    console.log(matrizResultado);
    creacionMatrizResultado(matrizResultado);
}

function operacionDivision(numFilasMatriz, numColumnasMatriz) {

    matrizA = creacionMatrizA(numFilasMatriz, numColumnasMatriz);
    matrizB = creacionMatrizB(numFilasMatriz, numColumnasMatriz);


    let matrizResultado = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizResultado[i][j] = parseInt(matrizA[i][j]) / parseInt(matrizB[i][j]);
        }
    }

    console.log(matrizResultado);
    creacionMatrizResultado(matrizResultado);
}

function creacionMatrizA(numFilasMatriz, numColumnasMatriz) {
    //Creacion matriz A
    let matrizA = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    console.log(matrizA);

    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizA[i][j] = document.getElementById(`indiceInputA-${i}-${j}`).value;
        }
    }

    console.log(matrizA);

    return matrizA;

}

function creacionMatrizB(numFilasMatriz, numColumnasMatriz) {
    //Creacion matriz B
    let matrizB = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    console.log(matrizB);

    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizB[i][j] = document.getElementById(`indiceInputB-${i}-${j}`).value;
        }
    }

    console.log(matrizB);

    return matrizB;
}

function creacionMatrizResultado(matrizResultado) {
    divMatrizResultado = document.createElement("div");
    pantallaMatrices.appendChild(divMatrizResultado);

    let contenedorResultado = document.createElement("div");
    contenedorResultado.textContent = "Matriz Resultado";
    contenedorResultado.id = "matrizResultado";
    divMatrizResultado.appendChild(contenedorResultado);

    let tablaResultado = document.createElement("table");
    contenedorResultado.appendChild(tablaResultado);

    tablaResultado.classList.add("matricesLiteral");

    for (let i = 0; i < matrizResultado.length; i++) {
        let trResultado = document.createElement("tr");
        tablaResultado.appendChild(trResultado);
        trResultado.classList.add("trClass");

        for (let j = 0; j < matrizResultado[i].length; j++) {
            let tdResultado = document.createElement("td");
            trResultado.appendChild(tdResultado);

            let parrafoRespuesta = document.createElement("p");
            tdResultado.appendChild(parrafoRespuesta);
            parrafoRespuesta.style.width = "50px";
            parrafoRespuesta.style.height = "50px";
            parrafoRespuesta.style.backgroundColor = "white";
            parrafoRespuesta.style.alignItems = "center";
            parrafoRespuesta.style.justifyContent = "center";
            parrafoRespuesta.style.alignContent = "center";
            parrafoRespuesta.style.margin = "6px";
            parrafoRespuesta.textContent = matrizResultado[i][j];
        }
    }
}
