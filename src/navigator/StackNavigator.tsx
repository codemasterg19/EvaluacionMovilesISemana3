import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { ScreenPrincipal } from '../screens/ScreenPrincipal';
import { Screen2 } from '../screens/Screen2';
import { Screen4 } from '../screens/Screen4';
import { Screen5 } from '../screens/Screen5';
import { Screen3 } from '../screens/Screen3';


export type RootStackParamList={
    ScreenPrincipal:undefined,
    Screen2:undefined,
    Screen3:undefined,
    Screen4:undefined,
    Screen5:undefined,
    

}

const Stack = createStackNavigator<RootStackParamList>();




export const StackNavigator = () => {
  return (
    
    <Stack.Navigator  screenOptions={{
        cardStyle:{
            backgroundColor: '#f0f0f0'
        }
    }}>
        <Stack.Screen name="ScreenPrincipal"  options={{headerShown:false}} component={ScreenPrincipal} />
        <Stack.Screen name="Screen2" options={{headerShown:false}}  component={Screen2} />
        <Stack.Screen name="Screen3" options={{headerShown:false}}  component={Screen3} />
        <Stack.Screen name="Screen4" options={{headerShown:false}} component={Screen4} />
        <Stack.Screen name="Screen5" options={{headerShown:false}} component={Screen5} />
    </Stack.Navigator>
    
  )
}
