import React from "react";
import { View } from "react-native";
import { SpacingProps } from "./spacing.types";

const Spacing = ({ vertical, horizontal }: SpacingProps) => {
  return vertical ? (
    <View style={{ height: vertical }} />
  ) : (
    <View style={{ width: horizontal }} />
  );
};

export default Spacing;
