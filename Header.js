import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
      <FontAwesomeIcon icon={faWheelchair} size={20} color='white' />
      </View>
      <Text style={styles.title}>{title}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fafafa',
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    bottom: 20,
  },
  icon:
  {
    top: 9,
    left: 15,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1c85e4",
    borderRadius: '50%'
  }
});

export default Header;
