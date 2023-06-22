import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: 50 + getStatusBarHeight() + 20,
    width: "100%",
    borderBottomColor: "#F4F4F4",
  },
  content: {
    marginTop: getStatusBarHeight() + 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
