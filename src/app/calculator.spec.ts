import { Calculator } from './calculator';

describe('Test for Calculator', () => {

    describe('Test for multiply', () => {

        it("it should return nine", () =>{
            // Arrange
            let calculator = new Calculator();

            // Act
            let result = calculator.multiply(3,3);

            // Assert
            expect(result).toEqual(9);
        });

        it("it should return four", () =>{
            // Arrange
            let calculator = new Calculator();

            // Act
            let result = calculator.multiply(1,4);

            // Assert
            expect(result).toEqual(4);
        });
    });

    describe('Test for divide', () => {

        it("it should divide for a numner", () =>{
            // Arrange
            let calculator = new Calculator();
            // Act & Assert
            expect(calculator.divide(6,3)).toEqual(2);
            expect(calculator.divide(5,2)).toEqual(2.5);
        });

        it("it should divide for zero", () =>{
            // Arrange
            let calculator = new Calculator();
            // Act & Assert
            expect(calculator.divide(6,0)).toBeNull();
            expect(calculator.divide(5,0)).toBeNull();
            expect(calculator.divide(1212125,0)).toBeNull();
            expect(calculator.divide(10,0)).toBeNull();
        });
    });

    it("test of matchers", ()=>{
        let name = 'nicolas'
        let name2;
        expect(name).toBeDefined();
        expect(name2).toBeUndefined();
  
        expect(1+2 == 3).toBeTruthy();
        expect(1+1 == 3).toBeFalsy();
  
        expect(5).toBeLessThan(10);
        expect(20).toBeGreaterThan(10);
  
        expect('1234567').toMatch(/123/);
  
        expect(["apples", "oranges", "pears"]).toContain("oranges");
      });
});