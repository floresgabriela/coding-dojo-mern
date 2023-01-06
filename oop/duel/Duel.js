class Card {
    constructor(name, cost) {
        this._name = name;
        this._cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this._power = power;
        this._res = res;
    }
    
    attack(target) {
        if (target instanceof Unit) {
            target._res -= this._power;
            console.log(`${this._name} dealt ${this._power} damage to ${target._name}`);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this._stat = stat;
        this._magnitude = magnitude;

        let adjust ='';
        if (magnitude > 0) {
            adjust = 'raise';
        } else {
            adjust = 'lower';
        }

        this.text = `${adjust} the target's ${this._stat} by ${this._magnitude}`;
    }

    play(target) {
        if(target instanceof Unit) {
            if(this._stat === 'resilience'){
                target._res += this._magnitude;
            }
            else if (this._stat === 'power') {
                target._power += this._magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const player1 = new Unit("Red Belt Ninja", 3, 3, 4);
const hard = new Effect("Hard Algorithm", 2, 'resilience', +3);
console.log(player1._res);
hard.play(player1);
console.log(player1._res);


const player2 = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandled = new Effect("Unhandled Promise Rejection", 1, 'resilience', -2);
unhandled.play(player1);
console.log(player1._res);


const pair = new Effect("Pair Programming", 3, 'power', +3);
console.log(player1._power);
pair.play(player1);
console.log(player1._power);
player1.attack(player2);
console.log(player2._res);