let horas=0;
let minutos=0;
let segundos=0;

const $botonRegistroTiempoDeUnVideo=document.querySelector('#registro-tiempo-video');
$botonRegistroTiempoDeUnVideo.onclick=function(){
    horas=horas+Number(document.querySelector('#horas-video').value);
    minutos=minutos+Number(document.querySelector('#minutos-video').value);
    segundos=segundos+Number(document.querySelector('#segundos-video').value);
    
    return false
}
    
const $botonCalcularTiempoTotal=document.querySelector('#calcular-tiempo-total');
$botonCalcularTiempoTotal.onclick=function(){
    const segundosPorMinuto=60;
    let minutosAuxiliar=0;
    let horasAuxiliar=0;
    if (segundos>=segundosPorMinuto){
        minutosAuxiliar= Math.trunc(segundos/segundosPorMinuto);
        minutos=minutos+minutosAuxiliar;
        segundos=segundos-(minutosAuxiliar*segundosPorMinuto);
    }
    if (minutos>=segundosPorMinuto){  //para no declarar otra variable con el numero 60 usamos esta misma
        horasAuxiliar=Math.trunc(minutos/segundosPorMinuto);
        horas=horas+horasAuxiliar;
        minutos=minutos-(horasAuxiliar*segundosPorMinuto);
    }
    horas=String(horas);
    minutos=String(minutos);
    segundos=String(segundos);

    document.querySelector('#tiempo-total').textContent=`El tiempo total de los videos es ${horas} con ${minutos} y ${segundos}`;
    return false
}

