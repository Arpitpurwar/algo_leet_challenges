// // reverse each word in sentence
// let originalString = 'Welcome to this Javascript Guide!';
// // output - emocleW ot siht tpircsavaJ !ediuG

// let reverseFullSentence = originalString.split("").reverse().join("");
// let reverseEachWord = reverseFullSentence.split(" ").reverse().join(" ");

// //console.log(reverseFullSentence);
// //console.log(reverseEachWord);

// /// Write mul function to return below answer
// //console.log(mul(2)(3)(4)); // output : 24
// //console.log(mul(4)(3)(4)); // output : 48

// function mul(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }


// // check if object is an array or not
// let a = ['A',1,2];
// let b = {a:1,name:"Arpit"};

// if(Object.prototype.toString.call(a) === '[object Array]'){
//     console.log("Array !")
// }
// else{
//     console.log("Not Array")
// }

// // a closure to create a private counter
// function outerFunction(){
//     let counter = 0;
//     return {
//         add : function(increment) {counter += increment},
//         retrieve : function() {return 'Counter is ' + counter}
//     }
    
// }


// a = outerFunction();
// a.add(4);
// a.add(12);a.add(10);

// //console.log(a.retrieve());


// // do this

// function createBase(value){
//     return function(innervalue){
//         return value + innervalue;

//     }
// }


// var addSix = createBase(6);
// //console.log(addSix(10)); // returns 16
// //console.log(addSix(21)); // returns 27

// // FizzBuzz Challange
// //Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// // let n = 1;
// // while(n<=100){
// //   let f = n % 3 == 0,
// //       b = n%5 ==0;
// //         console.log(f ?  b ? 'fizzbuzz' : 'fizz' : b ? 'buzz' : n)
// //     n++;
// // }

// //Anagram
// // function isAnagram(firstWord,secondWord){
// //     let lowercaseFirstWord = firstWord.toLowerCase();
// //     let lowercaseSecondWord = secondWord.toLowerCase();

// //     let sortedFirstWord = lowercaseFirstWord.split('').sort().join('');
// //     let sortedSecondWord = lowercaseSecondWord.split('').sort().join('');

// //     return sortedFirstWord == sortedSecondWord
// // }


// // console.log(isAnagram('Mary','Army'));

// // let y = 1;
// // if(function f() {})
// // {
// //     y +=typeof f
// // }

// // console.log(function f() {});

// // Find missing number

// // function findMissingNumber (unSortedAry){
// //         let sortedArray = unSortedAry.sort((a,b) =>  a>b );

// //         for(let i = 0; i<sortedArray.length;i++){
// //             if(sortedArray[i] != i+1){
// //                 return i+1
// //             }
// //         }
// // }


// // console.log(findMissingNumber([2,3,4,5,6]))


// // function integerLength(num) {
// //     return (num === 0 ? 1 : Math.floor(Math.log10(num))+1);
// //   }


// //   console.log(integerLength(0))



 

//  // Problem
// //  var bunny = {
// //     name: 'Usagi',
// //     tasks: ['transform', 'eat cake', 'blow kisses'],
// //     showTasks: function() {
// //       this.tasks.forEach(function(task) {
// //         alert(this.name + " wants to " + task);
// //       });
// //     }
// //   };

//   // solution in ES 5
// //   var bunny = {
// //     name: 'Usagi',
// //     tasks: ['transform', 'eat cake', 'blow kisses'],
// //     showTasks: function() {
// //       this.tasks.forEach(function(task) {
// //         console.log(this.name + " wants to " + task);
// //       }.bind(this));
// //     }
// //   };


// // var bunny = {
// //     name: 'Usagi',
// //     tasks: ['transform', 'eat cake', 'blow kisses'],
// //     showTasks: function() {
// //         let that = this;
// //       this.tasks.forEach(function(task) {
// //         console.log(that.name + " wants to " + task);
// //       });
// //     }
// //   };

// // solution in ES6
// // var bunny = {
// //     name: 'Usagi',
// //     tasks: ['transform', 'eat cake', 'blow kisses'],
// //     showTasks() {
// //       this.tasks.forEach((task) => {
// //         console.log(this.name + " wants to " + task);
// //       });  
// //     }
// //   };

// //   bunny.showTasks()


// //    this.name = 5;

// //   function ES5(){
// //       console.log(this.name);
// //   }

// //   let ES6  = () => {
// //     console.log(this.name);
// // }

// // ES5.call(this);
// // ES6()
// // const profile = {
// //     name : 'Arpit',
// //     getName : () => {
// //         console.log(profile.name);
// //     }
// // }

// // profile.getName()


// // let ary = [1,2,2,3,4,4,4];


// // let mxn = Math.max(...ary);

// // let count = ary.reduce((accum,item)=>{
// //     if(item == mxn){
// //         accum = accum +1;
// //     }
// //     return accum
// // },0)

// // // another approach
// //  let filterary = ary.filter((v,i) => v == mxn ).length;

// //console.log(count);


// // for(let i = 1; i<= 100; i++){
// //     let f =  i % 3 == 0, b = i % 5 == 0;
     
// //     console.log( f ? ( b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i)

// // }


// // const matrix = [
// //     [2,3],
// //     [4,5]
// // ]

// // const rows = matrix.length;
// // const columns = matrix[0].length;

// // let sum = 0;

// // for(let i = 0; i<rows;i++){
// //     if(i ==  0  || i == rows - 1 ){
// //         for(let j=0; j<columns; j++){

// //             sum += matrix[i][j];
// //         }
// //     }
// //     else {
// //         sum = sum + matrix[i][0] + matrix[i][rows-1];
// //     }
    
// // }

// // console.log(sum);

// // let profile = {
// //     name : 'A',
// //     age : 51,
// //     kids : [{
// //         name : 'B',
// //         age : 13,
// //         kids : [{
// //             name : 'C',
// //             age : 3
// //         },{
// //             name : 'c',
// //             age : 2
// //         }
// //     ]
// //     },
// //     {
// //         name : 'B',
// //         age : 13,
// //         kids : [{
// //             name : 'C',
// //             age : 3
// //         },{
// //             name : 'c',
// //             age : 2
// //         }
// //     ]
// //     }
// // ]
// // };

// // let totalmemberage = 0;

// // function addMemberAge(profile){

// //     if(profile.hasOwnProperty('kids')){
// //         totalmemberage += profile.age;
// //         profile.kids.forEach(member => addMemberAge(member))
// //     }
// //     else{
// //         totalmemberage += profile.age;
// //     }
// //     return totalmemberage;

// // }

// // console.log(addMemberAge(profile));


// const Car = function(color){
//     this.color = color
// }

// const car1 = new Car('Red');
// console.dir(car1);


// const TTTT = {
//     name : 'Arpit',
//     callbackF : ()=>{
//         (function(){
//             console.log('this',this)
//         })()
      
//     }
// }



// console.log(TTTT.callbackF())

'use strict'


// function mainAdd(){
//     console.log('inside',this);
// }

// let obj = {
//     'name':"arpit"
// }
// mainAdd.call(obj);
// mainAdd.bind(obj)();

// for(var i=0;i<5;i++){

//     (function(i){setTimeout(function(){
//         console.log(i)
//     },0)})(i)
// }


setTimeout(function() {
	console.log(1)
	}, 0);

new Promise(function executor(resolve) {
	console.log(2);
	for( var i=0 ; i<10000 ; i++ ) {
		i == 9999 && resolve();
	}
	
	console.log(3);
	}).then(function() {
	console.log(4);
	});

	console.log(5);


