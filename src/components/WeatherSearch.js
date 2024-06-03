import { Button, StyleSheet, View } from 'react-native';
import CustomTextInput from './CustomTextInput';
import { useState } from 'react';

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');

  return (
    <View>
      <CustomTextInput placeholder="Search the wheater of your city" numberOfLines={1} text={location} onChange={setLocation} />
      <View styles={styles.buttonWrapper}>
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

export default WeatherSearch;
