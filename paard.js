import Dierentuin from "./dierentuin.js";
    
class Paard extends Dierentuin {
    constructor(naam, leeftijd, kleur) {
        super(naam, 'paard', leeftijd);
        this.kleur = kleur;
    }

    paardgeluid() {
        console.log(`${this.naam} zegt heuuughhh`);
    }
}

const rigiel = new Paard('rigiel', 2, 'wit');
console.log(rigiel);
rigiel.maak_geluid();
rigiel.paardgeluid();