contador =0;
funcao_intervalo = false;
function cronometro (){  if(funcao_intervalo){/* tem um inteiro na var. funcao_intervalo */ 

}
else{
    funcao_intervalo = setInterval (()=>{document.getElementById('texto').innerHTML = contador;
    contador++
}
 , 1000 );

}

}
  