import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface CountdownProps {
  onDone: () => any;
}

export interface CountdownState {
  timeRemaining: number;
}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
  constructor(props: CountdownProps) {
    super(props);

    this.state = {
      timeRemaining: 0
    };
  }

  getFormattedTime(time: number) {
    return "00:00";
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.getFormattedTime(this.state.timeRemaining)}</Text>
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
