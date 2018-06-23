// @ts-check

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    Image
} from 'react-native';
import { styles } from './styles/style';
import { currencies } from './currencies';
import ConversionResult from './elements/ConversionResult';
import Info from './elements/Info';
import NumberInput from './elements/NumberInput';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyToConvert: currencies[0].value,
            currencyTarget: currencies[1].value,
            convertionResult: 0,
            amountOfMoney: 0,
            info: '',
            blurRadius: 1
        }
    }

    onChange(formValue) {
        console.log(this.state);
        let currencyToConvert = this.state.currencyToConvert;
        let currencyTarget = this.state.currencyTarget;

        this.setState({
            amountOfMoney: formValue,
            blurRadius: 3
        })
        if (!this.state.amountOfMoney) {
            this.setState({
                blurRadius: 1
            })
        }
        if (currencyToConvert === currencyTarget) {
            this.setState({
                convertionResult: this.state.currencyToConvert,
                info: 'Wybrałeś dwie takie same waluty!'
            })
        } else if (currencyToConvert === "PLN" && currencyTarget === "CZK") {
            this.setState({
                convertionResult: 1.6 * this.state.amountOfMoney
            })
        } else if (currencyToConvert === "PLN" && currencyTarget === "EUR") {
            this.setState({
                conversionResult: 4 * this.state.amountOfMoney
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./img/flower-3421864_960_720.jpg')}
                    style={styles.bgImage}
                    blurRadius={this.state.blurRadius}
                >
                </Image>
                <View style={styles.wrapper}>
                    <Info info={this.state.info}></Info>
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
                    <NumberInput
                        onChange={this.onChange.bind(this)}
                        currencyToConvert={this.state.currencyToConvert}
                    ></NumberInput>
                    <ConversionResult
                        conversionResult={this.state.convertionResult}></ConversionResult>
                </View>
            </View>
        );
    }

    displayCurrencies() {
        return currencies.map((item, id) => <Picker.Item label={item.label} value={item.value} key={id}></Picker.Item>);
    }
}

