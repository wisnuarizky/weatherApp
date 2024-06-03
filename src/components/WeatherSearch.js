import { Button, StyleSheet, View } from 'react-native';
import CustomTextInput from './CustomTextInput';

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

const WeatherSearch = () => {
  return (
    <View>
      <CustomTextInput placeholder="Search the wheater of your city" numberOfLines={1} />
      <View styles={styles.buttonWrapper}>
        <Button title="Search" onPress={() => {}} />
      </View>
    </View>
  );
};

export default WeatherSearch;
