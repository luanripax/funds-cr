import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 4,
  },
  title: {
    fontFamily: theme.fonts.medium,
    color: "white",
    fontSize: 16,
  },
});

export default styles;
