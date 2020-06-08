const divisibleByThree = (value : number) => {
    if ((value % 3) === 0 ) {
        return true; 
    }
    return false;
}

const divisibleByFive= (value : number) => {
    if ((value % 5) === 0 ) {
        return true; 
    }
    return false;
}

const divisibleByFifteen = (value : number) => {
    if ((value % 15) === 0 ) {
        return true; 
    }
    return false;
}
export const verifyDivisibility = (value : number) : String => {
    if(divisibleByFifteen(value)) {
       return("FizzBizz"+" "+value);
   } else if(divisibleByThree(value)){
       return("Fizz"+" "+value);
   } else if(divisibleByFive(value)){
       return("Bizz"+" "+value);
   }
   else{
       return(value.toString());
   }
}