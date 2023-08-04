import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function App() {
  const [name, setName] = useState('Bruno'); // The variable start with name, and can change later using method setName
  const [person, setPerson] = useState({name: 'Mario', age: 40 }) // Object
  const clickHandler = () => {
    setName('Willian');
    setPerson({name: 'Luigi', age: 18});
  }
  
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button
        title='update state'
        onPress={clickHandler}
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
  buttonContainer: {
    marginTop: 20,
    
  },
 
}); 