import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigator */
import { HomeStackNavigator } from "./HomeStackNavigator";
/* screens */

/* contexts */

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};
