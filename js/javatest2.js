/* calculateDiceValues() {
    this.dice.map(current_value => {
        this.dice_values[current_value.value]++;
    })
} */

/* class One_dice {
    constructor() {
        this.value = this.new_Value();
    }
    new_Value() {
        return Math.floor(Math.random() * 6) + 1;
    }    
}

class Dice_set {
    constructor(size = 5) {
        this.dice = [];
        this.dice_no = [0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < size; i++) {
            this.dice.push(new One_dice());
        }
        this.calculateDiceValues();
    }

    calculateDiceValues() {
        this.dice.map(current_value => {
            this.dice_no[current_value.value]++;
        })
    }

    calculateDiceSetSum() {
        return this.dice.reduce((previous_value, current_dice) => {
            return previous_value + current_dice.value;
        }, 0);
    }
    checkPair() {
        if (this.dice_no.includes(2) || this.dice_no.includes(3) || this.dice_no.includes(4) || this.dice_no.includes(5)) {
            for (let i = 6; i > 0; i--) {
                if (this.dice_no[i] = (2 || 3 || 4 || 5)) {
                    return i * 2;
                }
            }
        } else return false;
    }
}
for (let i = 0; i < 10; i++) {
    let dece = new Dice_set();
    console.log(dece);
    console.log(dece.dice.values());
    console.log("values "+dece.dice_no);
    console.log("summa "+dece.calculateDiceSetSum());
    console.log("pair "+dece.checkPair());
} */