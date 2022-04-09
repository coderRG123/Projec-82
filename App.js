import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DrawerNavigator from "./navigation/DrawerNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
<NavigationContainer>
      <DrawerNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
