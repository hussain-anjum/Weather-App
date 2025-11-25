const apiKey = "138d2b5787ac50a34456242045231530";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=bangladesh&units=metric";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
}
checkWeather();
