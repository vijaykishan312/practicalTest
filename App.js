import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// custom class and managment class
import AuthNavigator from './Src/Navigations/AuthNavigation';
import createStore from "./Src/Redux/store/configureStore";

import { NavigationRef } from "./Src/Navigations/NavigationService";

//  variable
const store = createStore()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={NavigationRef}>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App
