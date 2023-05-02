var x;
console.log(x);

if (x==undefined){
    console.log("x is undefined");
}

x=5
if (x==undefined){
    console.log("x is undefined");
}
else{
    console.log("x has been defined");
}

var string="hello";
string += " world";
//string = string+"world"concatenated
console.log(string + "!");



var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}
//here hello will be printed twice

//Strict equality operator (===) differs from regular equality operator (==) in that it checks if both values on its right and left are of the same type first. 
//If they are not, it doesn't try to coerce them to be the same value and just returns false.
/*Since we are using an OR operator, the 'if' statement will stop evaluating conditions after it encounters the very first clause that evaluates to true.
null is false, so we continueconsole.log("Hello"), prints "Hello" to the console and returns nothing, so it's 'undefined' and 'undefined' is false, so we continue
x > 5 is true, so we execute the body of the 'if' statement and print another "Hello". 
So, the answer is that "Hello" will be printed to the console 2 times. */

/*Defining a variable as an Object Literal accomplishes pretty much the same thing as defining a variable equal to 'new Object()'. 
However, it's faster and easier to type up an object literal.*/

//functions in Javascript
function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(operation(10));
//the  output from the code above is 100.


var x = 5;
var y = x;
x = 10;
console.log(y);
//output is 5 because primitives are copied by value, so 'y' is not connected to 'x' in any way.
//Objects are passed by reference. Primitives  are passed by value.

function Devs(name) {
  this.name = name;
}

Devs.prototype.code = function () {
  console.log(this.name + " like coding!");
}

var max = new Devs("Developers", "We");
max.code();
//this ouputs the text "Developers like coding!"

var counter = 0;
var myArray = ["Hello", 2, {handle: "developer!"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);
//output is 3






















