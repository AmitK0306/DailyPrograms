let marks = [23,65,96,54,25,96];

let add2 =0;
for (i=0; i<marks.length;i++){

    add2 +=  marks[i]
 
    console.log(add2);    
}

console.log(marks.includes(65));

let submarks = marks.slice(2,5);
console.log(submarks);


// reduce filter and map functions

totalMarks = marks.reduce((sum,mark)=>sum+mark,0);
console.log("total marks using reduce",totalMarks);
console.log("Original array",marks);
evenNos = marks.filter(no=>no%2==0);
console.log("filtered even nos are",evenNos);


console.log("multiplied by 4",marks.map(no12=>no12*4));
let temp1 = marks.filter(no=>no%2==0);
console.log(" All even nos ",temp1);

console.log  ("All even nos multiplied by", temp1.map(temp1=>temp1*2));

console.log  ("All even nos multiplied by", temp1.map(temp1=>temp1*2));

console.log("addition of all even nos",temp1.reduce((sum,mark)=>sum+mark,0));


let city = ['dehu','aalandi','nawadvip','pune']

console.log("Sorted name of cities are ",city.sort());
console.log("reverse order of cities is",city.reverse());


//for sorting numbers 

let marksSubject = [1,65,25,45,99,2,8,85];

let sortSubject = marksSubject.sort(function(a,b){
    return a-b;
});

console.log("Sorted numbers are",sortSubject);

//ES6

console.log("Sorted using Arrow symbol",marksSubject.sort((a,b)=>a>b));