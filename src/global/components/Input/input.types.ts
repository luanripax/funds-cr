import { TextInputProps } from "react-native";

interface InputExtraProps {
  label?: string;
  secureText?: boolean;
}

type InputProps = TextInputProps & InputExtraProps;

export default InputProps;
