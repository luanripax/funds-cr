import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SvgXml } from "react-native-svg";
import svgIcon from "../../../assets/svg";
import FundReturn from "../FundReturn/fundReturn.component";
import styles from "./fundCard.styles";

const FundCard = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="weather-windy"
        size={16}
        color={"#4A88D0"}
      />
      <Text style={styles.title}>Solar Fund</Text>
      <SvgXml xml={svgIcon.gainCurve} />
      <View style={styles.infoContainer}>
        <Text style={styles.value}>$1032.23</Text>
        <FundReturn type="gain" value={29.98} />
      </View>
    </View>
  );
};

export default FundCard;
