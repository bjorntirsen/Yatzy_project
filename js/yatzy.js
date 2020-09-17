document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("change", function(event) {
        //Kod för att räkna ut summa från p1 fälten
        //denna kan förenklas senare
        let arr1 = document.getElementsByClassName('p1');
        let arr2 = Array.from(arr1);
        let arr3 = arr2.map((element, index, array) => { return parseInt(element.value) || 0 });

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
        }*/



        //Kod för att skriva ut summan av "p1" fälten
        let arrsum = arr3.reduce((a, b) => {
            return a + b;
        }, 0);
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

    let dice_array = [0, 0, 0, 0, 0];
    console.log("array innan slag" + dice_array);
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
        for (let i = 0; i <= unchecked_arr2.length - 1; i++) {
            let tmp = 0;
            tmp = randOneSix();
            document.getElementById("dice" + unchecked_arr2[i]).src =
                "images/" + tmp + ".png";

            dice_array[unchecked_arr2[i] - 1] = tmp;
        }
        //nya arrayen
        let dice_no = [0, 0, 0, 0, 0, 0, 0];
        dice_array.forEach((a) => dice_no[a]++);

        console.log("dice_array: " + dice_array);
        console.log("dice_no: " + dice_no);

        throws--; //antal kast minskas efter varje kast 
        throwsField.innerHTML = throws;

        if (throws == 0) { //checkar ifall inga kast kvar
            //Nedan inaktiverar knappen när kast är slut
            document.getElementById("rollButton").disabled = true;
        }
        //Funktion för att gömma checkboxarna innan 1:a slag
        if (throws <= 2) {
            console.log("test");
            /* for (let i = 1; i >= 5; i++) {
                document.getElementById("check"+(i)).style.display = "flex";
            } */
            document.getElementById("check1").style.display = "flex";
            document.getElementById("check2").style.display = "flex";
            document.getElementById("check3").style.display = "flex";
            document.getElementById("check4").style.display = "flex";
            document.getElementById("check5").style.display = "flex";
            /* let check_style = document.getElementsByClassName("checkbox")
            for (Each of check_style) this.style.display = "flex"; */
            document.getElementById("explaination").style.display = "flex";

        }
        //Pair
        if (dice_no.includes(2) || dice_no.includes(3) || dice_no.includes(4) || dice_no.includes(5)) {
            document.getElementById("td-p1p").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p1p").style.backgroundColor = "silver";
        }


        //Full house
        if (dice_no.includes(2) && dice_no.includes(3)) {
            document.getElementById("td-p1fh").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p1fh").style.backgroundColor = "silver";
        }
    })
});