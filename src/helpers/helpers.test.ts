import { divisibleByThree, divisibleByFive, divisibleByFifteen, verifyDivisibility } from './helpers';

describe("helpersTest", () => {
    describe("divisibleByThree", () => {
        it("should return true if the number is divisible by three", () => {
            const numberToTest = 6;
            expect(divisibleByThree(numberToTest)).toBe(true);
        });
    
        it("should return false if the number is not divisible by three", () => {
            const numberToTest = 5;
            expect(divisibleByThree(numberToTest)).toBe(false);
        });
    });

    describe("divisibleByFive", () => {
        it("should return true if the number is divisible by Five", () => {
            const numberToTest = 10;
            expect(divisibleByFive(numberToTest)).toBe(true);
        });
    
        it("should return false if the number is not divisible by five", () => {
            const numberToTest = 11;
            expect(divisibleByFive(numberToTest)).toBe(false);
        });
    });

    describe("divisibleByFifteen", () => {
        it("should return true if the number is divisible by Fifteen", () => {
            const numberToTest = 30;
            expect(divisibleByFifteen(numberToTest)).toBe(true);
        });
    
        it("should return false if the number is not divisible by Fifteen", () => {
            const numberToTest = 31;
            expect(divisibleByFifteen(numberToTest)).toBe(false);
        });
    });

    describe("verifyDivisibility", () => {
        it("should return Fizz and the number if the number is divisible by three", () => {
            const numberToTest = 6;
            expect(verifyDivisibility(numberToTest)).toBe("Fizz 6");
        });
    
        it("should return Bizz and the number if the number is divisible by five", () => {
            const numberToTest = 10;
            expect(verifyDivisibility(numberToTest)).toBe("Bizz 10");
        });

        it("should return FizzBizz and the number if the number is divisible by three and five", () => {
            const numberToTest = 30;
            expect(verifyDivisibility(numberToTest)).toBe("FizzBizz 30");
        });

        it("should return the number if the number is not divisible niether by three and five", () => {
            const numberToTest = 17;
            expect(verifyDivisibility(numberToTest)).toBe("17");
        });
    });
    
});