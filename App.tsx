import React from "react";
import RootNavigator from "./src/navigation/stack";
import { Provider } from "react-redux";
import store from "./src/store";
import Toast from "react-native-toast-message";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast />
    </Provider>
  );
}

export default App;
