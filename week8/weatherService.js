const axios = require('axios');

exports.getWeather = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) throw new Error('API key missing');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);
  return response.data;
};
