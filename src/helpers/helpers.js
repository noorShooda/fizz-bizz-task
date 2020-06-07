const divisibleByThree = (number) => {
    if ((number % 3) === 0 ) {
        return true; 
    }
    return false;
}

const divisibleByFive= (number) => {
    if ((number % 5) === 0 ) {
        return true; 
    }
    return false;
}

const divisibleByFifteen = (number) => {
    if ((number % 15) === 0 ) {
        return true; 
    }
    return false;
}
export const verifyDivisibility = (number) => {
    if(divisibleByFifteen(number)) {
       return("FizzBizz"+" "+number);
   } else if(divisibleByThree(number)){
       return("Fizz"+" "+number);
   } else if(divisibleByFive(number)){
       return("Bizz"+" "+number);
   }
   else{
       return(number);
   }
}