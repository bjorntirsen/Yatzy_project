document.addEventListener("DOMContentLoaded", function(event) {
    //Funktioner som triggas vid ändring i fälten:
    window.addEventListener("change", function(event) {
        //Kod för att räkna ut summa från "p1" fälten
        //denna kod kan förenklas senare
        let arr1 = document.getElementsByClassName('p1');
        let arr2 = Array.from(arr1);
        let arr3 = arr2.map((element, index, array) => {
            return parseInt(element.value) || 0
        });
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

    //Tärningarna:
    // En funktion som slumpar fram ett tal mellan 1-6
    function randOneSix() {
        return Math.floor(Math.random() * 6) + 1;
    }
    //Antal kast funktion
    let throwsField = document.getElementById("throwsLeft")
    let throws = 3;
    //Array med värdet på de fem tärningarna
    let dice_array = [0, 0, 0, 0, 0];

    //Funktioner som triggas när man trycker på knappen:
    document.getElementById("rollButton").
    addEventListener("click", function(e) {
        //Skapar en array med checkboxarna
        let check_arr = Array.from(document.getElementsByClassName('checkbox'));
        //Skapar en array med de ocheckade boxarnas index
        unchecked_arr = check_arr.filter(box => box.checked == false);
        let unchecked_arr2 = unchecked_arr.map(a => a.value);
        //Loop för att "hålla" förkryssade tärningar
        //Kanske skulle kunna göra en "for of" loop här under istället 
        for (let i = 0; i <= unchecked_arr2.length - 1; i++) {
            let tmp = 0;
            tmp = randOneSix();
            document.getElementById("dice" + unchecked_arr2[i]).src =
                "images/" + tmp + ".png";
            dice_array[unchecked_arr2[i] - 1] = tmp;
        }
        //Array med antalet av varje tärning
        let dice_no = [0, 0, 0, 0, 0, 0, 0];
        dice_array.forEach((a) => dice_no[a]++);
        //Antal kast minskas efter varje kast 
        //throws=2; <- växla till denna för test
        throws--;
        throwsField.innerHTML = throws;
        //Inaktiverar slag knappen när kast är slut
        if (throws == 0) {
            document.getElementById("rollButton").disabled = true;
        }
        //Funktion för att gömma checkboxarna+test innan 1:a slag
        if (throws <= 2) {
            document.getElementById("check1").style.display = "flex";
            document.getElementById("check2").style.display = "flex";
            document.getElementById("check3").style.display = "flex";
            document.getElementById("check4").style.display = "flex";
            document.getElementById("check5").style.display = "flex";
            document.getElementById("explaination").style.display = "flex";
        }
        //Funktioner för att highlighta möjliga rutor
        //Par
        if (dice_no.includes(2) || dice_no.includes(3) || dice_no.includes(4) || dice_no.includes(5)) {
            document.getElementById("td-p1p").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p1p").style.backgroundColor = "silver";
        }
        //Två par 
        //(först filtrera ur 4or & 2or, sen kolla om summa är 4)
        let dice_no2 = dice_no.filter(numb => (numb === 2) || (numb === 4) == true);
        dice_no3 = dice_no2.reduce((a, b) => a + b, 0);
        if (dice_no3 === 4) {
            document.getElementById("td-p12p").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p12p").style.backgroundColor = "silver";
        }
        //Treta
        if (dice_no.includes(3) || dice_no.includes(4) || dice_no.includes(5)) {
            document.getElementById("td-p1t").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p1t").style.backgroundColor = "silver";
        }

        //Fyrtal
        if (dice_no.includes(4) || dice_no.includes(5)) {
            document.getElementById("td-p1f").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p1f").style.backgroundColor = "silver";
        }


        //Kåk
        if (dice_no.includes(2) && dice_no.includes(3)) {
            document.getElementById("td-p1fh").style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("td-p1fh").style.backgroundColor = "silver";
        }
    })
});