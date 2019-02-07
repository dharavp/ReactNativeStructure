import { StyleSheet } from 'react-native';
import constants from 'constants';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    heading: {
        ...constants.palettes.heading,
        marginTop: 400
    }
});
