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
});

export default styles;
