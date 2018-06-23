import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles/style';

class ConversionResult extends React.Component {

    render() {
        return (
            <Text style={styles.output}>
                {this.props.conversionResult}
            </Text>)
    }
}

export default ConversionResult;
