import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './../styles/style';

export default class Info extends React.Component {
    render() {
        return (
            <View style={styles.sectionSemitransparent}>
                <Text style={styles.info}>
                    {this.props.info}
                </Text>
            </View>
        )
    }
}

