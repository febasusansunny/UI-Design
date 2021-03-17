
import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './src/pages/Header/Header'
import ContactScreen from './src/screens/ContactScreen/ContactScreen'
import SearchBar from './src/screens/HomeScreen/SearchBar'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen/PrivacyPolicyScreen'
const Stack = createStackNavigator();
export default function App({navigation}) {
  return (
    <ScrollView >
        <Header />
        <SearchBar />
        <HomeScreen />
      <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
          <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}