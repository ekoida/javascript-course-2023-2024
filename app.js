function readData() {
  let data = discipline_grades.value;
  return data;
}

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

function logData() {
  let data = readData();
  let grades = processData(data);
  console.log(grades);
}
