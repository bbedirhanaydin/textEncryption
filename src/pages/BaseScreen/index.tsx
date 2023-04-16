import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

const BaseScreen = ({navigation}: any) => {
  const [info, setInfo] = useState('');

  function handleSubmit() {
    const input = info.split('.');
    const inputFirst = input.join('');
    const inputSecond = inputFirst.split(' ');

    inputSecond.forEach(myFunction);
    function myFunction(item, index, arr) {
      arr[index] =
        index % 2 === 1 ? item.split('').reverse().join('') : ' ' + item + ' ';
    }

    navigation.navigate('ResultScreen', {inputSecond});
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Input placeholder="Enter Text..." onChangeText={setInfo} />
          <Button content={'Encrypt'} onPress={handleSubmit} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BaseScreen;
