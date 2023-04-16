import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Button from '../../components/Button';

const ResultScreen = ({navigation, route}: any) => {
  const onPress = () => {
    navigation.goBack('BaseScreen');
  };

  const data = route.params.inputSecond;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.output_container}>
        <Text style={styles.text}>{data}</Text>
      </ScrollView>
      <Button content={'New Text'} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  output_container: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.4,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: '#bdbdbd',
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
});

export default ResultScreen;
