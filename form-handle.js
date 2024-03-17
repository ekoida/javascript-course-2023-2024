const options = ["External Politics", "Economics", "IT", "Science", "Sport"];

const renderOptions = (options) => {
  let optionsDiv = document.getElementById("opitons");

  options.forEach((option) => {
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", `option_${option.toLowerCase().replace(" ", "_")}`);

    let text = document.createTextNode(option);

    let br = document.createElement("br");
    optionsDiv.appendChild(input);
    optionsDiv.appendChild(text);
    optionsDiv.appendChild(br);
  });
};

renderOptions(options);
