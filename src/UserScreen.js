import React from "react";
import { View, Text, StyleSheet } from "react-native";

class UserScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No user was defined!");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{`Name of the user: ${name}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default UserScreen;
