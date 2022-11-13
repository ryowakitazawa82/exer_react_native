import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigator */

/* screens */
import { HomeScreen } from "../screens/HomeScreen";
/* contexts */


export const AppNavigator = () => {
//   const { user } = useContext(UserContext);

  return (
      <NavigationContainer>
          <HomeScreen/>
      {/* {!user ? <AuthScreen /> : <MainTabNavigator />} */}
    </NavigationContainer>
  );
};
