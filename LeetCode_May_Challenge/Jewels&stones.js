/**
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character
 *  in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
    The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
    so "a" is considered a different type of stone from "A".
 * 
 * Example : Input: J = "aA", S = "aAAbbbb" ---> Output: 3
 * Example : Input: J = "z", S = "ZZ" ---> Output: 0
 * 
 * Important Point : 
    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.

 */ 

var numJewelsInStones = function(J, S) {
    let output = 0;
    for(stone of S){
        
        output += J.indexOf(stone)>=0 ? 1 : 0;
        
    }
    
 return output;   
};