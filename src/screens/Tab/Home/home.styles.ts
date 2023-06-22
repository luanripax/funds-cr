import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceAmount: {
    color: "black",
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },
  portfolioContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  portfolioTitle: {
    color: "black",
    fontFamily: theme.fonts.regular,
    fontSize: 14,
  },
  portfolioContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  portfolioAmountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  portfolioAmount: {
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    color: "black",
  },
  rewardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7EFFF",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  rewardsLabel: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: "#770FDF",
    marginLeft: 4,
  },
  fundsTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: "black",
    marginTop: 16,
    marginLeft: 16,
  },
});

export default styles;
