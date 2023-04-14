class Ninja {
    constructor(name, health, speed = 3, force = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.force = force;
    }
    sayName(){
        console.log(`Soy un Ninja y mi nombre es ${this.name}`);
    }
    showStats(){
        console.log(`Nombre: ${this.name}; Salud: ${this.health}; Velocidad: ${this.speed}; Fuerza: ${this.force}`);
    }
    drinkSake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Eren Yeager",20,3,3);
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();