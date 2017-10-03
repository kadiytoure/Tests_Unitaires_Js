class Comptable {
    constructor(calculette) {
        this.calculette = new Calculette();
    }

    getBenefices(recettes, salaire, tva) {
        let recetteTaxees = this.calculette(recettes, tva, '*')
        if (recetteTaxees > salaires) {
            return this.calculette.calcul(recetteTaxees, salaire, '-');
        }
        return 'en faillite';
    }


}