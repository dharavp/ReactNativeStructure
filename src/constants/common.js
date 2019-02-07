
import { Dimensions } from 'react-native';

export const APP_NAME = 'Patient';

const common = {
    screenHeight: Dimensions.get('window').width,
    screenWidth: Dimensions.get('window').width,
    dateFormate: {
        basic: 'hh:mm A'
    },
    timeFormate: {
        basic: 'DD ddd'
    }
}

export default common;