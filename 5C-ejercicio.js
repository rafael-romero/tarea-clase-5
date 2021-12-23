let horas=0;
let minutos=0;
let segundos=0;

const $botonRegistroTiempoDeUnVideo=document.querySelector('#registroTiempoVideo');
$botonRegistroTiempoDeUnVideo.onclick=function(horas, minutos, segundos){
    horas=horas+Number(document.querySelector('#horasVideo').value);
    minutos=minutos+Number(document.querySelector('#minutosVideo').value);
    segundos=segundos+Number(document.querySelector('#segundosVideo').value);
    return (horas, minutos, segundos);
}

const $botonCalcularTiempoTotal=document.querySelector('#calcularTiempoTotal');
$botonCalcularTiempoTotal.onclick=function(horas, minutos, segundos){
    const segundosPorMinuto=60;
    let minutosAuxiliar=0;
    let horasAuxiliar=0;
    if (segundos>=segundosPorMinuto){
        minutosAuxiliar= Math.trunc(segundos/segundosPorMinuto);
        minutos=minutos+minutosAuxiliar;
        segundos=segundos-(minutosAuxiliar*segundosPorMinuto);
    }else if (minutos>=segundosPorMinuto){  //para no declarar otra variable con el numero 60 usamos esta misma
        horasAuxiliar=Math.trunc(minutos/segundosPorMinuto);
        horas=horas+horasAuxiliar;
        minutos=minutos-(horasAuxiliar*segundosPorMinuto);
    }
    horas=String(horas);
    minutos=String(minutos);
    segundos=String(segundos);

    document.querySelector('#tiempoTotal').innerText=`El tiempo total de los videos es ${horas} con ${minutos} y ${segundos}`;
    return false
}



