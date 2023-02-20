



function maxValue( temp1,temp2){
if (temp1<temp2)
    console.log(`${temp2} is bigger number than ${temp1}`);
else    
    console.log(`${temp1} is bigger number than ${temp2}`);

}

maxValue(10,25);

function maxValue1( temp1,temp2){
    if (temp1<temp2){
        console.log(`${temp2} is bigger number than ${temp1}`);
        return(temp2);
    }
    else    {
        console.log(`${temp1} is bigger number than ${temp2}`);
        return(temp1);
    }
    }
    
    let temp3 = maxValue1(55,25);
    console.log(temp3);


// function expression : where there is no name to the function and is assigned directly to the variable
    let add = function(num1,num2){
        return(num1+num2);
    }

    let result1 = add(25,28);
    console.log ("addition is "+result1);


    var greet = "Morning";

    if (2==2){
      var greet = "Afternoon"
    }

    function wish()
    { 
        var greet = "evening";
        return greet;
    }

    console.log (greet);
    console.log("from function "+wish());




    let greet1 = "Morning";

    if (2==2){
      let greet1 = "Afternoon"
    }

    function wish()
    { 
        let greet1 = "evening";
        return greet1;
    }

    console.log (greet1);
    console.log("from function "+wish());


    let str ="    India is my country   "
    let str5 ="India is my country"
    console.log ("length of the string is "+str.length);
    let temp2 = str.slice(7,10);
    console.log(" After slice : "+temp2);


    let strArray = str5.split(" ");
    console.log("Split function "+ strArray);

    console.log("After trimming  ",str.trim());


    let gst = "23";
    let cp = "12";

    let temp4 = parseFloat(gst)+parseFloat(cp);
    console.log(temp4);
