import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./global/theme";
import { Dashboard } from "./screens/Dashboard";
import { Register } from "./screens/Register";
import { CategorySelect } from "./screens/CategorySelect";

export function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      {/* <Dashboard /> */}
      {/* <Register /> */}
      <CategorySelect onSelect={() => {}} onClose={() => {}} category="" />
    </ThemeProvider>
  );
}
