describe('class Comptable', () => {
            let comptable;

            beforeEach(() => {
                comptable = new Comptable();
                let mockCalculette = {
                    calcul: (a, b, operateur) => {
                        return 4;
                    }
                };
                comptable.calculette = mockCalculette;
            });

            it('should return "en faillite"', () => {
                expect(comptable.getBenefices(100, 5, 100))
                    .toBe('en faillite');
            });

            it('should return 4', () => {
                expect(comptable.getBenefices(100, 3, 100))
                    .toBe(4);
            });