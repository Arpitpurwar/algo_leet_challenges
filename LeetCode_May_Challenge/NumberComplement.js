/**
 * 
 * Given a positive integer, output its complement number. 
 * The complement strategy is to flip the bits of its binary representation.
 * 
 * The given integer is guaranteed to fit within the range of a 32-bit signed integer.
 * You could assume no leading zero bit in the integer’s binary representation.
 * Example : 
 * Input: 5 
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 
 Example :
 Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 
 
 */


var findComplement = function(num) {
    let binaryString = '';
    while(num >=1 ){
       if(num == 1 ){
           binaryString = 0 + binaryString;
           num = -1;
       }
        else{
            binaryString = Math.floor(num%2) == 0 ? 1+binaryString : 0+binaryString;
            num = num/2;
        }
    }  
    return  num == 0 ? 1 : parseInt(binaryString,2);
};