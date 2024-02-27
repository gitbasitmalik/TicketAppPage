import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Instructions = () => {
  return (
    <View style={styles.instructions}>
      <Text style={styles.text}>
       Instructions
      </Text>
      <View style={styles.container}>
      <Image source={require('./K4N65e01.png')} style={styles.image} />
      <Text style = {styles.mosqueDetail}>Instructions for Prophet's Mosque entry</Text>
      </View>
      <TouchableOpacity style = {styles.button} >
        <Text style={{color: 'white'}}>Issue Certificate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  instructions: {
    padding: 20,

  },
  text: {
    fontSize: 15,
  },
  container:
  {
    top: 20,
    padding : 20,
    backgroundColor: '#f3f3f3',
    padding : 40,
    height : 120,
    borderWidth: 1,
    borderColor: '#cacaca',
    borderRadius : 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  button:
  {
    backgroundColor : "#b39164",
    alignContent  : 'center',
    alignItems : 'center',
    textAlign : 'center',
    top : 100,
    height : 50,
    borderRadius : 10,
    justifyContent : "center"
  },
  image:
  {
    left : 100,
    bottom : 40,
    width: 80, 
    height: 70,
  },
  mosqueDetail:
  {
    bottom: 40,
    left : 20
  }
});

export default Instructions;
