import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
/* lib */
import { getShops } from "../lib/firebase";
/* components */

/* types */
import { Shop } from "../../types/shops";
import { ShopReviewItem } from "../components/ShopReviewItem";

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = await getShops();
    setShops(shops);
  };

  const onPressShop = () => {
    navigation.navigate("Shop");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={shops}
          renderItem={({ item }: { item: Shop }) => (
            <ShopReviewItem shop={item} onPress={onPressShop} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
