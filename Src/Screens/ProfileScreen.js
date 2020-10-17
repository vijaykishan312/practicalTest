import * as React from 'react';
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity, BackHandler, Dimensions } from 'react-native';
import { connect } from "react-redux";

// custom class and manage classes
import { onLogin } from "../Redux/actions/auths";
import { ScreenRatio } from '../Utility/ScaleRatio';
import { Images, Colors, Strings } from '../Resorces/Index';


// variable
const { width, height } = Dimensions.get("window");

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreenName: "ProfileStack"
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackBtnHandler);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackBtnHandler);
    }

    render() {
        const userData = this.props.logindata ? this.props.logindata : {}
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: Colors.lightRed }}>
                    <View style={{ height: height / 1.3, width: width, backgroundColor: Colors.white, position: "absolute", bottom: 0 }}>
                        {userData.id && <View style={{ height: height / 1.3, width: width, backgroundColor: Colors.white, position: "absolute", bottom: 0 }}>
                            <Image source={Images.image_profile_background} style={{ width: width, height: height, resizeMode: "contain", borderRadius: ScreenRatio(20), position: "absolute", bottom: 0, tintColor: Colors.white }} />
                            <View style={{ width: ScreenRatio(18), height: ScreenRatio(18), alignSelf: "center", borderWidth: 8, borderColor: Colors.lightGray, borderRadius: ScreenRatio(20), marginTop: -ScreenRatio(15) }}>
                                <TouchableOpacity
                                    hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                                    style={{ position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", backgroundColor: Colors.gray, borderRadius: 100 }}>
                                    <Image source={Images.icon_camera} style={{ height: ScreenRatio(5), width: ScreenRatio(5), resizeMode: "center", tintColor: Colors.darkBlue }} />
                                </TouchableOpacity>
                            </View>
                            {userData.firstname && < Text style={{ fontSize: ScreenRatio(3), color: Colors.darkBlue, alignSelf: "center", marginTop: ScreenRatio(2) }}>
                                {userData.firstname + " " + userData.lastname}
                            </Text>}
                            {userData.email && <Text style={{ fontSize: ScreenRatio(2), color: Colors.darkBlue, alignSelf: "center" }}>
                                {userData.email}
                            </Text>}

                            <View style={{ width: width - 50, backgroundColor: Colors.lightGray, alignSelf: "center", marginTop: ScreenRatio(8), borderRadius: 8, padding: ScreenRatio(4) }}>
                                <Text style={{ fontSize: ScreenRatio(2.5) }}>
                                    {"Address"}
                                </Text>
                                <Text style={{ fontSize: ScreenRatio(2), color: Colors.gray, marginTop: ScreenRatio(1),width:ScreenRatio(30) }}>
                                    {userData.street_address}
                                </Text>
                            </View>

                            <View style={{ width: width - 50, backgroundColor: Colors.lightGray, alignSelf: "center", marginTop: ScreenRatio(8), borderRadius: 8, padding: ScreenRatio(4) }}>
                                <Text style={{ fontSize: ScreenRatio(2.5) }}>
                                    {"Contect"}
                                </Text>
                                <Text style={{ fontSize: ScreenRatio(2), color: Colors.gray, marginTop: ScreenRatio(1) }}>
                                    {userData.phone_number}
                                </Text>
                            </View>
                        </View>}
                    </View>
                    <TouchableOpacity style={{ marginTop: ScreenRatio(6), marginLeft: ScreenRatio(1) }} onPress={() => this.props.navigation.goBack(null)}>
                        <Image source={Images.icon_back} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    // on back button hander
    onBackBtnHandler = () => {
        this.props.navigation.goBack(null);
        return true
    }
}

const mapStateToProps = (state) => {
    return {
        logindata: state.AuthReducer.logindata ? state.AuthReducer.logindata.data.data.Users : {}
    }
}

export default connect(mapStateToProps)(MyProfile)