/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
        var largo;
        var ancho;
        var alambre;
       
        largo = parseInt(document.getElementById("Largo").value);
        ancho = parseInt(document.getElementById("Ancho").value);
        alambre = (ancho * 2 + largo * 2) * 3;
        alert ("el total de alambre a comprar es: " + alambre);
	
}
function Promedio () 
{
    var radio;
    var alambre;

 radio = parseInt(document.getElementById("Radio").value);
 alambre = ((2*3,14)* radio) * 3;
 alert ("el total de alambre a comprar es: " + alambre);
    


}
function PrecioFinal () 
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