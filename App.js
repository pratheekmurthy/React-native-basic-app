import React,{useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [person,setPerson]= useState({ name:"pratheek",age :"25"})

  const updateHandler =()=>{
    setPerson({name :"pratham",age : "25"})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {person.name}</Text>
      <Text>And My Age is {person.age}</Text>
      <View >
        <Button title="Update" onPress={updateHandler}/>
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
 
});
