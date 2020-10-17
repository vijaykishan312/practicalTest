import * as React from 'react';
import { View, Image, TouchableOpacity, BackHandler, Dimensions } from 'react-native';
import { connect } from "react-redux";

// custom class and manage classes
import { ScreenRatio } from '../Utility/ScaleRatio';
import { Images, Colors, Strings } from '../Resorces/Index';
import { InputText, Button } from "../Component/Index";

// variable
const { width, height } = Dimensions.get("window");

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ""
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackBtnHandler);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackBtnHandler);
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ marginTop: ScreenRatio(6), marginLeft: ScreenRatio(1), position: "absolute", top: 0, left: 0 }}
                    onPress={() => this.onBackBtnHandler()}>
                    <Image source={Images.icon_back} style={{ height: 25, width: 25, tintColor: Colors.lightRed }} />
                </TouchableOpacity>
                <InputText
                    value={this.state.number}
                    placeholder={Strings.url}
                    keyboardType={"number-pad"}
                    returnKeyType={"next"}
                    onChangeText={(number) => this.setState({ number })}
                    onSubmitEditing={() => this.onSubmitBTN()}
                    viewStyle={{ backgroundColor: Colors.veryLightGray, borderWidth: 1, borderColor: Colors.lightGray, marginTop: ScreenRatio(5) }} />

                <Button onPress={() => { this.onSubmitBTN() }} text={Strings.signIn} style={{ marginTop: ScreenRatio(4), justifyContent: "center", width: ScreenRatio(20) }} />

            </View>
        );
    }

    // on back button hander
    onBackBtnHandler = () => {
        this.props.navigation.goBack(null);
        return true
    }

    isValidation = () => {
        const { number } = this.state;
        if ((number == "")) {
            alert("number field is required..")
            return false
        }
        else {
            return true
        }
    }

    onSubmitBTN = () => {
        if (this.isValidation()) {
            this.props.navigation.navigate("ButtonsScreen", { fromWhare: "TaskScreen", item: this.state.number })
        }
    }


}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(LoginScreen);