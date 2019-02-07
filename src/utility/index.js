export const GOOGLE_ANALYTICS = 'UA-12345-1'
import {
    Platform,
    AsyncStorage,
    Alert
} from 'react-native';
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';
let tracker = new GoogleAnalyticsTracker(GOOGLE_ANALYTICS);

export const isValidEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
        return true;
    }
    return false;
};

export const isValidPassword = (password) => {
    if (password.length >= 6) {
        return true;
    }
    return false;
};

export const isValidComparedPassword = (password, confirmPassword) => {
    if (password == confirmPassword) {
        return true;
    }
    return false;
};

export const recordScreen = (screenname) => {
    tracker.trackScreenView(screenname);
};
export const getBuildVersion = () => {
    return Platform.OS === 'ios' ? DeviceInfo.getBuildNumber() : DeviceInfo.getVersion()
};

export const showAlert = (message) => {
    Alert.alert(
        'APP NAME',
        message,
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )

};

export const recordEvent = (eventname, paraString) => {
    // console.log(eventname + paraString)
    // AsyncStorage.setItem('eventlist', '')
    try {
        //store it in Async
    } catch (error) {
        console.log(error, 'error');
    }
    tracker.trackEvent(eventname, paraString, {
        label: Platform.OS,
        value: 22
    });
};

export function toTimeAgoString(date) {
    if (!date) {
        return '';
    }

    const dateCurrent = new Date();
    const dateDisplay = date;

    const stillUtc = moment.utc(dateDisplay).toDate();
    const local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');

    const fmtdateCurrent = moment(dateCurrent).format('YYYY-MM-DD HH:mm:ss');

    const diff = moment(fmtdateCurrent).diff(moment(local));
    const d = moment.duration(diff);
    const days = d.get('days');// parseInt(d.asDays());
    const hours = d.get('hours');
    const minutes = d.get('minutes'); // d.get('minutes');
    // hours -= days * 24;

    let displayDate = '';
    if (fmtdateCurrent >= local) {
        if (days === 0) {
            displayDate = `${hours} hours ago`;
            if (hours === 0) {
                displayDate = `${minutes} minutes ago`;
                if (minutes === 0 || minutes === 1) {
                    displayDate = 'minute ago';
                }
            } else if (hours === 1) {
                displayDate = `${hours} hour ago`;
            }
        } else if (days === 1) {
            displayDate = 'Yesterday';
        } else {
            displayDate = moment(dateDisplay).format('YYYY-MM-DD');
        }
    } else if (fmtdateCurrent < local) {
        displayDate = 'just now';
    } else {
        displayDate = 'just now';
    }
    return displayDate;
}