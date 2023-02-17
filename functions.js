



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