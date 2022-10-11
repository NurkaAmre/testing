
const capitalStr = require('./capitalizeStr');

 describe('Capitalize first letters', () => {
    test('Lalala', () => {

        //Arrange
        const word = 'lalala';
        const capitalized = 'Lalala';

        //Act
        const result = capitalStr(word);

        //Assert
        expect(result).toEqual(capitalized);
    })
 })

