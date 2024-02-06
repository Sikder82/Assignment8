////Create String Matching function
function matchFinder(string1 , string2){
    //String Validation 
    if(typeof string1 !=='string' && typeof string2 !=='string'){
        console.log('Please enter string.')
    }else{
        // String matching
        if(string1.includes(string2)){
            //return output
            return true;
        }else{
            //return output
            return false;
        } 
    }
}
// Get input
const string1='John Deo';
const string2= 'ohn';

// Call the funtion and get result
const result=matchFinder(string1, string2);

//Print the result
console.log(result)

