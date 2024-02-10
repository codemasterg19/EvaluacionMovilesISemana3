import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/themeApp';

import { RootStackParamList } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableComponent } from '../components/TouchableComponent';
import { InputComponent } from '../components/InputComponent';


interface ListaProps extends StackScreenProps<RootStackParamList,'Screen5'>{};

export const Screen5 = ({navigation}:ListaProps) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const compareNumbers = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      if (parsedNum1 < parsedNum2) {
        setResult(`${parsedNum1} es menor que ${parsedNum2}`);
      } else if (parsedNum2 < parsedNum1) {
        setResult(`${parsedNum2} es menor que  ${parsedNum1}`)
      }else if (parsedNum1 === parsedNum2) {
        setResult(`${parsedNum1} es igual a ${parsedNum2}`);
      } 
    } else {
      setResult('Ingresa números válidos');
    }
  };

  

  return (
    
    <View style={styles.container}>
      <Text style={styles.textWelcome}>MENOR O IGUAL</Text>

      
            <InputComponent placerholder='Número 1' name='numero1'  onChangeText={(text) => setNum1(text)}/>
            <InputComponent placerholder='Número 2' name ='numero2'  onChangeText={(text) => setNum2(text)}/>
           
          
      <View>
      <TouchableComponent title="Verificar" onPress={compareNumbers} />
      <Text  style={styles.resultText}>{result}</Text>
      <TouchableComponent title="Home" onPress={() => navigation.navigate('ScreenPrincipal')} />
      </View>


    </View>
    
    
  )
}
