//Question 1
var variable = "StringValue";
console.log(variable);

//Question 2
var person = {
    personName: "Greg",
    personSurname: "Johnnson",
};

//Question 3

var outOfStock = true;
if (outOfStock === false){
    console.log ("In Stock");
}
    else {
        (outOfStock !== false)
        console.log ("Out of Stock");
    }

//Question 4

var numbersArray= [10 , 20 , 30 , 40 , 50];
for (var i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

//Question 5
var i = 15;
for(i; i<= 25; i++){
    console.log(i);
}

//Question 6
var i = 15;
for(i; i<=25; i++)
if (i === 20) {
    console.log(i);
}

//Question 7

var twoObject = [
{
    color: "white",
    nummer: 100,
    look: true,
},
{
    color: "green",
    nummer: 200,
    look: false,
},
];

for (var i = 0; i < twoObject.length; i++) {

 console.log(twoObject[i].nummer);
 console.log(twoObject[i].look);   
}
//Question 8

function whatDontLike (name) {

console.log ("I don't like" + " " + name); }

whatDontLike('WatchTV');


//Question 9

function digits(number1 , number2){
    console.log(number1 - number2);
}
digits(155,55);


//Question 10
var myArray = [];
function someThing(content) {
  myArray.push(content);
}

someThing("newItem");
console.log(myArray);