// Init storage
const storage = new Storage();

// Get Stored location Data
const weatherLocation = storage.getLocationData();

// Init weather Object
const weather  = new Weather (weatherLocation.city);

// Init UI
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const city = document.getElementById('city').value;

  // Change Location
  weather.changeLocation(city);

  // Set Location in Ls
  storage.setLocationData(city);

  // Get and Display weather
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});


function getWeather () {
weather.getWeather()
  .then((weather) => {
    ui.paint(weather);
  })
  .catch((error) => {
    console.log(error);
  });
}