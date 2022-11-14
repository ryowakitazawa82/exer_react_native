import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* screen */
import { HomeScreen } from "../screens/HomeScreen";
import { ShopScreen } from "../screens/ShopScreen";
/* types */
import { RootStackParamList } from "../../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "#000" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};
