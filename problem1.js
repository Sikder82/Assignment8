//Create Cube Number function
function cubeNumber(number){
    // Number velidation 
    if(isNaN(number)){
        return 'Please enter Numeric value.'
    }else{
        const result = Math.pow(number, 3);
        console.log("The Cube of ",number,' is : ');
        return result;
    }
}

//Get input
const number = 'a';

// Receive and Print Output
console.log(cubeNumber(number))