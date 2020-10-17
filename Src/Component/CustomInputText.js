import React from 'react';
import { TextInput, Dimensions, View, Image, TouchableOpacity } from 'react-native';

// custom class import
import { Colors } from "../Resorces/Index";
import { ScreenRatio } from "../Utility/ScaleRatio";

// local variable declare
const { width } = Dimensions.get("window")

export default CustomInputText = props => {
    const { value, viewStyle, textStyle, icon, iconStryle, placeholder, refs, iconRight, rihtIconStyle, leftClickHandler } = props;
    return (
        <View style={[{ borderRadius: 8, width: width - 80, height: ScreenRatio(7), alignItems: "center", flexDirection: "row", paddingHorizontal: 20, alignSelf: "center" }, viewStyle]}>
            {icon && <Image source={icon} style={[{ height: ScreenRatio(3), width: ScreenRatio(3), resizeMode: "contain", marginLeft: -8 }, iconStryle]} />}
            <TextInput
                {...props}
                value={value}
                textAlignVertical={"top"}
                autoCapitalize="none"
                placeholderTextColor={Colors.placeHolderColor}
                ref={(ref) => { refs && refs(ref) }}
                style={[{ fontSize: ScreenRatio(2.4), marginLeft: icon ? 10 : 0, width: "95%" }, textStyle]}
                placeholder={placeholder} />
            {iconRight &&
                <TouchableOpacity onPress={leftClickHandler}>
                    <Image source={iconRight} style={[{ height: ScreenRatio(3), width: ScreenRatio(3), resizeMode: "contain", marginLeft: 8 }, rihtIconStyle]} />
                </TouchableOpacity>
            }
        </View>
    )
}