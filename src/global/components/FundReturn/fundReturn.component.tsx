import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./fundReturn.styles";
import { FundReturnProps } from "./fundReturn.types";

const FundReturn = ({ type = "gain", value }: FundReturnProps) => {
  return type === "gain" ? (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialCommunityIcons
        name="arrow-top-right"
        size={16}
        color={"#0FDF8F"}
      />
      <Text style={styles.gainText}>{value}%</Text>
    </View>
  ) : (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialCommunityIcons
        name="arrow-bottom-right"
        size={16}
        color={"#EE8688"}
      />
      <Text style={styles.lossText}>{value}%</Text>
    </View>
  );
};

export default FundReturn;
