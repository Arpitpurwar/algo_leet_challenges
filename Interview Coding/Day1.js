/**
 *  Let's consider we have an input string as 
 *  "arpit_purwar"
 * Convert it to Output string as "arpitPurwar"
 * 
 * Actually whereever we find '_' remove that and make next index as capital letter
 */

 function transformString(input){
    let underscoreIndex = input.indexOf('_');
    return input.slice(0,underscoreIndex) + input.charAt(underscoreIndex+1).toUpperCase() + input.slice(underscoreIndex+2,input.length);
 }


 //console.log(transformString('arpit_purwar')) // arpitPurwar


 /**
  *  This question has been asked to me in two ways.
  * 
  *  Style 1 - Let's consider we have an array like [2,5,7,9] and target value as 14. Now find out the indexs of two elements in array
  *  when add them we should get target value like 5,9 => 5+9 = 14 .. so the output is [1,3]
  * 
  *  Style 2 -  Let's consider we have two array such as the first one is [1,2,3,4] ,the other one is [5,6,7,3] and target is 11.
  *  Now find out the indexs of element from each array when combined them should get the target .
  *  If we take 4 from first array and 7 from second array and add them we will get the target. 
  * 
  * I will here go with style -2
  */
  
  // O(m) time complexity and o(n) time space complexity where m is length if first array and n is length of second array

  let firstArray = [1,2,3,4];
  let secondArray = [5,6,7,3];
  let target = 11; 
  let tempObject = {};
  
  // create hash of second array element
function firstApproach(firstArray,secondArray,target){
  for (let elem in secondArray){
    tempObject[secondArray[elem]] = elem;
}
let str = '';
for(let i = 0; i< firstArray.length;i++){
  let remainingTarget = target - firstArray[i];
  if(tempObject[remainingTarget]){
      str = str + ` FirstArray element is ${firstArray[i]} and index ${i}, SecondArray element is ${remainingTarget} and index  ${tempObject[remainingTarget]}.`;
      break;
  }
}

return str;
}
//console.log(firstApproach(firstArray,secondArray,target))

 //o(nlogn) time
 // If both arrays are sorted

function secondApproach(firstArray,secondArray,target){
  for(let i =0; i<firstArray.length;i++){
    let searchTarget = target - firstArray[i];
    let searchResult = doBinarySearch(secondArray,searchTarget);   
    if(searchResult.success){
     return {searchResult,firstArrayIndex : i,firstArrayValue : firstArray[i]}
    }
  
  }  

}

function doBinarySearch(secondArray,searchedPart){
  let min = 0;
  let max = secondArray.length -1;
  let guess;

  while(min <= max){
    guess = Math.floor((min+max)/2);
    if(secondArray[guess] === searchedPart){
      return {
        success : true,
        secondArrayIndex : guess,
        secondArrayValue : secondArray[guess]
      }
    }
    else if(secondArray[guess] > searchedPart){
      max = guess -1
    }else{
      min = guess + 1
    }
  }
  return {
    sucess : false,
    secondArrayIndex : 'does not exist',
    secondArrayValue : 'searchedResult does not exist'
  }
}

console.log(secondApproach([1,2,3,4],[3,5,6,7],11))