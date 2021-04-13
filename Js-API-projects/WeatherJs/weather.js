class Weather {
  constructor(city  ) {
      this.apiKey = 'b6d56895a871cd0ffe9419805c4b73fe';
      this.city = city;
      // this.state = state;
  }
  //Fetch weather from API
  async getWeather() {
      console.log(this.city)
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=b6d56895a871cd0ffe9419805c4b73fe`);
      const responseData = await response.json();

      return responseData;
  }

  // Change Location
  changeLocation(city) {
    this.city = city;
  }
}