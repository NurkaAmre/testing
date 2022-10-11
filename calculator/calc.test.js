const calculator = require('./calc');

describe('test PLUS', () => {
    test('1 + 2 = 3', () => {
        //Arrange
        const x = 1;
        const y = 2;
        const sum = 3;

        //Act
        const result = calculator.add(x, y);

        //Asserts 
        expect(result).toEqual(sum);
    });

    test('100 + 200 = 300', () => {
        //Arreange
        const x = 100;
        const y = 200;
        const sum = 300;

        //Act
        const result = calculator.add(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('999 + 1 = 1000', () => {
        //Arreange
        const x = 999;
        const y = 1;
        const sum = 1000;

        //Act
        const result = calculator.add(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });
});

describe('test MINUS', () => {
    test('99 - 98 = 1', () => {
        
        //Arrange
        const x = 99;
        const y = 98;
        const sum = 1;

        //Act
        const result = calculator.subtract(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('8 - 9 = -1', () => {
        
        //Arrange
        const x = 8;
        const y = 9;
        const sum = -1;

        //Act
        const result = calculator.subtract(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('10 - 2 = 8', () => {
        
        //Arrange
        const x = 10;
        const y = 2;
        const sum = 8;

        //Act
        const result = calculator.subtract(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });
});

describe('test *', () => {
    test('2 * 2 = 4', () => {
        
        // Arrange
        const x = 2;
        const y = 2;
        const sum = 4;

        //Act
        const result = calculator.multiply(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('5 * 6 = 30', () => {
        
        // Arrange
        const x = 5;
        const y = 6;
        const sum = 30;

        //Act
        const result = calculator.multiply(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('5 * 3 = 15', () => {
        
        // Arrange
        const x = 5;
        const y = 3;
        const sum = 15;

        //Act
        const result = calculator.multiply(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });
})

describe('test /', () => {
    test('6 / 2 = 3', () => {
        
        // Arrange
        const x = 6;
        const y = 2;
        const sum = 3;

        //Act
        const result = calculator.divide(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('5 / 2 = 2.5', () => {
        
        // Arrange
        const x = 5;
        const y = 2;
        const sum = 2.5;

        //Act
        const result = calculator.divide(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });

    test('15 / 15  = 1', () => {
        
        // Arrange
        const x = 15;
        const y = 15;
        const sum = 1;

        //Act
        const result = calculator.divide(x, y);

        //Asserts
        expect(result).toEqual(sum);
    });
});