import Dierentuin from "./dierentuin.js";

class hond extends Dierentuin {
    constructor(naam, leeftijd, kleur) {
        super(naam, 'hond', leeftijd);
        this.kleur = kleur;
    }

    hondgeluid() {
        console.log(`${this.naam} zegt woef`);
    }
}

const jemairo = new hond('jemairo', 1, 'bruin');
console.log(jemairo);
jemairo.maak_geluid();
jemairo.hondgeluid();