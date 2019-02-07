import { StyleSheet } from 'react-native';
import constants from 'constants';

export default styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: constants.common.screenHeight * 0.0792,//change height based on screen
        borderRadius: constants.common.screenHeight * 0.0396,//change border radius based on screen height
        backgroundColor: 'white'
    },
    textStyle: {
        color: 'white'

    },

});

