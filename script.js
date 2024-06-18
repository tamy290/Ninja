class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Soy el Ninja ${this.nombre}`)
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}`);
    }
    drinkSake() {
        this.salud += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


console.log(".........................");

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
  }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();