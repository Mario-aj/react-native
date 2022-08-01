import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="Listing" component={Dashboard} />
      <Screen name="Register" component={Register} />
      <Screen name="Summary" component={Register} />
    </Navigator>
  );
};
