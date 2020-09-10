document.addEventListener ("DOMContentLoaded", function(event) {
    /*Skapar varabler från olika element i DOM:en*/
    let btnCalc = document.getElementById("calc-btn1");
    let sumField = document.getElementById("player1sum");
    let bonusField = document.getElementById("player1bonus");
    /*Variabler från spelare etts fält*/
    let p1onesField = document.getElementById("player1ones");
    let p1twoesField = document.getElementById("player1twos");
    let p1threesField = document.getElementById("player1threes");
    let p1foursField = document.getElementById("player1fours"); 
    let p1fivesField = document.getElementById("player1fives");
    let p1sixesField = document.getElementById("player1sixes");
    
    /*
    Kanske även ändra player1one till p1onesField etc. för att få mer enhetlig
     benämning på variablerna.
    */

    btnCalc.addEventListener("click", function(event) {
        let sum = 0;
        let tmp = 0;

        tmp = p1onesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = p1twoesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = p1threesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = p1foursField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        tmp = p1fivesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }
        
        tmp = p1sixesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        sumField.innerHTML = sum;

        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.innerHTML = bonus;
    });
});
