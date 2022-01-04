const $botonCargar = document.querySelector("#boton-cargar");

function contarTotalTiempo(nodoElemento) {
  let totalTiempo = 0;
  for (i = 0; i < nodoElemento.length; i++) {
    totalTiempo = totalTiempo + Number(nodoElemento[i].value);
  }
  return totalTiempo;
}

$botonCargar.onclick = function () {
  let horasDeLasClases = document.querySelectorAll(".horas");
  let minutosDeLasClases = document.querySelectorAll(".minutos");
  let segundosDeLasClases = document.querySelectorAll(".segundos");

  horasDeLasClases = contarTotalTiempo(horasDeLasClases);
  minutosDeLasClases = contarTotalTiempo(minutosDeLasClases);
  segundosDeLasClases = contarTotalTiempo(segundosDeLasClases);

  const segundosPorMinuto = 60;
  let minutosAuxiliar = 0;
  let horasAuxiliar = 0;
  if (segundosDeLasClases >= segundosPorMinuto) {
    minutosAuxiliar = Math.trunc(segundosDeLasClases / segundosPorMinuto);
    minutosDeLasClases = minutosDeLasClases + minutosAuxiliar;
    segundosDeLasClases =
      segundosDeLasClases - minutosAuxiliar * segundosPorMinuto;
  }
  if (minutosDeLasClases >= segundosPorMinuto) {
    horasAuxiliar = Math.trunc(minutosDeLasClases / segundosPorMinuto);
    horas = horas + horasAuxiliar;
    minutosDeLasClases = minutosDeLasClases - horasAuxiliar * segundosPorMinuto;
  }

  horasDeLasClases = String(horasDeLasClases);
  minutosDeLasClases = String(minutosDeLasClases);
  segundosDeLasClases = String(segundosDeLasClases);

  document.querySelector(
    "#resultado-tiempo-total"
  ).textContent = `El tiempo total de los videos es de ${horasDeLasClases} horas, con ${minutosDeLasClases} minutos y ${segundosDeLasClases} segundos`;
  return false;
};
