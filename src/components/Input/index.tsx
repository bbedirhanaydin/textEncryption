import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

const Input = ({placeholder, onChangeText}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        testID="input-test"
        editable
        multiline
        style={styles.input_container}
        placeholder={placeholder}
        onChangeText={onChangeText}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input_container: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.4,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: '#bdbdbd',
    fontSize: 16,
    color: '#000000',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 3,
    alignSelf: 'center',
  },
});

export default Input;
