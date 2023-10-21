class Calculator {
  constructor() {
    this.inputField = document.querySelector(".input");
    this.buttons = document.querySelectorAll(".button");
    this.addEventListeners();
  }

  addEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.innerHTML;
        if (value === "C") {
          this.clearInput();
        } else if (value === "=") {
          this.calculate();
        } else {
          this.addToInput(value);
        }
      });
    });
  }

  addToInput(value) {
    this.inputField.value += value;
  }

  clearInput() {
    this.inputField.value = "";
  }

  calculate() {
    const input = this.inputField.value;
    this.inputField.value = eval(input);
  }
}

const calculator = new Calculator();

// Code Explanation
// The code creates a Calculator class that represents a calculator with various operations.
// The constructor initializes the inputField and the buttons, and calls the addEventListeners method.
// The addEventListeners method adds event listeners to each button, and calls the appropriate methods based on the button clicked.
// The addToInput method appends the clicked button value to the input field.
// The clearInput method clears the input field.
// The calculate method evaluates the expression in the input field and sets the result as the value of the input field.
