// get data from the user
function readData() {
  // H2: add an input and button and get data form input
  // execue this function when the button is pressed
  // red the data from the input
  let data = prompt("Enter disciplines and grades");
  return data;
}

// H3: draw diaglram of that funciton
// parses the data
//           "math: 9, english: 10"
//                    |
//                    V
function processData(data) {
  let values = data.split(",");

  let grades = [];
  for (let i = 0; i < values.length; i++) {
    let cells = values[i].split(":");

    let name = cells[0].trim();
    let grade = parseFloat(cells[1].trim());

    grades.push({ discipline: name, mark: grade });
  }

  return grades;
}

// show data in console
function logData() {}
