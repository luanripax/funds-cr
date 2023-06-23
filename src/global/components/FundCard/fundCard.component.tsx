import React from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { SvgXml } from "react-native-svg";
import svgIcon from "../../../assets/svg";
import FundReturn from "../FundReturn/fundReturn.component";
import styles from "./fundCard.styles";
import { FundCardProps } from "./fundCard.type";

interface Fund {
  name: string;
  icon: JSX.Element;
}

interface FundMapper {
  [key: string]: Fund;
}

const fundMapper: FundMapper = {
  wind: {
    name: "Wind Fund",
    icon: (
      <MaterialCommunityIcons
        name="weather-windy"
        size={16}
        color={"#4A88D0"}
      />
    ),
  },
  solar: {
    name: "Solar Fund",
    icon: <Feather name="sun" size={16} color={"#F0A719"} />,
  },
  nature: {
    name: "Nature Fund",
    icon: <MaterialCommunityIcons name="leaf" size={16} color={"#0FDF8F"} />,
  },
};

const FundCard = ({ data }: FundCardProps) => {
  return (
    <View style={styles.container}>
      {fundMapper[data.type].icon}
      <Text style={styles.title}>{fundMapper[data.type].name}</Text>
      <SvgXml
        xml={data.returnType === "gain" ? svgIcon.gainCurve : svgIcon.lossCurve}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.value}>${data.currentValue}</Text>
        <FundReturn type={data.returnType} value={data.returnValue} />
      </View>
    </View>
  );
};

export default FundCard;
