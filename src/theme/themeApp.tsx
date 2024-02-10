import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    textWelcome:{
        fontSize:20,
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center',
        margin: 40,
        
    },
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Cambia el color de fondo según tu preferencia
      },

    image: {
        width: 400,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,

        borderColor: 'white',
        shadowColor: '#2b53fa',
        shadowOffset: {
          width: 0,
          height: 8,
          
        },
        shadowOpacity: 8,
        shadowRadius: 4,    
      },

      button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        elevation: 5,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      inputText:{
        backgroundColor: 'white',
        paddingHorizontal:20,
        borderRadius:10,
        margin:7,
    },
    resultText: {
      margin: 20,
      fontSize: 18,
      elevation:5,
      backgroundColor:'white',
      padding:15,
      borderRadius:20,
    },

})