const parseCSS = (cssString) => {
  // 'color: red; backgrownd-color: white;     '
  const temp_1 = cssString.trim().split(";");
  // ---> ['color: red', '    backgrownd-color: white', '']

  const temp_2 = temp_1.map((rule) => rule.trim());
  // ---> ['color: red', 'backgrownd-color: white', '']

  const temp_3 = temp_2.filter(Boolean);
  // ---> ['color: red', 'backgrownd-color: white']

  const temp_4 = temp_3.map((rule) =>
    rule.split(":").map((value) => value.trim())
  );
  /*
        [
          ['color', 'red'],
          ['backgrownd-color', 'white']
        ]
    */

  const temp_5 = temp_4.map((rule) => [
    rule[0]
      .split("-")
      .map((value, idx) =>
        idx === 0 ? value : value[0].toUpperCase() + value.substring(1)
      )
      .join(""),
    rule[1],
  ]);

  let temp_6 = {};

  // HW1* try to use reduce()
  temp_5.forEach((rule) => (temp_6[rule[0]] = rule[1]));

  // Use reduce to have the same result as with forEach
  const temp_7 = temp_5.reduce((acc, currentValue) => {
    acc[currentValue[0]] = currentValue[1];

    return acc;
  }, {});

  // use fromEntries to have the same result as with forEach and reduce
  const temp_8 = Object.fromEntries(temp_5);

  return {
    temp_6,
    temp_7,
    temp_8,
  };
};

console.log(
  parseCSS(
    "color: red;    background-color: white;     transform: rotate(20deg)"
  )
);
