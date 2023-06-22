import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../../global/components/Header/header.component";
import Input from "../../global/components/Input/input.component";
import styles from "./signup.styles";
import Button from "../../global/components/Button/button.component";
import Spacing from "../../global/components/Spacing/spacing.component";
import { Checkbox } from "react-native-paper";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const Progress = () => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressItem} />
      <View style={styles.progressItem} />
      <View style={styles.progressItem} />
    </View>
  );
};

const SignUpScreen = () => {
  const { navigate, goBack } = useNavigation();

  const onBack = () => {
    goBack();
  };

  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        onBack={onBack}
        middleContent={<Progress />}
        rightContent={<View />}
      />
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.content}>
        <Input label="First Name" placeholder="Enter your first name" />
        <Input label="Last Name" placeholder="Enter your last name" />
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Minimum 8 characters" secureText />
        <View style={styles.termsContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            uncheckedColor="#E6E6E6"
            color={theme.colors.primary}
          />
          <Text style={styles.termsText}>
            I am over 18 years of age and I have read and agree to the{" "}
            <Text style={{ color: "black" }}>Terms of Service</Text> and{" "}
            <Text style={{ color: "black" }}>Privacy policy.</Text>
          </Text>
        </View>

        <Spacing vertical={16} />
        <Button title="Create account" />
        <Text style={styles.signUpText}>
          Already have an account ?{" "}
          <Text onPress={onBack} style={styles.underlineText}>
            Log in here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
