import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amountOfKorons: '' }
  }

  render() {
    const exchangeRate = 0.166062265;
    let score = exchangeRate * this.state.amountOfKorons;
    let humanReadableScore = Math.floor(score * 100) / 100;

    return (
      <View style={styles.container}>
        <Text>Enter the number of Corons</Text>
        <TextInput
          ref={(el) => { this.formValue = el; }}
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(formValue) =>
            this.setState({
              amountOfKorons: formValue
            })
          }
        />
        <Text style={styles.output}>
          {humanReadableScore} pln
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100,
    padding: 15
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    alignSelf: 'stretch',
    paddingLeft: 15,
    marginTop: 10
  },
  output: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
