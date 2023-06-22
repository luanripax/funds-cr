import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: "#A0A0A0",
  },
  input: {
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
    backgroundColor: "#F4F4F4",
    height: 48,
    color: "black",
    fontFamily: theme.fonts.regular,
  },
  secureIcon: {
    position: "absolute",
    zIndex: 20,
    right: 8,
    top: 14,
  },
});

export default styles;
