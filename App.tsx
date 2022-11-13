import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
/* lib */
import { getShops } from "./src/lib/firebase";
/* components */
import { ShopReviewItem } from "./src/components/ShopReviewItem";
/* types */
import { Shop } from "./types/shops";

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = await getShops();
    setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index.toString()} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      z
      <View style={styles.container}>
        <FlatList
          data={shops}
          renderItem={({ item }: { item: Shop }) => (
            <ShopReviewItem shop={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
