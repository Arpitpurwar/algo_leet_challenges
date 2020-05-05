// Given an arbitrary ransom note string and another string containing letters from all the magazines, 
// write a function that will return true if the ransom note can be constructed from the magazines ;
//  otherwise, it will return false.
// Each letter in the magazine string can only be used once in your ransom note. 
// You may assume that both strings contain only lowercase letters. 
// Example : 
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true



var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split("");
 

   for(let letter = 0; letter < ransomNote.length; letter++){
       let foundIndex = magazine.indexOf(ransomNote[letter]);
       if(foundIndex >= 0)
           {
              magazine[foundIndex] = '';
             
           }
       else{
         return false
       }
     
   }
   
   return true;
};