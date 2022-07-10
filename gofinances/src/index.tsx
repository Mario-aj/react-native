import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Dashboard } from "./Dashboard";

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Dashboard />
    </SafeAreaView>
  );
}
