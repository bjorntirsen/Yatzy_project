document.addEventListener ("DOMContentLoaded", function(event) {
    let btnCalc = document.getElementById("calc-btn");
    let sumField = document.getElementById("player1sum");
    let bonusField = document.getElementById("player1bonus");
    
    let player1one = document.getElementById("player1ones");
    let player1two = document.getElementById("player1twos");
    let player1three = document.getElementById("player1threes");
    let player1four = document.getElementById("player1fours"); 
    let player1five = document.getElementById("player1fives");
    let player1six = document.getElementById("player1sixes");
    
    /*Vi får senare redigera denna kod för att möjliggöra funktionalietet för 
    flera spelare: dvs. ändra sumField till p1sumField och bonusField till 
    p1bonusField etc.
    Kanske även ändra player1one till p1onesField etc. för att få mer enhetlig
     benämning på variablerna.
    */

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
