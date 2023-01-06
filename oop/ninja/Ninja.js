class Ninja {
    constructor(name) {
        this._name = name;
        this._health = 100;
        this._speed = 3;
        this._strength = 3;
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