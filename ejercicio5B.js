const $mostrarInformacionJunta=document.querySelector('#mostrarInformacionJunta');

$mostrarInformacionJunta.onclick=function(){
    const nombreUsuario1=document.querySelector('#primerNombreUsuario').value;
    const nombreUsuario2=document.querySelector('#segundoNombreUsuario').value;
    const nombreUsuario3=document.querySelector('#apellidoUsuario').value;
    const edadUsuario=String(document.querySelector('#edadUsuario').value);

    console.log(nombreUsuario1+nombreUsuario2+nombreUsuario3+edadUsuario);
    document.querySelector('#todaInformacionJunta').innertext=nombreUsuario1+nombreUsuario2+nombreUsuario3+edadUsuario;
    document.querySelector('h1').innerText='Bienvenido, '+nombreUsuario1+'!';
    return false;
}
