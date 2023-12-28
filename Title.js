import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = ({ number, color, text }) => {
  return (
    <View>
      <Text>{number + 1}</Text>
      <Text style={[styles.title, { color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});

export default Title;
