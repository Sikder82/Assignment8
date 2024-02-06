//Create Cube Number function
function cubeNumber(number){
    // Number velidation 
    if(isNaN(number)){
        return 'Please enter Numeric value.'
    }else{
        return result = Math.pow(number, 3);
    }
}

//Get input
const number = 4;

// Receive and Print Output
console.log("The Cube of ",number,' is',cubeNumber(number))