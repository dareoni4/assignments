function sum(x, y){   
try{
    if(isNaN(x)){
        throw "it is not a number"
    }else if(isNaN(y)){
        throw "y isnt a number"
    }
    
}
catch(x){
    errDisplay.textContent = err
}
 return x + y;
}

sum('9', 8)

  
    