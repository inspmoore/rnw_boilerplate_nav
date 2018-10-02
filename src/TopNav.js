import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { withRouter } from "react-router-dom";

const TopNav = ({ history }) => {
  return (
    <View style={styles.main}>
      <Button title="Home" onPress={() => history.push("/")} />
      <Button title="Second" onPress={() => history.push("/second")} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#cccccc"
  }
});

export default withRouter(TopNav);
