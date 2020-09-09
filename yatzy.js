Document.addEventListener ("DOMContentLoaded", function(event) {
    let btnCalc = document.getElementById("calc-btn");
    let sumField =document.getElementById("player1sum");
    let bonusField = document.getElementById("player1bonus");
    
    let player1one = document.getElementById("player1ones").value;
    let player1two = document.getElementById("player1twos").value;
    let player1three = document.getElementById("player1threes").value;
    let player1four = document.getElementById("player1fours").value; 
    let player1five = document.getElementById("player1fives").value;
    let player1six = document.getElementById("player1sixes").value;
    
    /*let player1sum = player1one + player1two + player1three + player1four + player1five + player1six;
    
    let player1bonus;
    let total;*/

    btnCalc.addEventListener("click", function(event) {
        let sum = 0;
        let tmp = 0;

        tmp = player1one.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = player1two.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = player1three.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = player1four.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = player1five.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }
        
        tmp = player1six.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        sumField.innerHTML = sum;

        let bonus = 0;
        if (sum >= 5) {
            bonus = 50;
        }
        bonusField.innerHTML = bonus;
    });
});
