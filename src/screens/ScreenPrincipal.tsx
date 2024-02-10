import React from 'react'
import { StyleSheet, Text,  View } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { TouchableComponent } from '../components/TouchableComponent'
import { color } from 'react-native-elements/dist/helpers'
import { styles } from '../theme/themeApp';

interface ListaProps extends StackScreenProps<RootStackParamList,'ScreenPrincipal'>{};

export const ScreenPrincipal = ({navigation}:ListaProps) => {
  return (
    <View>
        <Text style={styles.textWelcome} >BIENVENIDO</Text>
      <TouchableComponent title="Imagen 1" onPress={() => navigation.navigate('Screen2')} />
      <TouchableComponent title="Imagen 2" onPress={() => navigation.navigate('Screen3')} />
      <TouchableComponent title=">=" onPress={() => navigation.navigate('Screen4')} />
      <TouchableComponent title="<=" onPress={() => navigation.navigate('Screen5')} />
      
    </View>
    
  )
}


