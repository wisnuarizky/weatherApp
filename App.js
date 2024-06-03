import { StyleSheet, View } from 'react-native';
import WeatherSearch from './src/components/WeatherSearch';
import WeatherInfo from './src/components/WeatherInfo';
import axios from 'axios';
import { API_KEY, BASE_URL } from './src/constan';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default function App() {
  const searchWeather = (location) => {
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((respon) => {
        const data = respon.data;
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo />
    </View>
  );
}
