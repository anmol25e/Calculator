let inputValue = '';
let secondinputValue = '';
let operatorValue = '';
let hasError = false;






const numberDisplay = document.getElementById("numDisplay")
const allClearBtn = document.getElementById("allClearButton")
const deleteBtn = document.getElementById("deleteButton")
const equalsTo = document.getElementById("equalsTo")
const decimalPoint = document.getElementById("decimalPointKey")


const numericKeys = document.querySelectorAll(".numericKeys")
const operatorButtons = document.querySelectorAll(".operatorKeys")




allClearBtn.addEventListener("click", clearBtn)
deleteBtn.addEventListener("click", removeBtn)


decimalPoint.addEventListener("click", addDecimal)

function addDecimal() {
  if(!numberDisplay.innerText.includes(".")){
    numberDisplay.innerText += "."
  }
}

function clearBtn() {
  numberDisplay.innerText = '';
  inputValue = '';
  secondinputValue = '';
  operatorValue = '';
  hasError = false;

}


function removeBtn() {
  if(hasError) return;
  numberDisplay.innerText = numberDisplay.innerText.slice(0, -1);
    
}



numericKeys.forEach(function(button) {
  button.addEventListener("click", displayNums);
});


function displayNums(event) {
  if(hasError) return;

  if(numberDisplay.innerText.length < 10){
    numberDisplay.innerText += event.target.textContent;
    
    if (operatorValue == '') {
      inputValue = numberDisplay.innerText;
    } else {
      secondinputValue = numberDisplay.innerText;
    }

  }

}


operatorButtons.forEach(function(button){
  button.addEventListener("click", displayOperator)
});


function displayOperator(event){
  if(hasError) return;
  if (inputValue !== "" && operatorValue === ""){
    operatorValue = event.target.textContent;
    numberDisplay.innerText = '';
  }
}


equalsTo.addEventListener("click", output)


function output() {
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
      
      if (result === "Error") {
        numberDisplay.innerText = "Error";
        inputValue = "";
        hasError = true;
      } else {
        let displayResult;
        if (Number.isInteger(result)) {
          displayResult = result.toString();
        } else {
          displayResult = result.toFixed(2);
        }

        if (displayResult.length > 10) {
          displayResult = result.toExponential(2);
        }
  
        numberDisplay.innerText = displayResult;
        inputValue = result.toString(); 
        hasError = false;
      }
  
      secondinputValue = "";
      operatorValue = "";

  }
}

