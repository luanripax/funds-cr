import React from "react";
import { Text, View } from "react-native";
import Header from "../../global/components/Header/header.component";
import Input from "../../global/components/Input/input.component";
import styles from "./login.styles";
import Button from "../../global/components/Button/button.component";
import Spacing from "../../global/components/Spacing/spacing.component";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { RootState } from "../../store/store.types";

const LoginScreen = () => {
  const { navigate } = useNavigation();
  const { logged } = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    logged
      ? navigate("TabNavigator")
      : Toast.show({
          type: "error",
          text1: "This account is not registered yet, please sign up",
        });
  };

  const handleSignup = () => {
    navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Login</Text>
      <View style={{ marginHorizontal: 16 }}>
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Password" secureText placeholder="Enter your password" />
        <Spacing vertical={16} />
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.signUpText}>
          Don't have an account ?{" "}
          <Text
            onPress={handleSignup}
            style={{ textDecorationLine: "underline" }}
          >
            Sign up
          </Text>{" "}
          here
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
