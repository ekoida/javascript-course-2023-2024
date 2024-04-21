const calendarHoliday = document.querySelector("#calendarHolydays");
const reminderContainer = document.querySelector(".reminder");
// 1
navigator.geolocation.getCurrentPosition(async (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const geolocationHost = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const calendarHost = "https://date.nager.at/api/v3/PublicHolidays";

  const result = await fetch(`${geolocationHost}?latitude=${lat}&longitude=${long}&localityLanguage=en`);

  if (!result.ok) {
    return Promise.reject("Bad response");
  }

  const response = await result.json();

  let countryCode = response.countryCode;

  // 2
  const numberOfDays = 7;
  let date = new Date();
  let period = [];
  for (i = 1; i <= numberOfDays; i++) {
    let calculatedDate = new Date("2024-04-30");
    const dayInTheFuture = new Date(calculatedDate.setDate(calculatedDate.getDate() + i)).toISOString().split("T")[0];
    period.push(dayInTheFuture);
  }
  console.log(period);
  date.setDate(date.getDate() + 9);

  let year = date.getFullYear();
  const dateISO = date.toISOString().split("T")[0];

  const calendar = await fetch(`${calendarHost}/${year}/${countryCode}`);
  const holydays = await calendar.json();

  let holiday = holydays.find((day) => day.date === dateISO);

  for (i = 0; i < holydays.length; i++) {
    const day = document.createElement("div");
    const dataHolyday = document.createElement("div");
    const nameHolyday = document.createElement("div");
    if (dateISO === holydays[i].date) {
      day.classList.add("celebrateDay");
    }

    period.forEach((day, index) => {
      if (index == 0 && day === holydays[i].date) {
        reminderContainer.innerText = `Tomorrow is ${holydays[i].name}\n`;
      }
      if (index !== 0 && day === holydays[i].date) {
        reminderContainer.innerText += `Soon is ${holydays[i].name}\n`;
      }
    });
    day.classList.add("dayHolyday");

    dataHolyday.innerText = holydays[i].date;
    nameHolyday.innerText = holydays[i].name;

    day.append(dataHolyday);
    day.append(nameHolyday);

    calendarHoliday.append(day);
  }

  if (holiday) {
    let h3 = document.createElement("h3");
    h3.innerText = holiday.localName;

    calendarHoliday.append(h3);
  }
});

// hw 1 - reminder for tomorow
// hw 2 reminder for all week
