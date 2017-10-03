describe('class Compteur', () => {
    let compteur;

    beforeEach(() => {
        compteur = new Compteur();
    });

    it('should be initialized to zero', () => {
        let compteur = new Compteur();
        expect(compteur.compte).toBe(0);
    });

    it('should increment counter', () => {
        compteur.incrementer();
        expect(compteur.compte).toBe(1);
    });

    it('should decrement counter', () => {
        let compteur = new Compteur();
        compteur.decrementer();
        expect(compteur.compte).toBe(-1);
    });

    it('should reset counter on reset', () => {
        compteur.incrementer();
        compteur.reset();
        expect(compteur.compte).toBe(0);
    });

    it('should keep incrementing', () => {
        compteur.incrementer();
        compteur.incrementer();
        expect(compteur.compte).toBe(2);
    });

});