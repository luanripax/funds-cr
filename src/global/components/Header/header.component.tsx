import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IHeaderProps } from "./header.types";
import styles from "./header.styles";

const Header = ({
  showDivider = true,
  leftContent,
  middleContent,
  rightContent,
  extraContent,
  onBack,
}: IHeaderProps) => {
  return (
    <View
      style={{ ...styles.container, borderBottomWidth: showDivider ? 1 : 0 }}
    >
      <View style={styles.content}>
        {onBack ? (
          <TouchableOpacity onPress={onBack}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={"black"}
            />
          </TouchableOpacity>
        ) : (
          leftContent
        )}
        {middleContent && middleContent}
        {rightContent && rightContent}
      </View>
      {extraContent && extraContent}
    </View>
  );
};

export default Header;
