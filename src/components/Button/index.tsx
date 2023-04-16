import React from 'react';
import {StyleSheet, Pressable, Text, Dimensions} from 'react-native';

const Button = ({onPress, content}: any) => {
  return (
    <Pressable testID="onpress-trigger" onPress={onPress} style={styles.button}>
      <Text testID="button-content" style={styles.text}>
        {content}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#009FBD',
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Button;
