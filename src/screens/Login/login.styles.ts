import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginVertical: 16,
    fontFamily: theme.fonts.bold,
    color: "black",
    fontSize: 18,
  },
  signUpText: {
    color: "#A0A0A0",
    fontFamily: theme.fonts.light,
    textAlign: "center",
    fontSize: 12,
    marginTop: 16,
  },
});

export default styles;
