import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class StarMap extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Star map !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
