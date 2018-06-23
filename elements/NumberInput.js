import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { styles } from './../styles/style';

export default class NumberInput extends Component {

    render() {
        return (
            <TextInput
                ref={(el) => { this.formValue = el; }}
                style={styles.input}
                keyboardType='numeric'
                onChangeText={formValue => this.props.onChange(formValue)}
            />
        )
    }
}