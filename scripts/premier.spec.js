it('should be true', () => {
    expect(true).toBe(true);
});
describe('', ('function additionner', () => {
        it('should add 2 to 2', () => {
            let resultat = additionner(2, 2);
            expect(resultat).toBe(4);
        });

        //faire test avec nombres négatifs

        it('should add negatives numbers', () => {
            let resultat = additionner(-2, -2);
            expect(resultat).toBe(-4);
        });
    }))
    //faire test avec chaînes de caractère
    //it('should concatenate string params', () => {
    //expect(additionner('bloup', 2)).toBe('bloup2');
    //});

it('should throw error with string params', () => {
    expect(additionner.bind(null, 'bloup', 2))
        .toThrow(new Error('Expect numbers as parameters'));
});