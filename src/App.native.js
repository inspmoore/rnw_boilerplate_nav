// App.js - React Native
import 'react-native-gesture-handler';
import 'react-native-safe-area-context';
import React, { Component } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "./HomeScreen";
import DasModalScreen from "./DasModalScreen";
import SecondScreen from "./SecondScreen";
import UserScreen from "./UserScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Profile() {
  return (
    <Text>Profile!</Text>
  );
}
function Settings() {
  return (
    <Text>Settings!</Text>
  );
}
function Feed() {
  return (
    <View>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
      <Text>Feed!</Text>
    </View>
  );
}
function Messages() {
  return (
    <View>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
      <Text>Messages!</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Second" component={SecondScreen} />
    </Tab.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DasModal" component={DasModalScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/*class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Second" component={SecondScreen} />
          <Tab.Screen name="Das Modal" component={DasModalScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}*/

/*const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { title: "Home" } }
});

const SecondStack = createStackNavigator({
  Second: { screen: SecondScreen, navigationOptions: { title: "Second" } },
  User: { screen: UserScreen, navigationOptions: { title: "User" } }
});*/

/*const TabNav = createBottomTabNavigator({
  Home: HomeStack,
  SecondStack: SecondStack
});*/

/*const RootStack = createStackNavigator(
  {
    Main: TabNav,
    DasModal: DasModalScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);*/

/*class App extends Component {
  render() {
    return <RootStack />;
  }
}*/

export default App;
