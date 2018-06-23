// @ts-check

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker
} from 'react-native';
import { styles } from './styles/style';
import ConversionResult from './ConversionResult';
import { currencies } from './currencies';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyToConvert: '',
      currencyTarget: '',
      convertionResult: ''
    }
  }
  onChange(formValue) {
    this.setState({
      convertionResult: formValue
    })
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
          onValueChange={itemValue => this.setState({ currencyToConvert: itemValue })}
          style={styles.selectInput}
        >
          {
            this.displayCurrencies()
          }
        </Picker>
        <Text style={styles.label}>
          Na walutę
          </Text>
        <Picker
          selectedValue={this.state.currencyTarget}
          onValueChange={itemValue => this.setState({ currencyTarget: itemValue })}
          style={styles.selectInput}
        >
          {
            this.displayCurrencies()
          }
        </Picker>
        <Text>
          Wpisz ilość {this.state.currencyToConvert}
        </Text>
        <TextInput
          ref={(el) => { this.formValue = el; }}
          style={styles.input}
          keyboardType='numeric'
          onChangeText={formValue => this.onChange(formValue)
          }
        />
        <ConversionResult conversionResult={this.state.convertionResult}></ConversionResult>
      </View>
    );
  }

  displayCurrencies() {
    return currencies.map((item, id) => <Picker.Item label={item.label} value={item.value} key={id}></Picker.Item>);
  }
}

