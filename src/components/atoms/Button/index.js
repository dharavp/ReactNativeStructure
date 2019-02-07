import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = (props) => {
    const { title, moreContainerStyle, onPressListener, moreTextStyle, disabled } = props;
    const { containerStyle, textStyle } = styles;
    let buttonDisabled = false;
    if (disabled) {
        buttonDisabled = disabled;
    }

    return (
        <TouchableOpacity
            disabled={buttonDisabled}
            style={[containerStyle, moreContainerStyle]}
            onPress={onPressListener}>
            <Text style={[textStyle, moreTextStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}



export default Button;
