import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./home.styles";
import Header from "../../../global/components/Header/header.component";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../../theme";
import FundReturn from "../../../global/components/FundReturn/fundReturn.component";

const AccountBalance = () => {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceAmount}>Account: $1,457.23</Text>
      <MaterialCommunityIcons name="chevron-down" size={24} color={"black"} />
    </View>
  );
};

const AccountPortfolio = () => {
  return (
    <View style={styles.portfolioContainer}>
      <Text style={styles.portfolioTitle}>Portfolio</Text>
      <View style={styles.portfolioContent}>
        <View style={styles.portfolioAmountContainer}>
          <Text style={styles.portfolioAmount}>$1,245.23</Text>
          <View style={{ top: 4 }}>
            <FundReturn type="gain" value={"31.82"} />
          </View>
        </View>
        <View style={styles.rewardsContainer}>
          <MaterialCommunityIcons name="bitcoin" size={18} color={"#770FDF"} />
          <Text style={styles.rewardsLabel}>Earn rewards</Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const funds = [{}, {}, {}];

  return (
    <View style={styles.container}>
      <Header
        leftContent={
          <MaterialCommunityIcons name="account" size={24} color={"black"} />
        }
        rightContent={
          <MaterialCommunityIcons
            name="bell-outline"
            size={24}
            color={"black"}
          />
        }
        middleContent={<AccountBalance />}
        extraContent={<AccountPortfolio />}
      />
      <View>
        <Text style={styles.fundsTitle}>Funds</Text>
        <FlatList data={funds} renderItem={({ item, index }) => <View />} />
      </View>
    </View>
  );
};

export default HomeScreen;
