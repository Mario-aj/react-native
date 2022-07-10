import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./global/theme";
import { Dashboard } from "./Dashboard";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Dashboard />
      </SafeAreaView>
    </ThemeProvider>
  );
}
