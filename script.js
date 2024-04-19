const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mil = document.getElementById("mil");

const month = document.getElementById("month");
const date = document.getElementById("date");
const year = document.getElementById("year");
const day = document.getElementById("day");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateClock() {
  const currentTime = new Date();
  hrs.textContent = String(currentTime.getHours()).padStart(2, "0");
  min.textContent = String(currentTime.getMinutes()).padStart(2, "0");
  sec.textContent = String(currentTime.getSeconds()).padStart(2, "0");
  mil.textContent = String(Math.floor(currentTime.getMilliseconds() / 100));

  month.textContent = monthNames[currentTime.getMonth()];
  date.textContent = String(currentTime.getDate()).padStart(2, "0");
  year.textContent = currentTime.getFullYear();
  day.textContent = dayNames[currentTime.getDay()];
}

setInterval(updateClock, 100);
