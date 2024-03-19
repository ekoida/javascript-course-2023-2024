// const options переменная включает массив из опций string
const options = ["External Politics", "Economics", "IT", "Science", "Sport"];

// const init объявляет arrow функцию .
const init = () => {
  let btn = document.querySelector("#btn-subscribe"); // через переменную btn находим button#btn-subscribe

  console.log(btn); //проверка
  btn.setAttribute("disabled", true); //button#btn-subscribe присваиваем статус "disabled" и состояние true ?

  renderOptions(options); //вызываем функцию

  let agreeeCheckbox = document.querySelector('[name="terms"]'); // через переменную agreeeCheckbox находим элемент c атрибутом name="terms"

  agreeeCheckbox.onchange = agreementCheckboxHandler;
};

// const renderOptions объявляет arrow функцию  с параметром options
const renderOptions = (options) => {
  let optionsDiv = document.getElementById("options"); // через переменную optionsDiv находим элемент с #opitons

  options.forEach((option) => {
    //для каждого элемента опциии метод forEach применить arrow функцию
    let input = document.createElement("input");//созданный элемент input находим через переменную input
    input.setAttribute("type", "checkbox");// элементу input присваиваим  атрибут type и checkbox
    input.setAttribute("name", `option_${option.toLowerCase().replace(" ", "_")}`);//элементу input присваиваим атрибут name и формируем правильное написание наименования

    let text = document.createTextNode(option);//созданный TextNode находим через переменную text

    let br = document.createElement("br");//созданный br находим через переменную br
    optionsDiv.appendChild(input);// элементу с #opitons присоединяем детей input, text, br
    optionsDiv.appendChild(text);
    optionsDiv.appendChild(br);
  });
};

const agreementCheckboxHandler = () => {// const agreementCheckboxHandler объявляет arrow функцию
  let agreeeCheckbox = document.querySelector("[name='terms']");// через переменную agreeeCheckbox находим элемент c атрибутом name="terms"
  let btn = document.querySelector("#btn-subscribe");// через переменную btn находим button#btn-subscribe

  if (agreeeCheckbox.checked) {//if элемент, который мы нашли через переменную agreeeCheckbox в состоянии checked, то:
    btn.removeAttribute("disabled");//button -убираем атрибут "disabled"
    renderAgreementText("You've agreed to the terms and conditions");//выдать текст "You've agreed to the terms and conditions"
  } else {
    renderAgreementText("You must agree terms and conditions ");//иначе-выдать текст "You must agree terms and conditions "
    btn.setAttribute("disabled", true);//button#btn-subscribe присваиваем статус "disabled" и состояние true ?
  }
};

const renderAgreementText = (text) => {// const renderAgreementText объявляет arrow функцию
  let aggreeLabel = document.getElementById("terms");//элемент с #terms находим через переменную aggreeLabel
  let textNode = document.createTextNode(text);//созданный TextNode находим через переменную textNode

  aggreeLabel.removeChild(aggreeLabel.lastChild);//элементу с #terms (который находим через переменную aggreeLabel), удаляем последнее дитя
  aggreeLabel.appendChild(textNode);//элементу с #terms (который находим через переменную aggreeLabel), прибавляем дитя textNode
};
window.onload = init;
