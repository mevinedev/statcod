//closures
function makeMultiplier (multiplier){
    return (
        function (x){
            console.log("multiplier is: "+ multiplier);
            return multiplier * x;
        
        }
    );
}
var doubleAll = makeMultiplier (7);
//multiplier is 7

console.log(doubleAll(10));
