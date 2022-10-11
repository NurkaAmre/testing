const reverseStr = require('./reverseStr');

test('Nurgul must return lugruN', () => {

    const word = 'Nurgul';
    const reversedType = 'lugruN';

    const reversed = reverseStr(word);

    expect(reversed).toBe(reversedType);
});

