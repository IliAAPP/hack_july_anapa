import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/main';
import Bonus from './components/Bonus';
import AllAchivements from './components/AllAchivements';
import AllTours from './components/AllTours';
import Profile from './components/Profile';
import Arenda from './components/Arenda';
import LevelUpLocked from './components/LevelUpLocked';
import SdachaJilya from './components/SdachaJilya';
import HistoryBonuses from './components/HistoryBonuses';
import Nachislenia from './components/Nachislenia';
import DannieProfilya from './components/DannieProfilya';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen 
        name="Main" 
        component={Main} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="Bonus" component={Bonus} options={{ headerShown: false }}/>
      <Stack.Screen name="AllAchivements" component={AllAchivements} options={{ headerShown: false }}/>
      <Stack.Screen name="AllTours" component={AllTours} options={{ headerShown: false }}/>
      <Stack.Screen name="Arenda" component={Arenda} options={{ headerShown: false }}/>
      <Stack.Screen name="LevelUpLocked" component={LevelUpLocked} options={{ headerShown: false }}/>
      <Stack.Screen name="SdachaJilya" component={SdachaJilya} options={{ headerShown: false }}/>
      <Stack.Screen name="HistoryBonuses" component={HistoryBonuses} options={{ headerShown: false }}/>
      <Stack.Screen name="Nachislenia" component={Nachislenia} options={{ headerShown: false }}/>
      <Stack.Screen name="DannieProfilya" component={DannieProfilya} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};


const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = 'home';
            } else if (route.name === 'Bonus') {
              iconName = 'settings';
            } 

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            if (route.name === 'Main') {
              label = 'Главная';
            } else if (route.name === 'Bonus') {
              label = 'Лояльность';
            }

            return <Text style={{ color }}>{label}</Text>;
          },
          tabBarActiveTintColor: '#484AA0',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Main" component={MainStack} />
        <Tab.Screen name="Bonus" component={Bonus} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
