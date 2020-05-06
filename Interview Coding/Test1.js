let tempArray = [26,20,23]
let length = 3
let target = 2;


let sortedArray = tempArray.sort((a,b) => a-b);
let originalValue = 0;

for(let i = 0; i<sortedArray.length;i++){
    let count = target;
    for(let j=i;j<sortedArray.length;j++){
        if(sortedArray[j]>= sortedArray[i]){
            count --;
            if(count == 0 && sortedArray[i] > originalValue ){
                originalValue = sortedArray[i];
                j = sortedArray.length;
            }
           
        }
        
    }
}

console.log(originalValue);