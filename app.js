document.getElementById('convertir').onclick = celsiusToFahrenheit;
document.getElementById('reset').onclick = resetAll;


function celsiusToFahrenheit(){
 let fahrenheit = document.getElementById('fahrenheit').value;
 let celcius = document.getElementById('celcius').value;
 
    
 if(isNaN(celcius) || isNaN(fahrenheit)){
    alert("Ingrese un valor valido");
    return
    }else if (fahrenheit === '') {
        fahrenheit += (parseFloat(celcius)* 1.8) +32;
    }else if(celcius === ''){
        celcius += (parseFloat(fahrenheit)-32)/1.8;
    }
    
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celcius").value = parseFloat(celcius).toFixed(1);

    return false;
}


function resetAll(){
    document.getElementById('celcius').value ="";
    document.getElementById('fahrenheit').value ="";
}