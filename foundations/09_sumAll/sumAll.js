const sumAll = function(a, b) {
    let min=0, max=0, result=0; 

    if(a === b || a<0 || b<0 || typeof a !== "number"|| typeof b !== "number" || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"; 
    }else if(a>b){
        max=a; 
        min=b;
    }else{
        max=b; 
        min=a;
    }

    for(let i=min; i<=max; i++){
        result+=i; 
    }
    return result; 
};

// Do not edit below this line
module.exports = sumAll;
