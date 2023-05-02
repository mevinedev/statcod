var z = "Nice to meet you!";

/*declaration:
function a () {...}
var a = function (){...}

to define a function without 'var': use return
function compare (x,y){
    return x>y;
}

*/
x=20;
y=13;

function compare(x,y){
    return y>x;

}
/*
var a = compare(4,5);
compare (4, "a");
compare (); */

var message = "in global";
console.log("global:message ="+message);

var a = function (){
    var message = "inside a";
    console.log("a: message ="+message);
    b();
    function b(){
        console.log("b: message = "+ message);
    }
}
a();