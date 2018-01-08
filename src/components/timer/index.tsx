import React from 'react';
import { StyleSheet, View } from 'react-native';

import Countdown from '../countdown';

export default class Timer extends React.Component {

  countdownDone() {
    alert("beep!");
  }

  timeRemaining = 5;
  started = true;

  render() {
    return (
      <View style={styles.container}>
        <Countdown timeRemaining={this.timeRemaining} started={this.started} onDone={() => this.countdownDone()} />
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
