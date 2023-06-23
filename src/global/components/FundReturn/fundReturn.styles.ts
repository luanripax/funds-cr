import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  gainText: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: "#0FDF8F",
  },
  lossText: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: "#EE8688",
  },
});

export default styles;
