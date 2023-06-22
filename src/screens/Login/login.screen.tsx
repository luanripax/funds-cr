import React from "react";
import { Text, View } from "react-native";
import Header from "../../global/components/Header/header.component";
import Input from "../../global/components/Input/input.component";
import styles from "./login.styles";

const LoginScreen = () => {
  const onBack = () => {};
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Login</Text>
      <View style={{ marginHorizontal: 16 }}>
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Password" secureText placeholder="Enter your password" />
      </View>
    </View>
  );
};

export default LoginScreen;
