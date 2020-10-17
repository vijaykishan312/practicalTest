import React from 'react';
import { Text, TouchableOpacity, Dimensions, Image } from 'react-native';

// custom class import
import { Colors } from "../Resorces/Index";
import { ScreenRatio } from "../Utility/ScaleRatio";

// local variable declare
const { width } = Dimensions.get("window")

export default CustomButton = props => {
    const { text, onPress, style, textStyle, icon, iconStyle } = props;
    return (
        <TouchableOpacity activeOpacity={0.65} hitSlop={{ top: 8, left: 8, bottom: 8, right: 8 }}
            style={[{ height: ScreenRatio(7), width: width - 50, alignSelf: "center", borderRadius: 8, backgroundColor: Colors.lightRed, alignItems: "center", flexDirection: "row", paddingHorizontal: ScreenRatio(3) }, style]}
            onPress={onPress}>
            {icon && <Image source={icon} style={[{ height: ScreenRatio(3), width: ScreenRatio(3), resizeMode: "contain", marginLeft: -8 }, iconStyle]} />}
            <Text style={[{ fontSize: ScreenRatio(2.6), color: Colors.white, marginLeft: icon ? 10 : 0 }, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}