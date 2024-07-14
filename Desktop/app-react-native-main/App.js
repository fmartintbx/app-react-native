import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botton from './components/botton';

export default function App() {
  
  const [counter, setCounter] = useState(0);
  
  const toIncreaseCounter = () => { 
    const newValue = counter + 1;
    setCounter(newValue);
  }

 

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container2}> 
        <Text style={styles.textHelloWorld}> 
          Hello World! We created a counter 
        </Text>
        <Text style={styles.textCounter}> 
          {counter}
        </Text>
       <Botton onPress= {toIncreaseCounter} text= "ToIncrease"></Botton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textHelloWorld: { 
    fontSize: 20,
  },

  textCounter: { 
    fontSize: 50,
  },

  btnText: { 
    color: "#FFF",
  },

  btnAlert: { 
    backgroundColor: "#0000FF",
    color: "FFF",
    padding: 15,
    margin: 10,
    borderRadius: 10,
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

  textInput: { 
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
});

