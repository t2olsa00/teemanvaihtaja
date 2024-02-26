import React from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "../context/useTheme";
import { StyleSheet, View, Text } from "react-native";

export default function ThemeSwitchButton() {
    const {isDarkMode, toggleDarkMode} = useTheme()

    return(
        <View style={Styles.switchContainer}>
            <Text>Toggle dark mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode}/>
        </View>
    )
}
const Styles = StyleSheet.create({
switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
})