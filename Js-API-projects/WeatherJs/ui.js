class UI {

  constructor () {
    this.location = document.getElementById('w-location');
    this.temp_min = document.getElementById('w-temp_min');
    this.temp_max = document.getElementById('w-temp_max');
    this.feelsLike = document.getElementById('w-feels-like');
    this.visibility = document.getElementById('w-visibility');
    this.wind = document.getElementById('w-wind');
    this.humidity = document.getElementById('w-humidity');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.temp_min.textContent = weather.temp_min;
    this.temp_max.textContent = weather.temp_max;
    this.feelsLike.textContent = `Feels Like : ${weather.main.feels_like}`;
    this.visibility.textContent = `Visibility : ${weather.visibility}`;
    this.wind.textContent = `wind-speed : ${weather.wind.speed}`;
    this.humidity.textContent = `humidity : ${weather.main.humidity}`
  }
}