const calendarHoliday = document.querySelector("#calendarHolydays");

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
  let date = new Date();

  date.setDate(date.getDate() + 12); // 2024-05-1

  let year = date.getFullYear();
  const dateISO = date.toISOString().split("T")[0];

  const calendar = await fetch(`${calendarHost}/${year}/${countryCode}`);
  const holydays = await calendar.json();

  let holiday = holydays.find((day) => day.date === dateISO);

  if (holiday) {
    let h3 = document.createElement("h3");
    h3.innerText = holiday.localName;

    calendarHoliday.append(h3);
  }
});

// hw 1 - reminder for tomorow
// hw 2 reminder for all week
