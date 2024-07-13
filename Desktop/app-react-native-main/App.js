import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [counter, setCounter] = useState(0)
  return (
    
    <>
    <StatusBar style="auto" />
    <View style={styles.container2} > 
      <Text>Hello World! We create a counter</Text>
      <TextInput style= {styles.textInput} placeholder = "prueba"/>
      <TouchableOpacity style={styles.btnAlert} onpress={() => {alert("tocado")}}> 
        <Text style={styles.btnText}>Alert </Text> 
       
      </TouchableOpacity>
    </View>
    </>
  );

}

const styles = StyleSheet.create({
  btnText:{ 
    color:"#FFF"

  },
  btnAlert:{ 
    backgroundColor:"#0000FF",
    color:"FFF",
    padding:15,
    margin: 10,
    borderRadius:10
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textInput:{ 
    borderColor:"#000",
    borderWidth: 1,
    padding:10,

   }

});
