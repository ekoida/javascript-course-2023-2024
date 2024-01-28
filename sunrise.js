function adjustSun() {
  let hour = +inputHour.value;
  console.log(hour);

  const K = 100 / 12;

  const KC = 255 / 12;

  if (hour >= 6 && hour <= 18) {
    let left = K * (hour - 6);

    sun.style.left = `${left}%`;

    if (hour <= 12) {
      const numberOfSteps = hour - 6;

      let bottom = 20 * numberOfSteps;
      sun.style.bottom = `${bottom}px`;

      let c_red = 100 + 3 * KC * numberOfSteps;
      let c_green = 50 + 3 * KC * numberOfSteps;

      let e_red = 50 + 2 * KC * numberOfSteps;
      let e_green = 20 + 2 * KC * numberOfSteps;

      let sky_top_blue = 70 + 2 * KC * numberOfSteps;
      let sky_top_green = KC * numberOfSteps;

      let sky_bottom_blue = 40 + 2 * KC * numberOfSteps;
      let sky_bottom_green = 100 + 2 * KC * numberOfSteps;

      sun.style.background = `radial-gradient(
          rgb(${c_red}, ${c_green}, 0),
          rgb(${e_red}, ${e_green}, 0)
          )`;

      sky.style.background = `linear-gradient(
        rgb(4, ${sky_top_green}, ${sky_top_blue}),
        rgb(161, ${sky_bottom_green}, ${sky_bottom_blue})
        )`;
    } else {
      const numberOfSteps = 18 - hour;

      let bottom = 20 * numberOfSteps;

      sun.style.bottom = `${bottom}px`;

      let c_red = 100 + 3 * KC * numberOfSteps;
      let c_green = 50 + 3 * KC * numberOfSteps;

      let e_red = 50 + 2 * KC * numberOfSteps;
      let e_green = 20 + 2 * KC * numberOfSteps;

      let sky_top_blue = 70 + 2 * KC * numberOfSteps;
      let sky_top_green = KC * numberOfSteps;

      let sky_bottom_blue = 40 + 2 * KC * numberOfSteps;
      let sky_bottom_green = 100 + 2 * KC * numberOfSteps;

      sun.style.background = `radial-gradient(
          rgb(${c_red}, ${c_green}, 0),
          rgb(${e_red}, ${e_green}, 0)
          )`;

      sky.style.background = `linear-gradient(
            rgb(4, ${sky_top_green}, ${sky_top_blue}),
            rgb(161, ${sky_bottom_green}, ${sky_bottom_blue})
            )`;
    }
  }
}
