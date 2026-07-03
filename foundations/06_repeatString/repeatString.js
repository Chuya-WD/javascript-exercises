const repeatString = function(str, num) {
    if(num<0)
        return "ERROR"; 
    
    let cadena=""; 

    for(let i=0; i<num; i++){
        cadena+=str; 
    }
    return cadena; 
};

// Do not edit below this line
module.exports = repeatString;
