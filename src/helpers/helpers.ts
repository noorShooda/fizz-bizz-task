export const divisibleByThree = (value : number) => {
    if ((value % 3) === 0 ) {
        return true; 
    }
    return false;
}

export const divisibleByFive= (value : number) => {
    if ((value % 5) === 0 ) {
        return true; 
    }
    return false;
}

export const divisibleByFifteen = (value : number) => {
    if ((value % 15) === 0 ) {
        return true; 
    }
    return false;
}
export const convertToFizzBizz = (numberToCheck: number) : String => {
    if(divisibleByFifteen(numberToCheck)) {
       return("FizzBizz " + numberToCheck);
   } else if(divisibleByThree(numberToCheck)){
       return("Fizz " + numberToCheck);
   } else if(divisibleByFive(numberToCheck)){
       return("Bizz " + numberToCheck);
   }
   else{
       return(numberToCheck.toString());
   }
}