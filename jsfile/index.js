// string  methods in js -----------------------------------------------------------------------------------------//

function myfunction() {
	document.getElementById("demo").innerHTML = "NHI KRNA THA";}

	let pitnu = "this ia s js code practice code file okkk as well as thik hai!!! ";
console.log(pitnu); // print string //
console.log(pitnu.length);  // provide length of aarey //
console.log(pitnu.toUpperCase());  // for uppercase alphabates // 
console.log(pitnu.toLowerCase());  // for lowercase alphabates //
console.log(pitnu.slice(20,30));  // gives somthings into string words by there position or oyherwise show (-)number //

// array method in js -----------------------------------------------------------------------------------------//

const fruits = ["orange","banana","mango","kiwi"]; // arrey //

const arr = new Array("orange","kiwi","banana","mango");
console.log(arr);  // nwew arrey  //

console.log(arr[0]);  // provide name by giving position of in aarey //

arr[0]="apple";
console.log(arr);  // replace by new element by giving position //

const marks = [30,39,49,58,47];
console.log(marks); // arrey //

let value = marks.indexOf(30);
console.log(value)  // peovide position by giving name or number of in arrey //

// array mutating or modifying //

marks.push(20);  // add new element in last  //
console.log(marks);  

marks.unshift(23);  // add new element in first   //
console.log(marks);

marks.pop();  // remove last element //
console.log(marks);

marks.shift();
console.log(marks);  // remove first element //

marks.splice(1,3);
console.log(marks);  // remove elements from giving one position to another // 

//marks.slice(49,58);
//console.log(marks);

// types conversion ---------------------------------------------------------------------------------------------//

let may = Number("383");
let my = 47;
console.log(may+my);

// if and else condition in arrey  ---------------------------------------------------------------------------//

const ag = 20;

if (ag == 20) {
	console.log('correct')
}
else{
       console.log("worge")     //   age if else condition   //
   }


   const age = 2;
   const doesdrive = true;

   if (doesdrive && age>18) {
   	console.log('you can drive')
   }
   else{
	console.log('you cannot drive')    // direving age if else condition  //
}

const result = (288/600)*100


if (result>34) {
	console.log('you are passed with '+result+"%")
}
else{
	console.log('you are failed with '+result+"%")   // % condition  //
}

// loops conditions in js  --------------------------------------------------------------------------------//

// for loop --------//

for (let i=0; i<5; i++) {
	console.log(i);
}

for (let w=20 ; w>=4; w--) {
	console.log(w,"ewiejwioeilhdil");
}

for (var r=1; r<20; r+=2) {
	console.log(r,"sahi hai");
}

for (let t=20; t>2; t-=4) {
	console.log(t,"kardiya");
}

//  forEach loop ------//

let ar = [3,2,4,5,6,22,71,70,7,];
ar.forEach(function(element,index,arrey){
	console.log(element,index,arrey);
});

//  while loop ------//

let j = 0;
while(j<=10){
	console.log(j,"dekhs");
	j+=2;
} 

// function in js  ---------------------------------------------------------------------------------------//

//let name = "rina";
function wish(name){
	return `happy birthday to you ${name} may god bless you`;
}
console.log(wish("rina"));  // birhtday wish ///

function myti(e){
	return(5-e)
}console.log(myti(8));  // - function //

function ty(w){
	return(5+w)
}console.log(ty(4));  // + function  //

// Arrow functions allow us to write shorter function syntax: //

var hello;
hello = val => 7 + val;   
console.log(hello(7));   // Arrow Function Without Parentheses: //

let hillo;
hillo = (vas) => {
	return vas + " Hello World!";
}
console.log(hillo("or "));  //  Arrow Function With Parameters: //

//  Set condition // 

const frts = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200]
	]);

//frts.add("kiwi",300);

//console.log(frts.size);
frts.delete("apples");
console.log(frts.size);
console.log(frts.has("apples"));
