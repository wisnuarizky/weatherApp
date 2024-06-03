import { StyleSheet, View } from 'react-native';
import WeatherSearch from './src/components/WeatherSearch';
import WeatherInfo from './src/components/WeatherInfo';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
    </View>
  );
}
