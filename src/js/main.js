"use strict";
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
// accountBalance.textContent = currentBalance;
() => {
  updateBalance(accountBalance);
};

const handleAddMoney = function (e) {
  e.preventDefault();

  //   const amountValue = +inputAddAmount.value;
  //   const pinValue = +inputAddPin.value;

  const amountValue = getInputFieldValue(inputAddAmount);
  const pinValue = getInputFieldValue(inputAddPin);

  console.log(amountValue, pinValue);

  // Safe guard
  if (!pinValue) return;

  if (pinValue === pin) {
    currentBalance += amountValue;
    updateBalance(accountBalance);

    handleTransaction("Add Amount", amountValue, currentBalance);
  } else {
    alert("Invalid Pin!");
  }

  // console.log(document.querySelector("#transaction-history table tbody"));

  clearInputField(inputAddAmount, inputAddPin);
  //   inputAddAmount.value = "";
  //   inputAddPin.value = "";
};

const handleCashOut = function (e) {
  e.preventDefault();

  inputCashOutAmount.focus();

  //   const cashOutValue = +inputCashOutAmount.value;
  //   const pinValue = +inputCashOutPin.value;

  const cashOutValue = getInputFieldValue(inputCashOutAmount);
  const pinValue = getInputFieldValue(inputCashOutPin);

  // Safe guard
  if (!pinValue) return;

  if (pinValue === pin) {
    if (cashOutValue <= currentBalance) {
      currentBalance -= cashOutValue;
      updateBalance(accountBalance);

      handleTransaction("Withdrawal Amount", cashOutValue, currentBalance);
    } else if (currentBalance === 0) {
      alert("Oops, you have 0 balance! Add new amount for cash out!");
    } else {
      alert("Cashout amount must be less than the account balance!");
    }
  } else {
    alert("Invalid Pin");
  }

  // Clear input field
  clearInputField(inputCashOutAmount, inputCashOutPin);
};

btnAddMoney.addEventListener("click", handleAddMoney);
btnCashOut.addEventListener("click", handleCashOut);

const handlerAddMoneyForm = function () {
  //   addMoneyForm.classList.remove("hidden");
  //   cashOutForm.classList.add("hidden");

  toggleForm(addMoneyForm, cashOutForm, transaction);

  //   btnAddMoneyTop.classList.remove("btn-outline");
  //   btnCashOutTop.classList.add("btn-outline");

  toggleButtonActive(btnAddMoneyTop, btnCashOutTop, btnTransactionTop);
};

const handlerCashOutForm = function () {
  //   addMoneyForm.classList.add("hidden");
  //   cashOutForm.classList.remove("hidden");
  toggleForm(cashOutForm, addMoneyForm, transaction);

  //   btnCashOutTop.classList.remove("btn-outline");
  //   btnAddMoneyTop.classList.add("btn-outline");
  toggleButtonActive(btnCashOutTop, btnAddMoneyTop, btnTransactionTop);
};

const handlerTransactions = function () {
  toggleForm(transaction, addMoneyForm, cashOutForm);

  toggleButtonActive(btnTransactionTop, btnAddMoneyTop, btnCashOutTop);
};

btnAddMoneyTop.addEventListener("click", handlerAddMoneyForm);
btnCashOutTop.addEventListener("click", handlerCashOutForm);
btnTransactionTop.addEventListener("click", handlerTransactions);
