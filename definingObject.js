

let objVerification ={
    name : "Computer",
    mob : "9028056123",
    secretCode : {
        address : "Kondhwa",
        zip : "411048",
    }
}

console.log(objVerification.secretCode.zip);

// to print the values of object one by one we use for in loop
for (let temp in objVerification.secretCode){

    console.log(temp, objVerification.secretCode[temp]);
}


// when we write function in object it is called as object
let house={
    rooms : "3",
    name : "Krishna Dham",
    windows : "12",

    cleaning : function(){

        console.log("Once in a week cleaning schedule");
    }

}

house.cleaning();