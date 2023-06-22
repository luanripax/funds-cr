import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./input.styles";
import InputProps from "./input.types";

const Input = ({ label, secureText = false, ...props }: InputProps) => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);

  const handleInputChange = (value: string) => {
    setText(value);
  };

  useEffect(() => {
    setShowText(secureText);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        {secureText && (
          <TouchableOpacity
            style={styles.secureIcon}
            onPress={() => setShowText((showText) => !showText)}
          >
            {
              <MaterialCommunityIcons
                name={showText ? "eye-outline" : "eye-off-outline"}
                size={22}
                color={"#A0A0A0"}
              />
            }
          </TouchableOpacity>
        )}
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleInputChange}
          secureTextEntry={showText}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
