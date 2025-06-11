let inputValue = ''; // to take the input
let secondinputValue = ''; // to take the input after the operator
let operatorValue = ''; // to take the operator value
let hasError = false; // to check the error if user divide a number by 0



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

// you can only add one "decimal" in a calculation
function addDecimal() {
  if(hasError) return;
  if(!numberDisplay.innerText.includes(".")){
    numberDisplay.innerText += "."
  }
}


// it clears the display
function clearBtn() {
  numberDisplay.innerText = '';
  inputValue = '';
  secondinputValue = '';
  operatorValue = '';
  hasError = false;

}

// it removes the digits, works like a backspace
function removeBtn() {
  if(hasError) return;
  numberDisplay.innerText = numberDisplay.innerText.slice(0, -1);
    
}


// forEach cause it selects all the values in a button
numericKeys.forEach(function(button) {
  button.addEventListener("click", displayNums);
});



// this function displays all the digits in the keypad by clicking on it
function displayNums(event) {
  if(hasError) return;

  // .length < 10 to prevent overwriting the display
  if(numberDisplay.innerText.length < 10){
    numberDisplay.innerText += event.target.textContent;
    
    // if operatorValue is nothing, it takes the value for inputvalue
    if (operatorValue == '') {
      inputValue = numberDisplay.innerText;
    } else {
      secondinputValue = numberDisplay.innerText; // if there is any value, it takes for secendinput
    }

  }

}


operatorButtons.forEach(function(button){
  button.addEventListener("click", displayOperator)
});


//it takes the value for operator but it doesnt show it on the display like the displayNums
function displayOperator(event){
  if(hasError) return;
  if (inputValue !== "" && operatorValue === ""){
    operatorValue = event.target.textContent;
    numberDisplay.innerText = '';
  }
}


equalsTo.addEventListener("click", output)

//this function takes all the 3 values and then calculate it and show it on a display
function output() {
  if (inputValue !== "" && operatorValue !== "" && secondinputValue !== "") {
      const num1 = Number(inputValue); //it converts the string to a number
      const num2 = Number(secondinputValue);
      let result;

      if (operatorValue === "+") {
        result = num1 + num2;
      } else if (operatorValue === "-") {
        result = num1 - num2;
      } else if (operatorValue === "*") {
        result = num1 * num2;
      } else if (operatorValue === "/") {
        result = num2 !== 0 ? num1 / num2 : "Error"; //throws an error if /0
      }
      
      if (result === "Error") {
        numberDisplay.innerText = "Error";
        inputValue = "";
        hasError = true; // if true you you cannot do any calculation,you've to press AC to continue
      } else {
        let displayResult;
        //if result is an integer, it converts it to string and store it in displayResult
        if (Number.isInteger(result)) {
          displayResult = result.toString();
        } else {
          displayResult = result.toFixed(2);// if not an integer, it rounds the decimal value by 2
        }

        if (displayResult.length > 10) { // if the character if more than 10, it converts it into an expo
          displayResult = result.toExponential(2);
        }
  
        numberDisplay.innerText = displayResult; // shows the result on the display
        inputValue = result.toString(); // toString if you wanna continue the calculation
        hasError = false;
      }
      // it clears the old value to continue to calculation
      secondinputValue = "";
      operatorValue = "";

  }
}

