import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Bruno');
  const [age, setAge] = useState('18');

  
  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput 
      multiline // Add várias linhas diferentes dentro da entrada do TextInput
      style={styles.input}
      placeholder='e.g John Doe'
      onChangeText={(val) => setName(val)}/>
      <Text>Enter Age: </Text>
      <TextInput 
      keyboardType='numeric' // O usuário escreve em um teclado apenas de número
      style={styles.input}  
      placeholder='e.g 99 '
      onChangeText={(val) => setAge(val)}/>
      <Text>
        name: {name},
        age: {age}
      </Text>
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
  input: {
    borderWidth: 1, 
    borderColor: '#777',
    padding: 8, 
    margin: 10 
  }
}); 