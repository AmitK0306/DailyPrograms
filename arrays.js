

let eArray = [1,2,4,6,7];

eArray.push (5);
console.log(eArray);

//console.log(eArray[3]);
console.log("Pop value "+eArray.pop()); // LIFO principal
console.log(eArray);

console.log("Shifted value " + eArray.shift());  // will shift entire data to left
console.log(eArray);

console.log("Unshifted value "+eArray.unshift(25));
console.log(eArray);

console.log(" Splice method "+eArray.splice(2,1)) // will remove 1 element from index 2
console.log(eArray);

// one more array with different data types

let data = ["Test",5,8,{model : "temporary" }, function(){ console.log("Function inside an array")}]

console.log(data);




//calling the function which is at index 4
data[4](); 