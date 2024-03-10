/*string in javascript */
//A javascript string is zero or more charactors written inside quotes.
//javascript string are used for storing and manipulating text.
//you can use single or double quote.   from string literals , or objects, using the string () constructor.
let myname="amarnath";
let mychannel='tru information';
let ytname=new String("Amarnath");
console.log(mychannel.length);
console.log(ytname);

let Sentance="the capital of india is \"delh\" yes";
console.log(Sentance);

// let tSentance='the capital of india is "delh" yes';
// console.log(tSentance);

// let bSentance="the capital of india is 'delh' yes";
// console.log(tSentance);

// finding a string in a string
// string.prototype.indexOf(searchValue[,ffromindex])
// the index method returns the index of (the position of ) the first 
// occurrence of a specified text in a string 

// let tSentance='the capital of india is delhi yes';
// console.log(tSentance.indexOf("i",2));

// let tSentance='the capital of india is delhi yes';
// console.log(tSentance.lastIndexOf("t" ,4));

// searching for a string in a string.
// string.prototype.search(amar).
// the search() method search a string for specified value and return position of the match

// let tSentance='the capital of india is delhi yes';
// console.log(tSentance.search("india"));

// Extracting string parts
// 3 method Extracting string in javascript.
// 1=>slice(start,end); 2=>substring(start,end); 3=>(start,length);

// let tSentance='the capital of india is delhi yes';
// let getd=tSentance.slice(0,12);
// console.log(getd);

// let tSentance= "AI technology has the potential to impact various jobs and industries. Some of the factors that can lead to the transformation or displacement of certain jobs include";
//  let getd=tSentance.slice(0,100);
//  console.log(getd.length);
//  console.log(getd);


// let tSentance= "AI technology has the potential to impact various jobs and industries. Some of the factors that can lead to the transformation or displacement of certain jobs include";
//  let getd=tSentance.substring(0,100);
//  console.log(getd.length);
//  console.log(getd);
 

// let tSentance= "apple, mango, bananaa";
//  //let getd=tSentance.substr();
//  let res = tSentance.substr(-4);
//  //console.log(getd.length);
//  console.log(res);

//  //replacing String Content()
 //string.prototype .replace(searchFor, replaceWith)
 
//  let myBiodata = `I am amarnath sahni amarnath`;
//  let replaceData =myBiodata.replaceAll("amarnath", "Amarnath");
//  console.log(myBiodata);
//  console.log(replaceData);

 //extracting string characters
 //there 3 method extecting string Characters:
 //charAt(position)
 //charCodeAt(position)
 //Property access[]
 //let str="HELLO WORLD";
//  let newstr=str.charAt(0);
//  console.log(str);
 //console.log(newstr);
 //let newstr=str.charCodeAt(0);//the method returns A URF-16 cod //(an integer between 0 and 65535).
 //console.log(newstr);

 //challenge time 
 //return the Unicode of the last character in a string 
//  let str = "HELLO WORLD";
//  let no=str.length-1;
//  let unicode = str.charCodeAt(no);
//  console.log(unicode);

//  //property Access
 //ECMAScript 5 (2009) allow property access [] on strings
//  let str = "HELLO WORLD";
//  console.log(str[2]);
 
//usefull method
// let Fname="amarnath";
// let Lname="sahni";
// console.log(Fname.concat(Lname));
// console.log(Fname+" "+Lname);
// console.log(Fname.toUpperCase());
// console.log(Lname.toLowerCase());
// console.log(`${Fname} ${Lname}`);

// var str = "                             hello friends               ";
// console.log(str.trim());
// console.log(str);

//converting  a String to an Array 
// var txt="a, b,c d,e";
// console.log(txt.split(" , "));
// console.log(txt.split(" "));
// console.log(txt.split(" | "));

//date and time
// var atTime = new Date();
// console.log(atTime);
//to give your launguge
// console.log(atTime.toString());
// console.log(atTime.toTimeString());
// console.log(atTime.toLocaleString());
//millisecond
//var d= Date.now();
//console.log(Date.now());
//var d = new Date(2023, 8, 21,5,54,0);
// var d = new Date(1697869940013);
// var d = new Date(86400000*2);
// // var d = new Date("October 21,2021 11:50:00");
// console.log(d.toLocaleString());

// const cuuR= new Date();
// //console.log(cuuR.toString());
// console.log(cuuR.getMonth());

// console.log(cuuR.getDate());
// console.log(cuuR.getSeconds());
// console.log(cuuR.getHours());
// console.log(cuuR.getHours());
// console.log(cuuR.getFullYear());

const cuuR= new Date();
//console.log(cuuR.toString());
let t=cuuR.setMonth(10);
console.log(t); 

console.log(cuuR.setDate(21));
console.log(cuuR.setSeconds(40));
console.log(cuuR.setHours(12));

console.log(cuuR.setFullYear(2023));

 



