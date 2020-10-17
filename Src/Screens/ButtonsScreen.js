import * as React from 'react';
import { View, Dimensions, FlatList, TouchableOpacity, Image, BackHandler } from 'react-native';
import { connect } from "react-redux";

// custom class and manage classes
import { ScreenRatio } from '../Utility/ScaleRatio';
import { Colors, Strings, Images } from '../Resorces/Index';
import { Button } from "../Component/Index";

// variable
const { width, height } = Dimensions.get("window");

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            buttonArray: [],
            indexValue: 0
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackBtnHandler);
        this.didFocusSubs = this.props.navigation.addListener('focus', () => this.didFocusScreen());
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
                <FlatList data={this.state.buttonArray} numColumns={2} style={{ marginTop: 80 }}
                    renderItem={({ item, index }) => this.onRenderView(item, index)} />
            </View>
        );
    }

    onRenderView = (item, index) => {
        return (
            <Button onPress={() => { this.onButtonClickHandler(index) }} text={Strings.signIn}
                style={{ marginTop: ScreenRatio(4), justifyContent: "center", width: ScreenRatio(20), backgroundColor: index == this.state.indexValue ? Colors.darkBlue : Colors.lightRed }} />
        )
    }

    onButtonClickHandler = (index) => {
        this.setState({
            indexValue: index
        })
    }

    // did Focus Screen
    didFocusScreen = () => {
        const fromWhare = this.props.route.params ? this.props.route.params.fromWhare ? this.props.route.params.fromWhare : "" : "";
        if (fromWhare != "") {
            for (let i = 0; i < this.props.route.params.item; i++) {
                this.state.buttonArray.push(i)
            }
        }
        this.setState({ buttonArray: this.state.buttonArray })
    }

    // on back button hander
    onBackBtnHandler = () => {
        this.props.navigation.goBack(null);
        return true
    }
}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(LoginScreen);