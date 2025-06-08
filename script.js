const number7 = document.getElementById("seven");
const number8 = document.getElementById("eight");
const numberDisplay = document.getElementById("numDisplay")
const allClearBtn = document.getElementById("allClearButton")
const deleteBtn = document.getElementById("deleteButton")

let numDisplay = '';

number7.addEventListener("click", showSeven)
number8.addEventListener("click", showEight)
allClearBtn.addEventListener("click", clearBtn)
deleteBtn.addEventListener("click", removeBtn)

function clearBtn() {
    numberDisplay.innerText = '';
}


function removeBtn() {
    numberDisplay.innerText = numberDisplay.innerText.slice(0, -1);
    
}

function showSeven(){
    if(numberDisplay.innerText.length < 11){
        numberDisplay.innerText += "7"

    }

}

function showEight(){
    if(numberDisplay.innerText.length < 11){
        numberDisplay.innerText += "8"

    }

}


