import * as React from 'react';
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// custom class and manage classes
import { onLogin } from "../Redux/actions/auths";
import { ScreenRatio } from '../Utility/ScaleRatio';
import { Images, Colors, Strings } from '../Resorces/Index';
import { InputText, Button } from "../Component/Index";

// variable
const { width, height } = Dimensions.get("window");

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      url: "",
      userName: "",
      password: "",
      isRemember: true,
      isAcceeptTermsAndCond: true
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={{ flex: 0.3, backgroundColor: Colors.lightGray }} />
        <View style={{ flex: 0.7, backgroundColor: Colors.lightRed }}>
          <Text style={{ color: Colors.white, position: "absolute", bottom: 20, alignSelf: "center" }}>
            {"Version 1.6"}
          </Text>
        </View>
        <View style={{ height: height / 1.3, width: width - 30, backgroundColor: Colors.white, alignSelf: "center", position: "absolute", top: ScreenRatio(13), borderRadius: 12, padding: ScreenRatio(2.2) }}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} enableOnAndroid={true}>
            <Image source={Images.icon_logo} style={{ width: ScreenRatio(15), height: ScreenRatio(15), resizeMode: "contain", alignSelf: "center", marginTop: ScreenRatio(5) }} />

            <InputText
              value={this.state.url}
              placeholder={Strings.url}
              icon={Images.icon_link}
              keyboardType={"email-address"}
              maxLength={100}
              returnKeyType={"next"}
              onChangeText={(url) => this.setState({ url })}
              onSubmitEditing={() => this.userNameRef.focus()}
              viewStyle={{ backgroundColor: Colors.veryLightGray, borderWidth: 1, borderColor: Colors.lightGray, marginTop: ScreenRatio(5) }} />

            <InputText
              value={this.state.userName}
              refs={(ref) => this.userNameRef = ref}
              placeholder={Strings.userName}
              icon={Images.icon_user}
              returnKeyType={"next"}
              keyboardType="default"
              maxLength={50}
              onChangeText={(userName) => this.setState({ userName })}
              onSubmitEditing={() => this.passwordRef.focus()}
              viewStyle={{ marginTop: ScreenRatio(3), backgroundColor: Colors.veryLightGray, borderWidth: 1, borderColor: Colors.lightGray }} />

            <InputText
              value={this.state.password}
              refs={(ref) => this.passwordRef = ref}
              placeholder={Strings.password}
              icon={Images.icon_lock}
              returnKeyType={"done"}
              keyboardType="default"
              maxLength={50}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              onSubmitEditing={() => this.onLoginBtnHandler()}
              viewStyle={{ marginTop: ScreenRatio(3), backgroundColor: Colors.veryLightGray, borderWidth: 1, borderColor: Colors.lightGray }} />



            <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ isRemember: !this.state.isRemember })}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ flexDirection: "row", marginTop: ScreenRatio(3.8), marginLeft: 6 }}>
              <Image source={this.state.isRemember ? Images.icon_check : Images.icon_uncheck}
                style={{ height: ScreenRatio(2), width: ScreenRatio(2), resizeMode: "contain", marginRight: 8, tintColor: Colors.gray }} />
              <Text style={{ fontSize: ScreenRatio(2), color: Colors.gray }}>
                {Strings.rememberMe}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ isAcceeptTermsAndCond: !this.state.isAcceeptTermsAndCond })}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ flexDirection: "row", marginTop: ScreenRatio(1), marginLeft: 6 }}>
              <Image source={this.state.isAcceeptTermsAndCond ? Images.icon_check : Images.icon_uncheck}
                style={{ height: ScreenRatio(2), width: ScreenRatio(2), resizeMode: "contain", marginRight: 8, tintColor: Colors.gray }} />
              <Text style={{ fontSize: ScreenRatio(2), color: Colors.gray }}>
                {Strings.iAcceptTermsAndCondition}
              </Text>
            </TouchableOpacity>

            <Button onPress={() => this.onLoginBtnHandler()} text={Strings.signIn} style={{ marginTop: ScreenRatio(4), justifyContent: "center", width: ScreenRatio(20) }} />

            <Text style={{ fontSize: ScreenRatio(1.8), color: Colors.lightRed, position: "absolute", bottom: 0, alignSelf: "center", }}>
              {Strings.privacyPolicy + " "}
              <Text style={{ fontSize: ScreenRatio(2.2), color: Colors.gray }}>
                {Strings.and}
              </Text>
              <Text style={{ fontSize: ScreenRatio(2.2), color: Colors.lightRed }}>
                {" " + Strings.termsAndCondition}
              </Text>
            </Text>

          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }

  isValidation = () => {
    const { userName, password, url } = this.state;
    if ((url == "")) {
      alert("URL field is required..")
      return false
    } else if ((userName == "")) {
      alert("User Name field is required..")
      return false
    } else if ((password == "")) {
      alert("Password field is required.")
      return false
    } else if (!this.state.isAcceeptTermsAndCond) {
      alert("Plz check Accept And Terms condition")
      return false
    }
    else {
      return true
    }
  }

  onLoginBtnHandler = () => {
    const data = {
      "username": this.state.userName,
      "password": this.state.password,
      "url": this.state.url,
      "multiple_user_login": {
        "device_token": "dMChrtBklsU:APA91bGv-",
        "device_type": Platform.OS,
        "dedevicevice_model": "Nokia 4.2",
        "_version": "10",
        "app_version": "2.0",
        "device_name": "Nokia",
        "device_uid": "f123447630d7c358"
      }

    }
    if (this.isValidation()) {
      this.props.dispatch(onLogin(data))
    }
  }


}

function mapStateToProps(state) {
  return {

  }
}
export default connect(mapStateToProps)(LoginScreen);