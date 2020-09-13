document.addEventListener("DOMContentLoaded", function(event) {
    /*Skapar varabler från olika element i DOM:en*/
    let btnCalc = document.getElementById("calc-btn1");
    let sumField = document.getElementById("player1sum");
    let bonusField = document.getElementById("player1bonus");
    let p1fhField = document.getElementById("player1fh");
    /*Variabler från spelare etts fält*/
    let p1onesField = document.getElementById("player1ones");
    let p1twoesField = document.getElementById("player1twos");
    let p1threesField = document.getElementById("player1threes");
    let p1foursField = document.getElementById("player1fours");
    let p1fivesField = document.getElementById("player1fives");
    let p1sixesField = document.getElementById("player1sixes");

    let throwsField = document.getElementById("throwsLeft")
    /*Nedan kommer funktionalitet för att räkna ut summa och bonus*/
    /*btnCalc.addEventListener("click", function(event) {
        //Först skapar vi en array som innehåller spelarens alla tärningsslag
        let p1dices = [];
        //Tillfällig variabel och variabel för summa
        let sum = 0;
        let tmp = 0;*/

    window.addEventListener("change", function(event) {
        let p1dices = [];
        let sum = 0;
        let tmp = 0;


        /*Jag har byggt in skapandet av vår array med nummer-kontrollen nedan*/
        tmp = p1onesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[1] = Number(p1onesField.value);
        }
        tmp = p1twoesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[2] = Number(p1twoesField.value) / 2;
        }
        tmp = p1threesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[3] = Number(p1threesField.value) / 3;
        }
        tmp = p1foursField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[4] = Number(p1foursField.value) / 3;
        }
        tmp = p1fivesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[5] = Number(p1fivesField.value) / 3;
        }
        tmp = p1sixesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[6] = Number(p1sixesField.value) / 3;
        }
        /*här skriver vi ut arrayen i consolen för att testa att den fungerar*/
        console.log(p1dices);
        /*Arrayen är alltså skapad och kan användas för att kolla om vi fått
        kåk, triss etc*/
        /*Nedan skriver ut summan till sidan*/
        sumField.innerHTML = sum;
        /*Räknar ut och skriver ut ev. bonus till sidan*/
        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.innerHTML = bonus;
        /*Räknar ut och skriver ut ev. kåk till sidan*/


        let fullHouse = 0;
        if (p1dices.includes(2) && p1dices.includes(3)) {
            fullHouse = 28;
        }
        p1fhField.innerHTML = fullHouse;


        /*Här är Mickes kod:
        function countDice(dice) {
        let values = [];
    
        for (let i = 0; i <= 6; i++) {
            values[i] = 0;
        }
        // [0, 0, 0, 0, 0, 0, 0]
        // [0, 0, 0, 1, 0, 0, 0]
        // [0, 0, 0, 1, 1, 0, 0]
        // [0, 0, 0, 1, 1, 1, 0]
        // [0, 0, 0, 1, 1, 2, 0]
        // [0, 0, 0, 1, 1, 2, 1]
        for (let current_dice of dice) {
                values[current_dice]++;
        }
        
        console.log(values);
        }

        countDice([3, 4, 5, 5, 6]);*/
    });
    /*Här börjar B och S med koden för tärningarna*/
    /* En funktion som slumpar fram ett tal mellan 1-6 */
    function randOneSix() {
        return Math.floor(Math.random() * 6) + 1;
    }

    let throws = 3;// antal kast från början
    document.getElementById("rollButton").
    addEventListener("click", function(e) {
        let tmp = 0;      
        for (let i = 1; i <= 5; i++) {
            //console.log("hello" + i);
            tmp = randOneSix();
            //console.log(tmp);
            document.getElementById("dice" + i).src = "images/" + tmp + ".png";
            /* document.getElementById("myImg").src = "hackanm.gif"; */
        }
        throws--;//antal kast minskas efter varje kast 
        throwsField.innerHTML = throws;
        //console.log("Kvar: "+throws); 

        if(throws == 0){//checkar ifall inga kast kvar
            //console.log("slut");
            document.getElementById("rollButton").disabled = true;// inaktivera knappen 
        }
    })   
});