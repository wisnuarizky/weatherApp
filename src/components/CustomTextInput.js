import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#DDDDDD',
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

const CustomTextInput = ({ text, onChange, multiline = false, placeholder, numberOfLines }) => {
  return (
    <View style={styles.container}>
      <TextInput multiline={multiline} numberOfLines={numberOfLines} placeholder={placeholder} onChangeText={onChange} defaultValue={text} style={styles.input} />
    </View>
  );
};

export default CustomTextInput;
