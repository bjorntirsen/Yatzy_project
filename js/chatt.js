document.addEventListener("DOMContentLoaded", function(e) {
    let list = document.getElementById("ul_list");
    let btnSend = document.getElementById("btnSend");

    btnSend.addEventListener("click", function(e) {       
        let divRow = document.createElement("divChat");
        list.appendChild(divRow);
        
        let listRow = document.createElement("liChat");
        divRow.appendChild(listRow);
        
        let spanRow = document.createElement("spanChat")
        divRow.appendChild(spanRow);
        spanRow.innerHTML = "TA BORT";
        
        let input = document.getElementById("inputText");
        listRow.innerHTML = input.value;

        input.value = "";
        input.focus();
    });
    
    list.addEventListener("click", function(event) {
        if (event.target.tagName == "SPANCHAT") {
    	    event.target.parentNode.remove();
        }
    })
})