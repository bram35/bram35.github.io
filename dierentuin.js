class Dierentuin {
    constructor(naam, soort, leeftijd) {
        this.naam = naam;
        this.soort = soort;
        this.leeftijd = leeftijd;
    }

    maak_geluid() {
        console.log(`${this.naam} maakt een geluid.`);
    }
}
export default Dierentuin;