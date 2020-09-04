/**
 *  Let us consider we have an input string as 
 *  "arpit_purwar"
 * Convert it to Output string as "arpitPurwar"
 * 
 * Actually whereever we find '_' remove that and make next index as capital letter
 */

 function transformString(input){
    let underscoreIndex = input.indexOf('_');
    return input.slice(0,underscoreIndex) + input.charAt(underscoreIndex+1).toUpperCase() + input.slice(underscoreIndex+2,input.length);
 }


 console.log(transformString('arpit_purwar')) // arpitPurwar