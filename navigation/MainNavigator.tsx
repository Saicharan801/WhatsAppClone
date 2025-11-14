import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ChatsScreen from "../screens/ChatsScreen";
import ChatScreen from "../screens/ChatScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export type RootStackParamList = {
  chats: undefined;
  Chat: { name: string };
};




function ChatsStack() {
  return (
  
    <Stack.Navigator>
      <Stack.Screen name="chats" component={ChatsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
   
  );
}

export default function MainNavigator() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Chats" component={ChatsStack} options={{ headerShown: false }} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
   
  );
}
