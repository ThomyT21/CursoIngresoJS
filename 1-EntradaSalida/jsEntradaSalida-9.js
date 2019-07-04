/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var nuevoSueldo;
 
    sueldo = parseFloat(document.getElementById("sueldo").value);
//calculo el 10% del sueldo multiplicandolo por 0.1 que es lo mismo que 0.10
    aumento = sueldo * 0.1;
//calculo en nuevo sueldo sumandole el aumento al sueldo original
    nuevoSueldo = sueldo + aumento;
//muestro el resultado en la caja de texto inferior
    document.getElementById("resultado").value = nuevoSueldo;

    
}
