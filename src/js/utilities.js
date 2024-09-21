/**
 * Comment shared function here
 */

// Create a reusable function to get the input field value
const getInputFieldValue = function (element) {
  //   console.log(element);
  return +element.value;
};

// Create a reusable function to clear the input fields
const clearInputField = function (inputEl1, inputEl2) {
  inputEl1.value = "";
  inputEl2.value = "";
  console.log(inputEl1, inputEl2);
};

// Create a function to update the current balance
const updateBalance = function (balance) {
  balance.textContent = currentBalance;
};

// Toggle top buttons (add money, cash out, transaction)
const toggleForm = function (elShow, elHide, elHide2) {
  elShow.classList.remove("hidden");
  elHide.classList.add("hidden");
  elHide2.classList.add("hidden");
};

const toggleButtonActive = function (btn1, btn2, btn3) {
  btn1.classList.remove("btn-outline");
  btn2.classList.add("btn-outline");
  btn3.classList.add("btn-outline");
};

const handleTransaction = function (transType, amountValue, remainingBalance) {
  const transaction = `
  <tr>
    <td>${transType}</td>
    <td>${transType === "Withdrawal Amount" ? -amountValue : +amountValue}</td>
    <td>$${remainingBalance}</td>
  </tr>
`;

  document
    .querySelector("#transaction-history table tbody")
    .insertAdjacentHTML("afterbegin", transaction);
};
