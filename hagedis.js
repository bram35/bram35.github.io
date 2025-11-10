import Dierentuin from "./dierentuin.js";

class Hagedis extends Dierentuin {
    constructor(naam, leeftijd, kleur) {
        super(naam, 'hagedis', leeftijd);
        this.kleur = kleur;
    }

    hagedisgeluid() {
        console.log(`${this.naam} zegt ssssssssss`);
    }
}
const joop = new Hagedis('joop', 1, 'groen');
console.log(joop);
joop.maak_geluid();
joop.hagedisgeluid();

export default Hagedis;
