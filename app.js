const KEY = "1AZpFIkzXZZqbOXOdlut8YI5FbKMh9tG";
const endpoint = "https://api.currencybeacon.com/v1/latest";

let rates = {};

const fromCurrency = document.querySelector(".fromCurrency");
const toCurrency = document.querySelector(".toCurrency");
const inputAmount = document.querySelector(".inputAmount");
const outputAmount = document.querySelector(".outputAmount");

const getCurrencies = (base = "USD") => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${endpoint}?api_key=${KEY}&base=${base}`);

  xhr.onload = () => {
    let response = xhr.responseText;
    let data = JSON.parse(response);

    rates = {
      MDL: data.rates.MDL,
      EUR: data.rates.EUR,
      USD: data.rates.USD,
    };
    fromCurrency.innerHTML = "<option value='0'>---select currency---</option>";
    toCurrency.innerHTML = "<option value='0'>---select currency---</option>";
    Object.keys(rates).forEach((code) => {
      let option = document.createElement("option");
      option.innerText = code;
      fromCurrency.append(option);

      option = document.createElement("option");
      option.innerText = code;
      toCurrency.append(option);
    });

    fromCurrency.value = base;
  };
  xhr.send();
};

inputAmount.addEventListener("keyup", () => {
  if (fromCurrency.value !== "0" && toCurrency.value !== "0") {
    let amont = parseInt(inputAmount.value);

    let resultAmount = amont * rates[toCurrency.value];

    outputAmount.innerText = resultAmount;
    // HW0: split into meaningfull separate functions
    // HW1: show  integer values only
    // OR
    // HW2: shoud number with 2 digints precision
    // HW3: For situation when toCurrency wasn't selected but
    // the user inputs amount -> show message
    // HW4:  if user entered the ammout and then selected currency -> calculate
    // and show result
    // HW5: vaidate that the amount is a number
    // HW6: validate that the amout is a positive number
    // HW7*: try to use Bootstrap (from, inputs, alerts)
    // HW8**: try to use localstorate as cache: after get currencies, save in localstorage
    // and base as key  :
    // 2024-09-04-USD
    // Before ajax request - check in localstorage
  }
});

fromCurrency.addEventListener("change", () => {
  getCurrencies(fromCurrency.value);
});
