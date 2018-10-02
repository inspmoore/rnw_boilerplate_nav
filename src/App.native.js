// App.js - React Native

import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./HomeScreen";
import DasModalScreen from "./DasModalScreen";
import SecondScreen from "./SecondScreen";
import UserScreen from "./UserScreen";

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { title: "Home" } }
});

const SecondStack = createStackNavigator({
  Second: { screen: SecondScreen, navigationOptions: { title: "Second" } },
  User: { screen: UserScreen, navigationOptions: { title: "User" } }
});

const TabNav = createBottomTabNavigator({
  Home: HomeStack,
  SecondStack: SecondStack
});

const RootStack = createStackNavigator(
  {
    Main: TabNav,
    DasModal: DasModalScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
