import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    wrapper: {
        padding: 15,
        paddingTop: 50,
        marginTop: 30,
        flex: 1
    },
    input: {
        height: 40,
        borderColor: 'green',
        borderWidth: 1,
        alignSelf: 'stretch',
        paddingLeft: 15,
        marginTop: 10,
        width: '100%'
    },
    output: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
    },
    label: {
        color: '#fff',
        alignSelf: 'flex-start',
        paddingLeft: 10,
        fontWeight: '100',
        fontSize: 12
    },
    selectInput: {
        width: '100%',
        height: 40,
        color: '#fff',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    bigInfo: {
        marginTop: 50,
        color: '#fff'
    }
});
