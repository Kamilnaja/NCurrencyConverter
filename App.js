import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker
} from 'react-native';
import { styles } from './style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyToConvert: '',
      currencyTarget: ''
    }
  }

  render() {
    const exchangeRate = 0.166062265;
    let score = exchangeRate * this.state.amountOfKorons;
    let humanReadableScore = Math.floor(score * 100) / 100;

    return (

      <View style={styles.container}>
        <Text style={styles.label}>
          Z waluty
          </Text>
        <Picker
          selectedValue={this.state.currencyToConvert}
          onValueChange={(itemValue, indexItem) => this.setState({ currencyToConvert: itemValue })}
          style={styles.selectInput}
        >
          <Picker.Item label="Korona czeska" value="CZK" />
          <Picker.Item label="Polski złoty" value="PLN" />
        </Picker>
        <Text style={styles.label}>
          Na walutę
          </Text>
        <Picker
          selectedValue={this.state.currencyTarget}
          onValueChange={(itemValue, indexItem) => this.setState({ currencyTarget: itemValue })}
          style={styles.selectInput}
        >
          <Picker.Item label="Korona czeska" value="CZK" />
          <Picker.Item label="Polski złoty" value="PLN" />
        </Picker>
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

