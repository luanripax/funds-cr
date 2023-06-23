import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 145,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: "black",
    fontSize: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  value: {
    fontFamily: theme.fonts.regular,
    color: "black",
    fontSize: 14,
  },
});

export default styles;
