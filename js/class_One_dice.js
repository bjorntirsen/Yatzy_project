class One_dice {
    constructor() {
        function randOneSix() {
            this.value = Math.floor(Math.random() * 6) + 1;
        }
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


    checkPair() {
        if (dice_no.includes(2) || dice_no.includes(3) || dice_no.includes(4) || dice_no.includes(5)) {

            for (let i = 6; i > 0; i--) {
                if (dice_no[i] = (2 || 3 || 4 || 5)) {
                    return i * 2;
                    break;
                }
            }
        } else return false;
    }

    checkTwoPairs() {
        if (dice_no.includes(3) || dice_no.includes(4) {
                return calculateDiceSetSum();
            } else return false;
        }


        checkThrees() {
            if (dice_no.includes(3) || dice_no.includes(4) || dice_no.includes(5)) {
                return calculateDiceSetSum();
            } else return false;
        }

        checkFourOfAKind() {
            if (dice_no.includes(4)) {
                return calculateDiceSetSum();
            } else return false;
        }

        checkFullHouse() {
            if (dice_no.includes(2) && dice_no.includes(3)) {
                return calculateDiceSetSum();
            } else return false;
        }

        calculateDiceValues() {
            this.dice.map(current_value => {
                this.dice_values[current_value.value]++;
            })
        }

        calculateDiceSetSum() {
            return this.reduce((previous_value, current_dice) => {
                return previous_value + current_dice;
            }, 0);
        }
    }

    let dece = new Dice_set();

    console.log(dece);

    console.log(dece.checkPair());
    console.log(dice.calculateDiceValues());
    console.log(dice.calculateDiceSetSum());

    console.log(dece.checkTwoPairs());