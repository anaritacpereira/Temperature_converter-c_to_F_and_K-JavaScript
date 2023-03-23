function digitar(botao){
    let ecra=document.getElementById("valor");

    if(botao=="."){ 
        if(!ecra.innerHTML.includes(".")){  
            if(ecra.innerHTML==""){
                ecra.innerHTML += "0" + botao;
            }
            else{
                ecra.innerHTML += botao;
            }
        }
    }
    else{
        ecra.innerHTML += botao;
    }

    calcular(ecra.innerHTML);
    
}
    

function negativo(botao){
    let ecra=document.getElementById("valor");
    
    if(botao=="-" && ecra.innerHTML==""){
        
        ecra.innerHTML = "-";
    }
    else{
        ecra.innerHTML += "";
    }

    calcular(ecra.innerHTML);

}


function limpar(){
    let ecra=document.getElementById("valor");
    let resultado=document.getElementById("resultado");

    ecra.innerHTML="";
    resultado.innerHTML="";
}


function calcular(valor){

    let resultado=document.getElementById("resultado");
    let temperatura=parseFloat(valor);
    
    
    if(!isNaN(temperatura)){
        let k=temperatura+273;
        let f=(temperatura*1.8)+32;
        resultado.innerHTML= temperatura + " ºC = " + f.toFixed(2) + " ºF<br><br>";
        resultado.innerHTML+= temperatura + " ºC = " + k.toFixed(2) + " ºK<br><br>";
    }
    else{
        resultado.innerHTML="";
    }
    
    
}


