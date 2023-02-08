let now = new Date();

let year = now.getFullYear();
let months = [
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
let month = months[now.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let date = now.getDate();
let time = now.getHours();
let minute = now.getMinutes();

let todaysDate = document.querySelector("#date");
todaysDate.innerHTML = `${day}, ${month} ${date}th, ${year}, ${time}:${minute}`;

function displayTemperature(response) {
  console.log(response.data);
  let temp = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  let tempElement = document.querySelector("#temperature");
  let descriptElement = document.querySelector("#description");
  let humidElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windspeed");
  let iconElement = document.querySelector("#icon");

  windElement.innerHTML = response.data.wind.speed;
  humidElement.innerHTML = response.data.main.humidity;
  tempElement.innerHTML = temp;
  console.log(response.data.name);
  cityElement.innerHTML = response.data.name;
  descriptElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
let city = "lisbon";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);
