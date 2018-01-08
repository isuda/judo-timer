import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface CountdownProps {
  started: boolean;
  timeRemaining?: number;
  onDone: () => any;
}

export interface CountdownState {
  timeRemaining: number;
}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
  constructor(props: CountdownProps) {
    super(props);

    this.state = {
      timeRemaining: props.timeRemaining || 0
    };

    if (this.props.started) {
      this.startCountdown();
    }
  }

  componentWillUnmount() {
    this.stopCountdown();
  }

  timerId = null;

  componentWillReceiveProps(nextProps: CountdownProps) {
    if (nextProps.started) {
      this.startCountdown();
    }
  }

  startCountdown() {
    if (this.timerId === null && this.state.timeRemaining > 0) {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  }

  stopCountdown() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  getFormattedTime(time: number) {
    let seconds: any = Math.floor(this.state.timeRemaining % 60);
    let minutes: any = Math.floor(this.state.timeRemaining / 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  }

  tick() {
    this.setState({timeRemaining: Math.max(0, this.state.timeRemaining - 1)});
    if (this.state.timeRemaining === 0) {
      this.stopCountdown();
      this.props.onDone();
    }
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
