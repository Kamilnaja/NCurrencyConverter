import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import { styles } from './../styles/style';

export default class NumberInput extends Component {

    render() {
        return (
            <View style={styles.sectionSemitransparent}>
                <TextInput
                    ref={(el) => { this.formValue = el; }}
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={formValue => this.props.onChange(formValue)}
                />
            </View>
        )
    }
}