const KEY = "1AZpFIkzXZZqbOXOdlut8YI5FbKMh9tG";
const endpoint = "https://api.currencybeacon.com/v1/latest";

let rates = {};

const inputAmount = document.querySelector(".inputAmount");
const fromCurrency = document.querySelector(".fromCurrency");
const toCurrency = document.querySelector(".toCurrency");
const outputAmount = document.querySelector(".outputAmount.alert");
const notification = document.querySelector(".notification.alert");

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const currentDate = date.getDate();

const localStorageKey = `${year}-${month}${currentDate}`;

// HW0: split into meaningfull separate functions
const createOptions = (code) => {
  let option = document.createElement("option");
  option.innerText = code;
  fromCurrency.append(option);

  option = document.createElement("option");
  option.innerText = code;
  toCurrency.append(option);
};

const processData = (response, base) => {
  let data = JSON.parse(response);

  rates = {
    MDL: data.rates.MDL,
    EUR: data.rates.EUR,
    USD: data.rates.USD,
  };

  fromCurrency.innerHTML = "<option value='0'>---select currency---</option>";
  toCurrency.innerHTML = "<option value='0'>---select currency---</option>";

  const currecyCodeArray = Object.keys(rates);
  currecyCodeArray.forEach(createOptions);
  fromCurrency.value = base;
};

const onload = (xhr, base) => {
  let response = xhr.responseText;
  processData(response, base);

  // HW8**: try to use localstorate as cache: after get currencies, save in localstorage
  // and base as key  :
  // 2024-09-04-USD
  localStorage.setItem(`${localStorageKey}-${base}`, response);
};

const getCurrencies = (base = "USD") => {
  // Before ajax request - check in localstorage
  if (localStorage.getItem(`${localStorageKey}-${base}`)) {
    processData(localStorage.getItem(`${localStorageKey}-${base}`), base);

    return;
  }
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${endpoint}?api_key=${KEY}&base=${base}`);
  xhr.send();
  xhr.onload = () => onload(xhr, base);
};

inputAmount.addEventListener("keyup", (event) => {
  // HW5: vaidate that the amount is a number
  // HW6: validate that the amout is a positive number
  if (isNaN(Number(event.target.value)) || Number(event.target.value) <= 0) {
    notification.classList.add("alert-danger");
    notification.classList.remove("hidden");
    notification.innerText = "Enter only positive numbers!!!";
    event.target.value = "";
    return;
  } else {
    outputAmount.classList.add("hidden");
  }
  // HW3: For situation when toCurrency wasn't selected but
  // the user inputs amount -> show message
  if (toCurrency.value === "0") {
    notification.innerText = "Select To Currency first!!!";
    notification.classList.remove("hidden", "alert-danger");
    notification.classList.add("alert-warning");
  }
  if (event.target.value === "") {
    notification.classList.add("hidden");
  }
  if (fromCurrency.value !== "0" && toCurrency.value !== "0") {
    let amont = parseInt(inputAmount.value);

    let resultAmount = amont * rates[toCurrency.value];

    // HW1: show  integer values only
    // OR
    // HW2: shoud number with 2 digints precision
    outputAmount.innerText = resultAmount.toFixed(2);
    outputAmount.classList.remove("hidden");
  }
});

fromCurrency.addEventListener("change", () => {
  notification.classList.add("hidden");
  outputAmount.classList.add("hidden");
  getCurrencies(fromCurrency.value);
});

toCurrency.addEventListener("change", () => {
  // HW4:  if user entered the ammout and then selected currency -> calculate
  // and show result
  if (fromCurrency.value !== "0" && toCurrency.value !== "0") {
    let amont = parseInt(inputAmount.value);

    let resultAmount = amont * rates[toCurrency.value];
    outputAmount.innerText = resultAmount.toFixed(2);
    notification.classList.add("hidden");
    outputAmount.classList.remove("hidden");
  }
});
getCurrencies();

// HW7*: try to use Bootstrap (from, inputs, alerts)
