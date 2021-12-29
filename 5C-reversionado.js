const $botonCargar = document.querySelector('#boton-cargar')
$botonCargar.onclick= function(){
    let datosClaseUno;
    datosClaseUno=document.querySelectorAll('.clase-uno');
    for(i=0; i<datosClaseUno.length; i++){
        console.log(datosClaseUno[i]);
    }
    //document.querySelector('#resultado-tiempo-total').innerText= //tiempo total videos
    return false
}

