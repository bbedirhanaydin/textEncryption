import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BaseScreen from './src/pages/BaseScreen';
import ResultScreen from './src/pages/ResultScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Input',
            headerStyle: {
              backgroundColor: '#62CDFF',
            },
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
          name="BaseScreen"
          component={BaseScreen}
        />
        <Stack.Screen
          options={{
            title: 'Output',
            headerStyle: {
              backgroundColor: '#62CDFF',
            },
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
          name="ResultScreen"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
