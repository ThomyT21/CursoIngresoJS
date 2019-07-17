function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != 'f' && sexo != 'm' && sexo != 'M' && sexo != 'F'){

    alert("Sexo incorrecto");
    sexo = prompt("Ingrese sexo f o m");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN