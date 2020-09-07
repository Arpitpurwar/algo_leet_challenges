
let tempString = 'javaarpittry';
let tempString2 = 'javascriptarpittest'; 







``



       // console.log(longest_common_starting_substring(['javaarpittry', 'javascriptarpittest'])); 


       function findCommonSubstring(str1,str2){
           let largeString,smallString,largerLength,smallerLength;

           if(str1.length > str2.length){
               largeString = str1;
               smallString = str2;
           }
           else{
            largeString = str2;
            smallString = str1;
           }

           largerLength = largeString.length;
           smallerLength = smallString.length;

           let matrix = Array.from({length : smallerLength +1},() => Array.from({length :  largerLength +1},()=>0) );
      
           let max = 0;
           let maxColumn = 0;
           for(let row = 1; row < matrix.length;row++){
               for(let column = 1; column < matrix[0].length;column++){
                    if(largeString[column-1] == smallString[row-1]){
                        matrix[row][column] = matrix[row-1][column-1]+1;
                        if(max < matrix[row][column]){
                            max = matrix[row][column];
                            maxColumn = column;
                        }
                    }
                    else{
                        matrix[row][column] = 0
                    }
                    

               }
           }

         // find out the latest common substring
        let commonLongestSubstring = [];
         for(let i = max; i>0;i--){
             commonLongestSubstring.push(largeString[maxColumn - i])
         }

         return commonLongestSubstring.join('');
                       
       };


       console.log(findCommonSubstring('javaarpittry', 'javascriptarpittest'))