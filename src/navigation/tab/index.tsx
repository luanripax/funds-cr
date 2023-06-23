import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../../screens/Tab/Home/home.screen";
import PortFolioScreen from "../../screens/Tab/Portfolio/portfolio.screen";
import TradeScreen from "../../screens/Tab/Trade/trade.screen";
import { SvgXml } from "react-native-svg";
import svgIcon from "../../assets/svg";
import { theme } from "../../theme";

const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#770FDF",
        tabBarInactiveTintColor: "#000000",
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          paddingBottom: 10,
        },
        tabBarStyle: { height: 70, paddingVertical: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <SvgXml xml={svgIcon.homeTab} />,
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <SvgXml xml={svgIcon.tradeTab} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortFolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgXml xml={svgIcon.portfolioTab} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
