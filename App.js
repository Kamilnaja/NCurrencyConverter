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
import CurrenciesPicker from './elements/CurrenciesPicker';
import { currenciesTable } from './currenciesTable';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyToConvert: currencies[0].value,
            currencyTarget: currencies[1].value,
            convertionResult: 0,
            amountOfMoney: 0,
            info: '',
        }
    }

    resetCash() {
        this.state = {
            convertionResult: 0,
            amountOfMoney: 0,
            info: '',
        }
    }

    setCurrencyToConvert(itemValue) {
        this.resetCash(),
            this.setState({
                currencyToConvert: itemValue
            })
        console.log(this.state);
    }

    setCurrencyTarget(itemValue) {
        this.resetCash(),
            this.setState({
                currencyTarget: itemValue
            })
        console.log(this.state);
    }

    onChange(formValue) {
        console.log(this.state);
        let currencyToConvert = this.state.currencyToConvert;
        let currencyTarget = this.state.currencyTarget;

        this.setState({
            amountOfMoney: formValue,
        })

        if (currencyToConvert === currencyTarget) {
            this.setState({
                convertionResult: this.state.currencyToConvert,
                info: 'Wybrałeś dwie takie same waluty!'
            })
        } else if (currencyToConvert === "PLN" && currencyTarget === "CZK") {
            this.setState({
                convertionResult: currenciesTable.PLNtoCZK * this.state.amountOfMoney
            })
        } else if (currencyToConvert === "PLN" && currencyTarget === "EUR") {
            this.setState({
                conversionResult: currenciesTable.PLNtoEUR * this.state.amountOfMoney
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./img/flower-3421864_960_720.jpg')}
                    style={styles.bgImage}
                >
                </Image>
                <View style={styles.wrapper}>
                    <CurrenciesPicker
                        currencyTarget={this.state.currencyTarget}
                        currencyToConvert={this.state.currencyToConvert}
                        setCurrencyToConvert={this.setCurrencyToConvert.bind(this)}
                        setCurrencyTarget={this.setCurrencyTarget.bind(this)}
                    >
                    </CurrenciesPicker>
                    {/* <Info info={this.state.info} style={this.state.sectionSemitransparent}></Info> */}
                    <NumberInput
                        onChange={this.onChange.bind(this)}
                        currencyToConvert={this.state.currencyToConvert}
                    ></NumberInput>
                    <ConversionResult
                        conversionResult={this.state.convertionResult}
                        style={styles.sectionSemitransparent}
                    >
                    </ConversionResult>
                </View>
            </View>
        );
    }
}

