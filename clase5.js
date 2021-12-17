const $botonCalcular=document.querySelector('#botonCalcular')

$botonCalcular.onclick=function(){
    const sueldoMensual=Number(document.querySelector('#sueldoMensual').value);
    const mesesDelAño=12;
    const semanasDelMes=4;
    const diasDelMes=31;
    const horasDelDia=24;
    let textoSueldoAnual;
    let textoSueldoSemanal;
    let textoSueldoDiario;
    let textoSueldoPorHora;
    textoSueldoAnual=sueldoMensual*mesesDelAño;
    textoSueldoSemanal=sueldoMensual/semanasDelMes;
    textoSueldoDiario=sueldoMensual/diasDelMes;
    textoSueldoPorHora=textoSueldoDiario/horasDelDia;

    document.querySelector('#sueldoPorAño').innerText=String(textoSueldoAnual)+"$ Es su sueldo anual.";
    document.querySelector('#sueldoPorSemana').innerText=String(textoSueldoSemanal)+"$ Es su sueldo por semana.";
    document.querySelector('#sueldoPorDia').innerText=String(textoSueldoDiario)+"$ Es su sueldo por dia.";
    document.querySelector('#sueldoPorHora').innerText=String(textoSueldoPorHora)+"$ Es su sueldo por hora." ;
    document.querySelector('#nombre').innerText="GRACIAS "+document.querySelector('#nombreUsuario').value+" POR UTILIZAR NUESTRO SERVICIO";
    
    return false;
}


