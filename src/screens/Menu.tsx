import React from "react";
import { Text, StyleSheet, View } from "react-native";

// import Header from "../components/Menu/Header";
import Body from "../components/Menu/Body";

const Menu: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});

export default Menu;
