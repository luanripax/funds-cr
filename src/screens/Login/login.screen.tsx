import React from "react";
import { Text, View } from "react-native";
import Header from "../../global/components/Header/header.component";
import Input from "../../global/components/Input/input.component";
import styles from "./login.styles";
import Button from "../../global/components/Button/button.component";
import Spacing from "../../global/components/Spacing/spacing.component";

const LoginScreen = () => {
  const onBack = () => {};
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Login</Text>
      <View style={{ marginHorizontal: 16 }}>
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Password" secureText placeholder="Enter your password" />
        <Spacing vertical={16} />
        <Button title="Login" />
        <Text style={styles.signUpText}>
          Don't have an account ?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Sign up</Text> here
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
