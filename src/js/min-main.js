// Elements
const inputAddAmount = document.querySelector("#input-add-amount");
const inputAddPin = document.querySelector("#input-add-pin");
const btnAddMoney = document.querySelector("#btn-add-money");

const inputCashOutAmount = document.querySelector("#input-cashout-amount");
const inputCashOutPin = document.querySelector("#input-cashout-pin");
const btnCashOut = document.querySelector("#btn-cashout-money");

const btnAddMoneyTop = document.querySelector("#btn-add-money-top");
const btnCashOutTop = document.querySelector("#btn-cashout-top");

const addMoneyForm = document.querySelector("#add-money-form");
const cashOutForm = document.querySelector("#cashout-form");

const btnTransactionTop = document.querySelector("#btn-transaction-top");
const transaction = document.querySelector("#transaction-history");

const accountBalance = document.querySelector("#account-balance");
const accountBalanceArea = document.querySelector("#account-balance-area");

const pin = 1111;

let currentBalance = 8500;

() => {
  updateBalance(accountBalance);
};

const handleAddMoney = function (e) {
  e.preventDefault();

  const amountValue = getInputFieldValue(inputAddAmount);
  const pinValue = getInputFieldValue(inputAddPin);

  console.log(amountValue, pinValue);

  if (!pinValue) return;

  if (pinValue === pin) {
    currentBalance += amountValue;
    updateBalance(accountBalance);
  } else {
    alert("Something went wrong!");
  }

  clearInputField(inputAddAmount, inputAddPin);
};

const handleCashOut = function (e) {
  e.preventDefault();

  inputCashOutAmount.focus();

  const cashOutValue = getInputFieldValue(inputCashOutAmount);
  const pinValue = getInputFieldValue(inputCashOutPin);

  if (!pinValue) return;

  if (pinValue === pin) {
    currentBalance -= cashOutValue;
    updateBalance(accountBalance);
  } else {
    alert("Something went wrong!");
  }

  clearInputField(inputCashOutAmount, inputCashOutPin);
};

btnAddMoney.addEventListener("click", handleAddMoney);
btnCashOut.addEventListener("click", handleCashOut);

const handlerAddMoneyForm = function () {
  toggleForm(addMoneyForm, cashOutForm, transaction);
  toggleButtonActive(btnAddMoneyTop, btnCashOutTop, btnTransactionTop);
};

const handlerCashOutForm = function () {
  toggleForm(cashOutForm, addMoneyForm, transaction);
  toggleButtonActive(btnCashOutTop, btnAddMoneyTop, btnTransactionTop);
};

const handlerTransactions = function () {
  toggleForm(transaction, addMoneyForm, cashOutForm);
  toggleButtonActive(btnTransactionTop, btnAddMoneyTop, btnCashOutTop);
};

btnAddMoneyTop.addEventListener("click", handlerAddMoneyForm);
btnCashOutTop.addEventListener("click", handlerCashOutForm);
btnTransactionTop.addEventListener("click", handlerTransactions);
