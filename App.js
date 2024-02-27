import React from 'react';
import { View, StyleSheet} from 'react-native';
import Header from './Header';
import PermitDetails from './PermitDetails';
import Instructions from './Instructions';
import Detail from './Detail';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Praying in the Noble Rawdah- Men" />
      <Detail/>
      <PermitDetails />
      <Instructions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});

export default App;