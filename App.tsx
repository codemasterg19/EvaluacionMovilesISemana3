import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ScreenPrincipal } from './src/screens/ScreenPrincipal';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  )
}


export default App;
