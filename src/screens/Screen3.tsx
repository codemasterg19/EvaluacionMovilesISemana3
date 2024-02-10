import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/themeApp';

import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableComponent } from '../components/TouchableComponent';


interface ListaProps extends StackScreenProps<RootStackParamList,'Screen3'>{};

export const Screen3 = ({navigation}:ListaProps) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.textWelcome}>IMAGEN 2</Text>
      <Image source={{uri: 'https://tato.studio/wp-content/uploads/2023/03/Unreal-Engine_04.jpg'}}
      style={styles.image}
       />
      
      <TouchableComponent title="Home" onPress={() => navigation.navigate('ScreenPrincipal')} />


    </View>
    
    
  )
}
