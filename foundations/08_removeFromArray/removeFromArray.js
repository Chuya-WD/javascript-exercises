const removeFromArray = function(arr, ...numRm) {
    let result=[];
    for(let i=0; i<arr.length; i++){
        let val=false; 
        for(let j=0; j<numRm.length; j++){
            if(arr[i]===numRm[j]){
                val=true; 
                break; 
            }
        }
        if(val){
            continue;
        }else{
            result.push(arr[i]); 
        }
    }
    return result; 
};

// Do not edit below this line
module.exports = removeFromArray;
