const number7 = document.getElementById("seven");
const number8 = document.getElementById("eight");
const numberDisplay = document.getElementById("numDisplay")
const allClearBtn = document.getElementById("allClearButton")
const deleteBtn = document.getElementById("deleteButton")
const equalsTo = document.getElementById("equalsTo")
const numricKeys = document.querySelectorAll(".numricKeys")
const operatorButtons = document.querySelectorAll(".operatorKeys")

// operator function
const divideBtn = document.getElementById("divide")




// let numDisplay = '';

number7.addEventListener("click", showSeven)
number8.addEventListener("click", showEight)
allClearBtn.addEventListener("click", clearBtn)
deleteBtn.addEventListener("click", removeBtn)
number7.a
// operator function
divideBtn.addEventListener("click", divide)

function clearBtn() {
    numberDisplay.innerText = '';
}


function removeBtn() {
    numberDisplay.innerText = numberDisplay.innerText.slice(0, -1);
    
}




let inputValue = '';
let secondinputValue = '';
let operatorValue = '';
let resultDisplayed = false;



equalsTo.addEventListener("click", output)



operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (inputValue !== "" && operatorValue === "") {
        operatorValue = btn.innerText;
      }
    });
  });





function output(){
    if (inputValue !== "" && operatorValue !== "" && secondinputValue !== "") {
        const num1 = Number(inputValue);
        const num2 = Number(secondinputValue);
        let result;

        if (operatorValue === "+") {
            result = num1 + num2;
          } else if (operatorValue === "-") {
            result = num1 - num2;
          } else if (operatorValue === "*") {
            result = num1 * num2;
          } else if (operatorValue === "/") {
            result = num2 !== 0 ? num1 / num2 : "Error";
        }


        result = numberDisplay.innerText

    

    }

}




function showSeven(){
    if (resultDisplayed) {
        inputValue = "";
        resultDisplayed = false;
    }

    if (numberDisplay.innerText.length < 11) {
        numberDisplay.innerText += "7";
      
        if (operatorValue === "") {
          inputValue = numberDisplay.innerText;
        } else {
          secondinputValue = numberDisplay.innerText;
        }
    }
      

}

function showEight(){
    if (resultDisplayed) {
        inputValue = "";
        resultDisplayed = false;
    }

    if (numberDisplay.innerText.length < 11) {
        numberDisplay.innerText += "8";
      
        if (operatorValue === "") {
          inputValue = numberDisplay.innerText;
        } else {
          secondinputValue = numberDisplay.innerText;
        }
    }
      
}