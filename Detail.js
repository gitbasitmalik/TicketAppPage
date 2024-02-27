import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';


const Detail = () => {
  return (
    <View style={styles.detail}>
      <Text style = {styles.main}>MUHAMMAD FAROOQ MUHAMMAD MAROOF</Text> 
      <Text style = {styles.persondetail}>Prayer in the Noble Rawdah- Men </Text>
      <Text style = {styles.persondetail}>Reservation Number: 99899348 </Text>
      <Text style = {styles.persondetail}>Permit number: 1018603149 </Text>
      <View style = {styles.qr} >
      <QRCode value='https://www.nusuk.sa/?gclid=Cj0KCQiA5rGuBhCnARIsAN11vgQIalGpe780VnWCq1IGg4FkDMBo75fnglIhwLyd4FCbvVp__rWBrrkaAkjoEALw_wcB&gclsrc=aw.ds'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detail: {
      backgroundColor: '#ffffff',
    },
    main:{
        fontWeight : '700',
        top : 40,
        left: 20,
    },
    persondetail:{
        top: 50,
        left: 20,
        color : '#b39164',
        padding: 7,
    },
    qr:
    {
        left: 290,
        bottom: 40,
    }
  });

export default Detail

