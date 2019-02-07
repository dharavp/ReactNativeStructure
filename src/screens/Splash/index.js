import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import icons from 'icons';
import styles from './style';

export default class Splash extends Component {

    componentWillMount() {

        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 2500);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ height: 300, width: 300 }} source={icons.IC_LOGIN_LOGO} resizeMode={'contain'} />
            </View>
        );
    }
}
