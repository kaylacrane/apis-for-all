const weatherApi =
  "https://www.metaweather.com/api/location/search/?query=london";

function getWeather(searchValue) {
  return fetch(weatherApi).then((response) => console.log(response));
}

export default getWeather;
