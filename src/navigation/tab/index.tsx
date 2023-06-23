import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Tab/Home/home.screen";
import PortFolioScreen from "../../screens/Tab/Portfolio/portfolio.screen";
import TradeScreen from "../../screens/Tab/Trade/trade.screen";
import { SvgXml } from "react-native-svg";
import svgIcon from "../../assets/svg";
import { theme } from "../../theme";
import { Platform } from "react-native";

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
        tabBarStyle: {
          height: Platform.OS === "ios" ? 100 : 70,
          paddingVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgXml xml={svgIcon.homeTab} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgXml xml={svgIcon.tradeTab} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortFolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgXml xml={svgIcon.portfolioTab} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
