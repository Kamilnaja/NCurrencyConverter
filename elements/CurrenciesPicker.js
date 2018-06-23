import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
} from 'react-native';
import { styles } from './../styles/style';
import { currencies } from './../currencies';

export default class CurrenciesPicker extends Component {
    displayCurrencies() {
        return currencies.map((item, id) => <Picker.Item label={item.label} value={item.value} key={id}></Picker.Item>);
    }
    render() {
        return (
            <View>
                <View style={styles.sectionSemitransparent}>
                    <Text style={styles.label}>
                        Z waluty
                    </Text>
                    <Picker
                        selectedValue={this.props.currencyToConvert}
                        onValueChange={itemValue =>
                            this.props.setCurrencyToConvert(itemValue)}
                        style={styles.selectInput}
                    >
                        {
                            this.displayCurrencies()
                        }
                    </Picker>
                </View>
                <View style={styles.sectionSemitransparent}>
                    <Text style={styles.label}>
                        Na walutę
                    </Text>
                    <Picker
                        selectedValue={this.props.currencyTarget}
                        onValueChange={itemValue => this.props.setCurrencyTarget(itemValue)}
                        style={styles.selectInput}
                    >
                        {
                            this.displayCurrencies()
                        }
                    </Picker>
                </View>
            </View>
        )
    }
}
