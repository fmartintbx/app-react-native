import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (

    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
    <View style={styles.container2} > 
      <Text>Bye World</Text>
      <TextInput style= {styles.textInput} placeholder = "prueba"/>
    </View>
    </>
  );

}

const styles = StyleSheet.create({
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
