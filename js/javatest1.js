class One_dice {
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
        this.set_sum = 0;
        for (let i = 0; i < size; i++) {
            this.dice.push(new One_dice());
        }
        
        this.calculateDiceValues();
        console.log("innan fel: "+this.dice_no);
        this.set_sum = this.calculateDiceSetSum(this.dice);
    }

    calculateDiceValues() {
        this.dice.map(current_value => {
            this.dice_no[current_value.value]++;
        })
    }    

    calculateDiceSetSum(set) {
        return set.reduce((prev, current) => {
            return prev + current.value;
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

    checkTwoPairs() {
        if (this.dice_no.includes(3) || this.dice_no.includes(4)) {
            return this.set_sum;
            } 
        else return false;
    }

    checkThreeOfAKind() {
        if (this.dice_no.includes(3) || this.dice_no.includes(4) || this.dice_no.includes(5)) {
            return this.set_sum;
        } else return false;
    }

    checkFourOfAKind() {
        if (this.dice_no.includes(4)) {
            return this.set_sum;
        } else return false;
    }

    checkFullHouse() {
        if (this.dice_no.includes(2) && this.dice_no.includes(3)) {
            return this.set_sum;
        } else return false;
    }    
}
for (let i = 0; i < 10; i++) {
    let dece = new Dice_set();
    console.log(dece);
    console.log("values "+dece.dice_no);
    console.log("summa "+dece.set_sum);
    console.log("pair "+dece.checkPair());
    console.log("2pairs "+dece.checkTwoPairs());
    console.log("Threes "+dece.checkThreeOfAKind());
    console.log("FourOfAKind "+dece.checkFourOfAKind());
    console.log("fullhouse "+dece.checkFullHouse());
}
