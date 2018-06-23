import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './../styles/style.js';

class ConversionResult extends React.Component {

    render() {
        return (
            <View style={styles.sectionSemitransparent}>
                <Text style={styles.output}>
                    {Math.floor(this.props.conversionResult * 100) / 100}

                </Text>
            </View>
        )
    }
}

export default ConversionResult;
