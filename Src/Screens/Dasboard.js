import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from "react-redux";

// custom class and manage classes
import { ScreenRatio } from '../Utility/ScaleRatio';
import { Colors, Strings } from '../Resorces/Index';
import { Button } from "../Component/Index";

// variable
const { width, height } = Dimensions.get("window");

class Dasboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white, alignItems: "center", justifyContent: "center" }}>
                <Button onPress={() => { this.props.navigation.navigate("LoginScreen") }} text={Strings.task1} style={{ marginTop: ScreenRatio(4), justifyContent: "center", width: ScreenRatio(20) }} />

                <Button onPress={() => { this.props.navigation.navigate("TaskScreen") }} text={Strings.task2} style={{ marginTop: ScreenRatio(4), justifyContent: "center", width: ScreenRatio(20) }} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(Dasboard);