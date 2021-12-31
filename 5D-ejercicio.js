function armarArregloConNumerosLi(nodeElemento){
    const arreglo=[];
    for(let i = 0; i<nodeElemento.lenght; i++){
        arreglo.push(Number(nodeElemento[i].innerText));
    }
    return arreglo;
}

const $numerosDeListaLi = document.querySelectorAll('li');
//console.log(numerosDeListaLi[0].innerText);
//console.log(numerosDeListaLi[1].innerText);
//console.log(numerosDeListaLi[2].innerText);
const arregloDeNumeros = armarArregloConNumerosLi($numerosDeListaLi);


//for(i=0; i<arregloDeNumeros.length; i++){
//    console.log(arregloDeNumeros[i].innerText);
//}

const $botonCalcularPromedio = document.querySelector('#calcular-promedio');
$botonCalcularPromedio.onclick = function(){
    let sumaTotalNumeros = 0;
    let promedio = 0;
    for(let i = 0; i<arregloDeNumeros.lenght; i++){
        sumaTotalNumeros += arregloDeNumeros[i];
    }    
    promedio = sumaTotalNumeros/arregloDeNumeros.length;
    document.querySelector('#promedio').innerText = String (promedio);
    return false;
}

