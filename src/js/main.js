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

const accountBalance = document.querySelector("#account-balance");
const accountBalanceArea = document.querySelector("#account-balance-area");

const pin = 1111;

const updateBalance = function () {
  accountBalance.textContent = currentBalance;
};

let currentBalance = 8500;
accountBalance.textContent = currentBalance;

const handleAddMoney = function (e) {
  e.preventDefault();

  const amountValue = +inputAddAmount.value;
  const pinValue = +inputAddPin.value;

  // Safe guard
  if (!pinValue) return;

  if (pinValue === pin) {
    currentBalance += amountValue;
    updateBalance();
  } else {
    alert("Something went wrong!");
  }

  inputAddAmount.value = "";
  inputAddPin.value = "";
};

const handleCashOut = function (e) {
  e.preventDefault();

  inputCashOutAmount.focus();

  const cashOutValue = +inputCashOutAmount.value;
  const pinValue = +inputCashOutPin.value;

  if (!pinValue) return;

  if (pinValue === pin) {
    currentBalance -= cashOutValue;
    updateBalance();
  } else {
    alert("Something went wrong!");
  }

  inputCashOutAmount.value = "";
  inputCashOutPin.value = "";
};

btnAddMoney.addEventListener("click", handleAddMoney);
btnCashOut.addEventListener("click", handleCashOut);

const handlerAddMoneyForm = function () {
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");

  btnAddMoneyTop.classList.remove("btn-outline");
  btnCashOutTop.classList.add("btn-outline");
};

const handlerCashOutForm = function () {
  addMoneyForm.classList.add("hidden");
  cashOutForm.classList.remove("hidden");

  btnCashOutTop.classList.remove("btn-outline");
  btnAddMoneyTop.classList.add("btn-outline");
};

btnAddMoneyTop.addEventListener("click", handlerAddMoneyForm);
btnCashOutTop.addEventListener("click", handlerCashOutForm);
