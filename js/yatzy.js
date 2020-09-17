document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("change", function(event) {
        //Kod för att räkna ut summa från p1 fälten
        //denna kan förenklas senare
        let arr1 = document.getElementsByClassName('p1');
        let arr2 = Array.from(arr1);
        let arr3 = arr2.map((element, index, array) => 
        { return parseInt(element.value) || 0});
        
        //Början på en funktion för att ta en array som med fem tal
        //och returnera sant om talen innehåller kåk.
        //Just nu tar den istället en array med sju tal där tal
        //index 1-6 är hur många av varje tärning som finns i "p1"
        //fälten.
        /* let p1dices = [0,0,0,0,0,0,0];
        let i = 1;
        for (let value of arr3) {
            if (value >= 1) p1dices[i] = (value)/(i);s
            i++;
        }
        let fullHouse = false;
        if (p1dices.includes(2) && p1dices.includes(3)) {
            fullHouse = 28;
        }
        fullHouse = true; */

        //Kod för att skriva ut summan av "p1" fälten
        let arrsum = arr3.reduce((a, b) => {
            return a+b;
        },0);
        document.getElementById("p1sum").innerHTML = arrsum;
        
        //Kod för att skriva ut 50 bonus poäng om summan av 
        //"p1" fälten är 63 eller mer
        let bonus = 0;
        if (arrsum >= 63) bonus = 50;        
        document.getElementById("player1bonus").innerHTML = bonus;        
    });


    //här börjar vi på tärning arry
  /*  let da1 = document.getElementsByClassName('dice');
    let da2 = Array.from(da1);
    console.log(da2);
    let da3 = da2.map((element, index, array) => 
    { return parseInt(element.value) || 0});*/


    //har slutar tärning array

    //Tärningarna:
    /* En funktion som slumpar fram ett tal mellan 1-6 */
    function randOneSix() {
        return Math.floor(Math.random() * 6) + 1;
    }
    //Antal kast funktion
    let throwsField = document.getElementById("throwsLeft")
    let throws = 3;

    let dice_array = [0,0,0,0,0];
    console.log("array innan slag"+dice_array);
    //Tärnings slag funktion
    document.getElementById("rollButton").
    addEventListener("click", function(e) {
        //Skapar en array med checkboxarna
        let check_arr = Array.from(document.getElementsByClassName('checkbox'));
        //Skapar en array med de ocheckade boxarnas index
        unchecked_arr = check_arr.filter(box => box.checked == false);
        let unchecked_arr2 = unchecked_arr.map(a => a.value);                     
        //funktion för ikryssade rutor
        //Kanske skulle kunna göra en "for let of" loop här under istället 
        for (let i = 0; i <= unchecked_arr2.length-1; i++) {
            let tmp = 0;
            tmp = randOneSix();
            document.getElementById("dice" + unchecked_arr2[i]).src =
             "images/" + tmp + ".png";

            dice_array[unchecked_arr2[i]-1] = tmp; 
        }

        console.log(dice_array);
        throws--;//antal kast minskas efter varje kast 
        throwsField.innerHTML = throws;

        if(throws == 0){//checkar ifall inga kast kvar
            //Nedan inaktiverar knappen när kast är slut
            document.getElementById("rollButton").disabled = true; 
        }
    })   
});