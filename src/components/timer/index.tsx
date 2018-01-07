import React from 'react';
import { StyleSheet, View } from 'react-native';

import Countdown from '../countdown';

export default class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Countdown />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff"
  }
});
