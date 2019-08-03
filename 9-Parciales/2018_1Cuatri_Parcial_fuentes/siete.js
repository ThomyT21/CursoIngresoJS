function mostrar()
{
    var nota = 0;
    var sexo;
    var promNotasTotales = 0;
    var notasMasBajas = 0;
    var notasMasAltas = 0; 
    var acumuladorNotas = 0;
    

    
    for (var contador = 0; contador < 5; contador++){

        nota = parseInt(prompt("Ingrese Nota: "));
        while (nota < 0 || nota > 10){
            nota = parseInt(prompt("Ingrese Nota: "));
        }

        
        
        sexo = prompt("Ingrese sexo");
        while(sexo != 'f' && sexo != 'm' && sexo != 'F' && sexo != 'M'){
            sexo = prompt("Ingrese sexo");
        }
          
        
    }
    
    acumuladorNotas = acumuladorNotas + nota;


    promNotasTotales = (acumuladorNotas + nota) / 5;
     
    if (notasMasBajas < 5){
        acumuladorNotas = promNotasTotales + nota + sexo;
        contador++;  
    }

    if ()

    


        







        




    }
      
        

        



    




    



}
