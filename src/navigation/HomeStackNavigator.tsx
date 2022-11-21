import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* screen */
import { HomeScreen } from "../screens/HomeScreen";
import { ShopScreen } from "../screens/ShopScreen";
import { UserScreen } from "../screens/UserScreen";
/* types */
import { RootStackParamList } from "../../types/navigation";
import { CreateReviewScreen } from "../screens/CreateReviewScreen";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "#000" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <UserScreen name="CreateReview" component={CreateReviewScreen} />
    </RootStack.Navigator>
  );
};
