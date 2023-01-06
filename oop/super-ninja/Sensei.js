class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this._name = name;
        this._health = health;
        this._speed = speed;
        this._strength = strength;
    }

    sayName() {
        console.log(this._name);
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this._health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this._wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const sensei1 = new Sensei("Mikasa");
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();
