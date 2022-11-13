import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
