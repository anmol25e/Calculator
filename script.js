let inputValue = '';
let secondinputValue = '';
let operatorValue = '';





const numberDisplay = document.getElementById("numDisplay")
const allClearBtn = document.getElementById("allClearButton")
const deleteBtn = document.getElementById("deleteButton")
const equalsTo = document.getElementById("equalsTo")


const numericKeys = document.querySelectorAll(".numericKeys")
const operatorButtons = document.querySelectorAll(".operatorKeys")







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
          result = Number((num1 * num2).toFixed(2));
      } else if (operatorValue === "/") {
          result = num2 !== 0 ? Number((num1 / num2).toFixed(2)) : "Error";
      }

      numberDisplay.innerText = result;
  

    if(result !== "Error"){
      inputValue = result.toString();
    } else{
      inputValue = '';
    }

    secondinputValue = '';
    operatorValue = '';

  }
}

