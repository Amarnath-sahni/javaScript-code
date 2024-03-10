 const amarfriends = ["suraj", "rahul","abhijeet", "aman", "subham","ranjan"];
console.log(amarfriends);
 console.log(amarfriends.pop());
 console.log(amarfriends.pop());
 console.log(amarfriends.pop());
 console.log(amarfriends.push("AK"));
 console.log(amarfriends.push("AS"));
console.log(amarfriends.shift());
 console.log(amarfriends.unshift("amar"));
 console.log(amarfriends);

 console.log(amarfriends.length-1);
console.log(amarfriends);
//const amarfriends = ["suraj", "rahul","abhijeet", "aman", "subham","ranjan"];

//after es6 we have for .. in and for ..of loop to
//const amarfriends = ["suraj", "rahul","abhijeet", "aman", "subham","ranjan"];
for(let elememt in amarfriends){
    console.log(elememt);
}
//const amarfriends = ["suraj", "rahul","abhijeet", "aman", "subham","ranjan"];
for(let elememt of amarfriends){
        console.log(elememt);
    }

//Array.Prototype.forEach()
//calls a function for each element in the array.
//const  amarfriends = ["suraj", "rahul","abhijeet", "aman", "subham","ranjan"];

amarfriends.forEach(function(element, index, array){
    console.log( element + " blongs to " + " index: "+ index  +" of array "+ array);
})
amarfriends.forEach((element, index, array)=>{
    console.log( element + " blongs to " + " index: "+ index  +" of array "+ array);
})

/*challenges of array
1.add dec at the end of an array?
2.what is the return value of splice method ? 
3.update march to march (update)?
4.delete june from an array*/
//const  amarfriends = ["junbary", "fabrary","march", "april", "mey","jun"];

const indexOfNo=amarfriends.indexOf('april');

 if(indexOfNo!==-1){
     let aM=amarfriends.splice(indexOfNo,1,"summer");
     console.log(amarfriends);
     console.log(aM);
  }else{
     console.log('element not fund');
 }
console.log(amarfriends);
//let aM=amarfriends.splice(indexOfNo,1,"march");
console.log(amarfriends);
let aM=amarfriends.splice(indexOfNo,1,);

console.log(amarfriends);
/*traversal of array 2.searching and filter of Array?=>how to short and compare of array how to insert ,add,replace and delete Elements in array{CRUD}
map(), reduce(), filter()  */
// let newArray=arr.map(callback(currentvalue[,index[,array]]))
// //...//return element for newArray, after executing sothing...}[this age]);
// returns A new array containing the results of calling a function on every element in this array

/*1. find the square root of each element in array? let arr=[25,36,49,64,81]; */
//let arr=[25,36,49,64,81];
// let squr=arr.map((element)=>{
//     return Math.sqrt(element);
// })
//let arr=[25,36,49,64,81];
//let squr=arr.map((element)=>Math.sqrt(element))
console.log(arr);
console.log(squr);

/*2.multiple each element by only those elements which greater than 10 */
// const array1=[1,4,6,19,25,36];
// let amar = array1.map((element,index,array)=>{ return element>9;
// })
// console.log(array1);
// console.log(amar);

// let array1=[1,4,6,19,25,36];
// let newArr = array1.map((element,index,array)=>{ 
//     return `index no=${index} and the value is ${element} belongs to ${array}`;
// })
// console.log(array1);
// console.log(newArr);

// //const array1=[1,4,6,19,25,36];
// let newArrfor = array1.forEach((element,index,array)=>{ 
//     return `index no=${index} and the value is ${element} belongs to ${array}`;
// })
// //console.log(array1);
// console.log(newArrfor);

// const array1=[1,4,6,19,25,36];
// let amar = array1.map((element,index,array)=>{ element>9;index,array
// })
// console.log(array1);
// console.log(amar);



//let arr=[25,36,49,68,81];
//let squr=arr.map((element)=>element*2).filter((element)=>element>130);
// let squr=arr.map((element)=>{return element*2>130});
//console.log(arr);
//console.log(squr);
/*reduced mathod 
flatten an array means to convert the 3d or 2d array into a single dimensional array 
the reduced method executes a reducer function (that you provide)
on each element of the array  resulting in single output value. 
the reducer function takes four arguments:*/ 
// Accumulator
// currentvalue,current index , source array
let arr=[25,36,49,64,81];
let squr=arr.reduce((Accumulator)=>Accumulator+=element);
console.log(arr);
console.log(squr);
