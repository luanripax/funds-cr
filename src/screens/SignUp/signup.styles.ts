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
  content: {
    marginHorizontal: 16,
  },
  termsContainer: {
    flexDirection: "row",
    right: 6,
    alignItems: "center",
  },
  termsText: {
    flex: 1,
    color: "#A0A0A0",
    fontFamily: theme.fonts.light,
    fontSize: 12,
    marginTop: 16,
    bottom: 4,
  },
  signUpText: {
    color: "#A0A0A0",
    fontFamily: theme.fonts.light,
    textAlign: "center",
    fontSize: 12,
    marginTop: 16,
  },
  progressContainer: {
    gap: 4,
    flexDirection: "row",
  },
  progressItem: {
    height: 5,
    width: 50,
    backgroundColor: "#F4F4F4",
    borderRadius: 200,
  },
  underlineText: {
    textDecorationLine: "underline",
    color: "black",
  },
});

export default styles;
