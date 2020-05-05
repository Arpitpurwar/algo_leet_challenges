const doBinarySearch = (numbersArray, target) => {
    let min = 0;
    let max = numbersArray.length -1;
    let guess;

    while(min <= max){
        guess = Math.floor((max+min)/2)
        if(numbersArray[guess] === target){
            return guess
        }
        else if(numbersArray[guess] < target){
            min = guess +1;
        }
        else{
            max = guess-1;
        }

    }
return 'Target number is not in this Array';
}

let numbersArray = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

console.log(doBinarySearch(numbersArray,10));