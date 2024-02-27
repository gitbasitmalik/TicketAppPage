import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser, faClock , faCalendar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const PermitDetails = () => {
  return (
    <View style={styles.details}>
      <Text style={styles.label}>Permit Details</Text>
      <View style={styles.div}>
      <Text style={styles.text1}>Issued By</Text>
      <Text style={styles.text2}>MUHAMMAD FAROOQ MUHAMMAD MAROOF</Text>
      <View style={styles.image}>
      <FontAwesomeIcon icon={faCircleUser} size={20} />
      </View>
      <HorizontalLine />
      <View>
      <Text style={styles.text3}>Allowed to access Al Masjid al Nabiwi in</Text>
      <Text style={styles.text1}>Day</Text>
      <Text style={styles.text12}>Time(From-To)</Text> 
      <Text style={styles.text21}>15 Feb 2024</Text>
      <View style={styles.clock}>
      <FontAwesomeIcon icon={faClock} />
      </View>
      <Text style={styles.text22}>03:00-03:29</Text>
      <Text style={styles.text23}>5 Sha'ban 1445</Text>
      <View style={styles.calender}>
      <FontAwesomeIcon icon={faCalendar} />
      </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    backgroundColor: "#fafafa",
    padding: 15,

  },
  label: {
    fontSize: 15,

  },
  div:
  {
    backgroundColor: "#f3f3f3",
    top:20,
    
  },
  image:
  {
    left: 20,
    bottom:20,
  },
  text1:
  {
    color:'#707070',
    top:10,
    left: 50,
    fontSize: '10',
    padding: 2
  },
  text2:
  {
    top:10,
    left: 50,
    padding: 2
  },
  text3:
  {
    color:'#707070',
    top:5,
    left: 20,
    fontSize: '10',
    padding: 2
  },
  text12:
  {
    color:'#707070',
    left: 250,
    fontSize: '10',
    padding: 2,
    bottom: 5
  },
  text21:
  {
    left: 50,
    padding: 2
  },
  text22:
  {
    left: 250,
    padding: 2,
    bottom: 35
  },
  text23:
  {
    left: 50,
    bottom: 30,
    padding: 2
  },
  clock:
  {
    left: 220,
    bottom : 17,
  },
  calender:
  {
    left: 20,
    bottom:79,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#d5d5d5',
  },
});

export default PermitDetails;
