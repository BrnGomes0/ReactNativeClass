import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  

  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        LOGIN
      </Text>
      <View>
        <TextInput style={styles.input}
        placeholder='Insert Username'
        />
        <TextInput style={styles.input}
        placeholder='Insert PIN'
        />
      </View>
      <View>
        <Button style
        title = 'OK'

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontWeight: 'bold',
    marginBottom: 16,
    fontSize: 30,
  },
  input: {
    marginTop: 20, 
  },
  button: {
    width: 40,
  }
  

  
}); 