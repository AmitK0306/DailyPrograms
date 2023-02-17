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




