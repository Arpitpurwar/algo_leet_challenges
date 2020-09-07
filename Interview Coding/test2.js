// 'use strict';

let bar = function(){

};

 //let bar = {};
// let bar = null;
//let bar = [];

console.log("type=>", typeof(bar));

if((bar !== null) && (bar.constructor === Object)){
    console.log("in");
}else{
    console.log("out");
}

(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));