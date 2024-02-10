import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/themeApp';

import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableComponent } from '../components/TouchableComponent';


interface ListaProps extends StackScreenProps<RootStackParamList,'Screen2'>{};

export const Screen2 = ({navigation}:ListaProps) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.textWelcome}>IMAGEN 1</Text>
      <Image source={{uri: 'https://wallpaperwaifu.com/wp-content/uploads/2020/12/storm-dragon-aurelion-sol-league-of-legends-thumb-1500x844.jpg'}}
      style={styles.image}
       />
      
      <TouchableComponent title="Home" onPress={() => navigation.navigate('ScreenPrincipal')} />


    </View>
    
    
  )
}
