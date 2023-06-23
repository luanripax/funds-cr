import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.types";
import styles from "./button.styles";
import { theme } from "../../../theme";

const Button = ({ title, enabled = true, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        ...styles.container,
        backgroundColor: enabled ? theme.colors.primary : "gray",
      }}
      onPress={onPress}
      disabled={!enabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
