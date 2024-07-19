import 'react-native-gesture-handler';
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./Screens/HomeScreen";
import AllCropsScreen from "./Screens/AllCropScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="AllCrops" component={AllCropsScreen} />

  </Tab.Navigator>
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tabs">
        <Drawer.Screen name="Tabs" component={MyTabs} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="AllCrops" component={AllCropsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
