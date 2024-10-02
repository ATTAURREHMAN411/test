var input = document.querySelector("#input")
var seles = document.querySelector("#seles")
var div = document.querySelector(".constraction")







function result(){
    if(seles.value == "Celsius "){
    div.innerHTML += `${input.value} Celsius equal to ${(input.value * 9/5) + 32} Fahrenheit ${input.value} </br>` 
    }
    else{
    div.innerHTML += `${input.value} Fahrenheit equal to ${(input.value - 32) * 5/9} Celsius ${input.value} </br>` 

    }
}







