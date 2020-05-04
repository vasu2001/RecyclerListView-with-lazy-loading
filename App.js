import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RecyclerScreen from './screens/RecyclerScreen';
import MainScreen from './screens/MainScreen';
import PickerScreen from './screens/PickerScreen';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Picker" component={PickerScreen} />

        <Stack.Screen name="Recycler" component={RecyclerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
