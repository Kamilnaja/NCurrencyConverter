import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'green',
        borderWidth: 1,
        alignSelf: 'stretch',
        paddingLeft: 15,
        marginTop: 10
    },
    output: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    label: {
        color: 'cornflowerblue',
        alignSelf: 'flex-start',
        paddingLeft: 10
    },
    selectInput: {
        width: '100%',
        height: 40,
    }
});
