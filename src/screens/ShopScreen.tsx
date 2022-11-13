import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

export const ShopScreen: React.FC = ({}) => {

  useEffect(() => {
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
