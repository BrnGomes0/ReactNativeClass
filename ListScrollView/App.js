import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Bruno', key: '1'},
    {name: 'Lindomar', key: '2'},
    {name: 'Luiz', key: '3'},
    {name: 'Beck', key: '4'},
    {name: 'Torres', key: '5'},
    {name: 'Alemão', key: '6'},
    {name: 'João', key: '7'},
    
  ])

  return (
    <View style={styles.container}>
      { people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>Name: {item.name} Key: {item.key}</Text>
          </View> 
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24, 
    padding: 30, 
    backgroundColor: 'pink',
    fontSize: 24,
  }
}); 