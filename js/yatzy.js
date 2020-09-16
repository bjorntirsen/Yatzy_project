document.addEventListener("DOMContentLoaded", function(event) {
    /*  Gammal kod att använda för att göra ny här nedan
        tmp = p1sixesField.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
            p1dices[6] = Number(p1sixesField.value) / 3;
        } */
        /*här skriver vi ut arrayen i consolen för att testa att den fungerar*/
    let throwsField = document.getElementById("throwsLeft")
    window.addEventListener("change", function(event) {
        /* let p1dices = []; */
        let active_players = 1;
        //Räkna ut summa från p1 fälten
        let arr1 = document.getElementsByClassName('p1');
        let arr2 = Array.from(arr1);
        let arr3 = arr2.map((element, index, array) => 
        { return parseInt(element.value) || 0});
        let arrsum = arr3.reduce((a, b) => {
            return a+b;
        },0);
        document.getElementById("p1sum").innerHTML = arrsum;
        //Returnerar bonus
        let bonus = 0;
        if (arrsum >= 63) {
            bonus = 50;
        }
        document.getElementById("player1bonus").innerHTML = bonus;
        //Returnerar fullHouse = true om man har kåk i fälten 1-6
        //Detta är inte så användbart för tillfället men kanske
        //längre fram
        let fullHouse = false;
        if (p1dices.includes(2) && p1dices.includes(3)) {
            fullHouse = 28;
        }
        fullHouse = true;
    });  
    //Tärningarna:
    /* En funktion som slumpar fram ett tal mellan 1-6 */
    function randOneSix() {
        return Math.floor(Math.random() * 6) + 1;
    }

    let throws = 3;// antal kast från början
    document.getElementById("rollButton").
    addEventListener("click", function(e) {

        //Skapar en array med checkboxarna
        let check_arr = Array.from(document.getElementsByClassName('checkbox'));
        console.log("check_arr: "+check_arr);
        //Skapar en array med de ocheckade boxarnas index
        unchecked_arr = check_arr.filter(box => box.checked == false);
        let unchecked_arr2 = unchecked_arr.map(a => a.value);
        console.log("unchecked_arr value: "+unchecked_arr2);
                
        //funktion för ikryssade rutor   
        for (let i = 0; i <= unchecked_arr2.length-1; i++) {
            let tmp = 0;
            tmp = randOneSix();
            document.getElementById("dice" + unchecked_arr2[i]).src =
             "images/" + tmp + ".png";
        }
        throws--;//antal kast minskas efter varje kast 
        throwsField.innerHTML = throws;

        if(throws == 0){//checkar ifall inga kast kvar
            //Nedan inaktiverar knappen när kast är slut
            document.getElementById("rollButton").disabled = true; 
        }
    })   
});