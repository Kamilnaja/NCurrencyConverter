import React from 'react';
import { Text } from 'react-native';

export default class Info extends React.Component {
    render() {
        return (
            <Text>
                {this.props.info}
            </Text>
        )
    }
}

