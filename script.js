const numberDisplay = document.getElementById("numDisplay")
const allClearBtn = document.getElementById("allClearButton")
const deleteBtn = document.getElementById("deleteButton")
const equalsTo = document.getElementById("equalsTo")


const numericKeys = document.querySelectorAll(".numericKeys")
const operatorButtons = document.querySelectorAll(".operatorKeys")

// operator function
const divideBtn = document.getElementById("divide")






allClearBtn.addEventListener("click", clearBtn)
deleteBtn.addEventListener("click", removeBtn)


function clearBtn() {
    numberDisplay.innerText = '';
}


function removeBtn() {
    numberDisplay.innerText = numberDisplay.innerText.slice(0, -1);
    
}

numericKeys.forEach(function(button) {
  button.addEventListener("click", displayNums);
});


function displayNums(event) {
  if(numberDisplay.innerText.length < 10){
    numberDisplay.innerText += event.target.textContent
  }
  
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


