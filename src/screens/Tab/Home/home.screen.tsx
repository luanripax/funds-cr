import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./home.styles";
import Header from "../../../global/components/Header/header.component";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FundReturn from "../../../global/components/FundReturn/fundReturn.component";
import { SvgXml } from "react-native-svg";
import svgIcon from "../../../assets/svg";
import FundCard from "../../../global/components/FundCard/fundCard.component";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store.types";
import { addFund } from "../../../store/modules/funds/funds.slice";

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
            <FundReturn type="gain" value={31.82} />
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

const mockedFunds = [
  {
    type: "wind",
    returnType: "gain",
    returnValue: 29.56,
    currentValue: 1032.23,
  },
  {
    type: "solar",
    returnType: "loss",
    returnValue: 2.45,
    currentValue: 654.01,
  },
  {
    type: "nature",
    returnType: "gain",
    returnValue: 15.54,
    currentValue: 1654.21,
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { funds } = useSelector((state: RootState) => state.funds);

  useEffect(() => {
    dispatch(addFund(mockedFunds));
  }, []);

  return (
    <View style={styles.container}>
      <Header
        leftContent={<AntDesign name="user" size={24} color={"black"} />}
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
        <FlatList
          data={funds}
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
          style={styles.fundsList}
          horizontal
          renderItem={({ item }) => <FundCard data={item} />}
        />
        <View style={styles.bannerContainer}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>
              Learn more about carbon credits
            </Text>
            <Text style={styles.bannerTips}>Check out our top tips!</Text>
          </View>
          <SvgXml xml={svgIcon.carbonCredit} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
