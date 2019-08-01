/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
        var largo;
        var ancho;
        var alambre;
       
        largo = parseInt(document.getElementById("Largo").value);
        ancho = parseInt(document.getElementById("Ancho").value);
        alambre = (ancho * 2 + largo * 2) * 3;
        alert ("el total de alambre a comprar es: " + alambre);

}
function Circulo () 
{
    var radio;
    var alambre;

    radio = parseInt(document.getElementById("Radio").value);
    alambre = ((2*3,14)* radio) * 3;
    alert ("el total de alambre a comprar es: " + alambre);
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;
   
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    cemento = (ancho * largo) * 2;
    cal = (ancho * largo) * 3;
    
    alert ("para el contrapiso se necesitan: " + cemento + (" bolsas de cemento y ") + cal + (" bolsas de cal"));
	
}