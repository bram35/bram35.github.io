class Dier {
    constructor(naam, soort, leeftijd) {
        this.naam = naam;
        this.soort = soort;
        this.leeftijd = leeftijd;
    }

    maak_geluid() {
        console.log(`${this.naam} maakt een geluid.`);
    }
}
//paard
class Paard extends Dier {
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
//hagedis
class Hagedis extends Dier {
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
//hond
class hond extends Dier {
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
