const $mostrarInformacionJunta=document.querySelector('#mostrarInformacionJunta');

$mostrarInformacionJunta.onclick=function(){
    const nombreUsuario1=document.querySelector('#primerNombreUsuario').value;
    const nombreUsuario2=document.querySelector('#segundoNombreUsuario').value;
    const nombreUsuario3=document.querySelector('#apellidoUsuario').value;
    const edadUsuario=String(document.querySelector('#edadUsuario').value);

    
    document.querySelector('#todaInformacionJunta').innerText=`Su nombre completo es: ${nombreUsuario1} ${nombreUsuario2} ${nombreUsuario3} y su edad es: ${edadUsuario}`;
    document.querySelector('h1').innerText='Bienvenido '+nombreUsuario1+'!';
    return false;
}
