import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";

// screens
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import TaskScreen from '../Screens/TaskScreen';
import Dasboard from '../Screens/Dasboard';
import ButtonsScreen from '../Screens/ButtonsScreen';

const Stack = createStackNavigator();

class AuthNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ gestureEnabled: false }} >
          <Stack.Screen
            name="DasboardScreen"
            component={Dasboard}
            options={{ headerShown: false, }} />
          <Stack.Screen
            name="TaskScreen"
            component={TaskScreen}
            options={{ headerShown: false, }} />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false, }} />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false, }}
          />
          <Stack.Screen
            name="ButtonsScreen"
            component={ButtonsScreen}
            options={{ headerShown: false, }}
          />
        </Stack.Navigator>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoader: state.AuthReducer.isSpinnerVisible ? state.AuthReducer.isSpinnerVisible : false
  }
}

export default connect(mapStateToProps)(AuthNavigation)