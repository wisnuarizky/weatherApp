import { StyleSheet, View } from 'react-native';
import WeatherSearch from './src/components/WeatherSearch';
import WeatherInfo from './src/components/WeatherInfo';
import axios from 'axios';
import { API_KEY, BASE_URL } from './src/constan';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const App = () => {
  // Definisikan state "weatherData" dan "setWeatherData"
  const [weatherData, setWeatherData] = useState();
  const searchWeather = (location) => {
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      {/* Tampilkan data cuaca ketika ada weatherData */}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </View>
  );
};

export default App;
