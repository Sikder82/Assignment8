//Create a function
function canPay(giveMoney, chipsPrice){

    if(giveMoney.length===0){
        return "You can't have any money";
    }else{
        let sum=0;
        for(const money of giveMoney){
            sum+=money;
        }
        if(sum>=chipsPrice){
            return true;
        }
        else{
            return false;
        }
    } 
}

const giveMoney =[1.5];
const chipsPrice= 10;

console.log(canPay(giveMoney, chipsPrice));