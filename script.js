let result = document.getElementById("result");

// Append numbers/operators
function displayNumber(num) {
  result.value += num;
}

// Clear all
function clearText() {
  result.value = "";
}

// Delete last digit
function lastDigit() {
  result.value = result.value.slice(0, -1);
}

// Evaluate expression
function calculation() {
  try {
    if (result.value !== "") {
      result.value = eval(result.value);
    }
  } catch {
    result.value = "Error";
  }
}
