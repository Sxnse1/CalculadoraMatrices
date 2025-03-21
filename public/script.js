let operacion;
let matrizDB;
let matrizResultado = [];

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
    pantallaMatrices.id = "div-pantalla-matriz";
    pantallaMatrices.style.display = "flex";
    pantallaMatrices.style.flexDirection = "column";
    pantallaMatrices.style.alignItems = "center";

    document.body.appendChild(pantallaMatrices);

    let divFilaMatrices = document.createElement("div");
    divFilaMatrices.style.display = "flex";
    divFilaMatrices.style.justifyContent = "center";
    divFilaMatrices.style.gap = "20px";
    pantallaMatrices.appendChild(divFilaMatrices);

    matrizA = document.createElement("div");
    matrizA.textContent = "Matriz A";
    matrizA.id = "matrizA";
    divFilaMatrices.appendChild(matrizA);

    matrizB = document.createElement("div");
    matrizB.textContent = "Matriz B";
    matrizB.id = "matrizB";
    divFilaMatrices.appendChild(matrizB);

    tablaA = document.createElement("table");
    matrizA.appendChild(tablaA);
    tablaB = document.createElement("table");
    matrizB.appendChild(tablaB);

    tablaA.classList.add("matricesLiteral");
    tablaB.classList.add("matricesLiteral");

    for (let i = 0; i < numFilasMatriz; i++) {
        let trA = document.createElement("tr");
        tablaA.appendChild(trA);
        let trB = document.createElement("tr");
        tablaB.appendChild(trB);

        for (let j = 0; j < numColumnasMatriz; j++) {
            let tdA = document.createElement("td");
            let inputNumMatrizA = document.createElement("input");
            inputNumMatrizA.type = "number";
            inputNumMatrizA.classList.add("inputNumMatriz");
            inputNumMatrizA.id = `indiceInputA-${i}-${j}`;
            tdA.appendChild(inputNumMatrizA);
            trA.appendChild(tdA);

            let tdB = document.createElement("td");
            let inputNumMatrizB = document.createElement("input");
            inputNumMatrizB.type = "number";
            inputNumMatrizB.classList.add("inputNumMatriz");
            inputNumMatrizB.id = `indiceInputB-${i}-${j}`;
            tdB.appendChild(inputNumMatrizB);
            trB.appendChild(tdB);
        }
    }

    let divFilaResultados = document.createElement("div");
    divFilaResultados.id = "divFilaResultados";
    divFilaResultados.style.display = "flex";
    divFilaResultados.style.justifyContent = "center";
    divFilaResultados.style.gap = "20px";
    divFilaResultados.style.marginTop = "20px";
    pantallaMatrices.appendChild(divFilaResultados);

    divBotones = document.createElement("div");
    divBotones.id = "divBotones";
    divBotones.style.marginTop = "20px";
    pantallaMatrices.appendChild(divBotones);

    let botonSuma = document.createElement("button");
    botonSuma.textContent = "Suma";
    botonSuma.classList.add("botones");
    botonSuma.id = 'botonSuma';
    botonSuma.onclick = function () {
        operacionSuma(numFilasMatriz, numColumnasMatriz);
        guardarBase('Suma');
    };
    divBotones.appendChild(botonSuma);

    let botonResta = document.createElement("button");
    botonResta.textContent = "Resta";
    botonResta.classList.add("botones");
    botonResta.id = 'botonResta';
    botonResta.onclick = function () {
        operacionResta(numFilasMatriz, numColumnasMatriz);
        guardarBase('Resta');
    };
    divBotones.appendChild(botonResta);

    let botonDivision = document.createElement("button");
    botonDivision.textContent = "División";
    botonDivision.classList.add("botones");
    botonDivision.id = 'botonDivision';
    botonDivision.onclick = function () {
        operacionDivision(numFilasMatriz, numColumnasMatriz);
        guardarBase('Division');
    };
    divBotones.appendChild(botonDivision);
}


function operacionSuma(numFilasMatriz, numColumnasMatriz) {

    operacion = 'suma';

    matrizA = creacionMatrizA(numFilasMatriz, numColumnasMatriz);
    matrizB = creacionMatrizB(numFilasMatriz, numColumnasMatriz);


    matrizResultado = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
    for (let i = 0; i < numFilasMatriz; i++) {
        for (let j = 0; j < numColumnasMatriz; j++) {
            matrizResultado[i][j] = parseInt(matrizA[i][j]) + parseInt(matrizB[i][j]);
        }
    }

    console.log(Array.isArray(matrizResultado));
    creacionMatrizResultado(matrizResultado);


}

function operacionResta(numFilasMatriz, numColumnasMatriz) {

    matrizA = creacionMatrizA(numFilasMatriz, numColumnasMatriz);
    matrizB = creacionMatrizB(numFilasMatriz, numColumnasMatriz);


    matrizResultado = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
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


    matrizResultado = new Array(numFilasMatriz).fill().map(() => new Array(numColumnasMatriz).fill(0));
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
            objectMatrizA = {}
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
    let divFilaResultados = document.getElementById("divFilaResultados");

    // Eliminar resultado anterior si existe
    let matrizAnterior = document.getElementById("matrizResultado");
    if (matrizAnterior) {
        divFilaResultados.removeChild(matrizAnterior);
    }

    let contenedorResultado = document.createElement("div");
    contenedorResultado.textContent = "Matriz Resultado";
    contenedorResultado.id = "matrizResultado";
    divFilaResultados.appendChild(contenedorResultado);

    let tablaResultado = document.createElement("table");
    tablaResultado.classList.add("matricesLiteral");
    contenedorResultado.appendChild(tablaResultado);

    for (let i = 0; i < matrizResultado.length; i++) {
        let trResultado = document.createElement("tr");
        tablaResultado.appendChild(trResultado);

        for (let j = 0; j < matrizResultado[i].length; j++) {
            let tdResultado = document.createElement("td");
            let parrafoRespuesta = document.createElement("p");
            parrafoRespuesta.textContent = matrizResultado[i][j];
            tdResultado.appendChild(parrafoRespuesta);
            trResultado.appendChild(tdResultado);
        }
    }
}

async function guardarBase(operacion) {
    const matrizJSON = JSON.stringify(matrizResultado);

    console.log(`Valores: ${matrizJSON}, Tipo: ${typeof matrizJSON}`);
    try {
        const response = await fetch("/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ operacion, matrizJSON })
        });

        const data = await response.json();

        if (response.ok) {
            // Aquí es donde debes insertar el HTML que recibes en la respuesta
            document.getElementById('resultados').innerHTML = data.html;
        } else {
            console.log("Error en la solicitud: " + response.statusText);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        console.log("Error en la conexión");
    }
}



