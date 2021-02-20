import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20 // Android shadow
        }}
      ></View>
    </View>
  );
}
