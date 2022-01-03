function obtenerNumeros(numerosDeListado) {
  const arreglo = [];
  for (let i = 0; i < numerosDeListado.length; i++) {
    arreglo.push(Number(numerosDeListado[i].innerText));
  }
  return arreglo;
}

const $numeros = document.querySelectorAll("li");
const arregloDeNumeros = obtenerNumeros($numeros);

const $botonCalcularPromedio = document.querySelector("#calcular-promedio");
$botonCalcularPromedio.onclick = function () {
  let sumaTotalNumeros = 0;
  let promedio = 0;
  for (let i = 0; i < arregloDeNumeros.length; i++) {
    sumaTotalNumeros += arregloDeNumeros[i];
  }
  promedio = (sumaTotalNumeros / arregloDeNumeros.length).toFixed(2);
  document.querySelector("#promedio").innerText = promedio;
  return false;
};

const $botonCalcularNumeroMasPequenio = document.querySelector(
  "#calcular-numero-mas-pequenio"
);
$botonCalcularNumeroMasPequenio.onclick = function () {
  let numeroMasPequenio = arregloDeNumeros[0];
  for (let i = 1; i < arregloDeNumeros.length; i++) {
    if (arregloDeNumeros[i] < numeroMasPequenio) {
      numeroMasPequenio = arregloDeNumeros[i];
    }
  }
  document.querySelector("#numero-mas-pequenio").innerText =
    String(numeroMasPequenio);
  return false;
};

const $botonCalcularNumeroMasGrande = document.querySelector(
  "#calcular-numero-mas-grande"
);
$botonCalcularNumeroMasGrande.onclick = function () {
  let numeroMasGrande = arregloDeNumeros[0];
  for (let i = 1; i < arregloDeNumeros.length; i++) {
    if (arregloDeNumeros[i] > numeroMasGrande) {
      numeroMasGrande = arregloDeNumeros[i];
    }
  }
  document.querySelector("#numero-mas-grande").innerText =
    String(numeroMasGrande);
  return false;
};

const $botonCalcularNumeroMasFrecuente = document.querySelector(
  "#calcular-numero-mas-frecuente"
);
$botonCalcularNumeroMasFrecuente.onclick = function () {
  let numeroMasFrecuente;
  let masVecesRepetido = 0;
  for (let i = 0; i < arregloDeNumeros.length; i++) {
    let vecesRepetido = 0;
    const numeroAComparar = arregloDeNumeros[i];
    for (let j = i + 1; j < arregloDeNumeros.length; j++) {
      if (arregloDeNumeros[j] === numeroAComparar) {
        vecesRepetido++;
      }
    }
    if (vecesRepetido > masVecesRepetido) {
      masVecesRepetido = vecesRepetido;
      numeroMasFrecuente = arregloDeNumeros[i];
    }
  }
  document.querySelector("#numero-mas-frecuente").innerText =
    String(numeroMasFrecuente);
  return false;
};
