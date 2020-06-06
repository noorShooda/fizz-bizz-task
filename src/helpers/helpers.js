export const divisibleByThree = (number) => {
    if ((numbre % 3) === 0 ) {
        return "Fizz"; 
    }
    return numbre;
}

export const divisibleByFive= (number) => {
    if ((numbre % 5) === 0 ) {
        return "Bizz"; 
    }
    return numbre;
}

export const divisibleByFifteen = (number) => {
    if ((numbre % 15) === 0 ) {
        return "FizzBizz"; 
    }
    return numbre;
}