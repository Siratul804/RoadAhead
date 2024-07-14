import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5E17EB",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "#7B7B8B",
          height: 84,
        },
      }}
    >
      {/* <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <FontAwesome size={24} name="home" color={color} />
              <Text className="font-bold" style={{ color: color }}>
                Home
              </Text>
            </>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="map"
        options={{
          tabBarShowLabel: false,
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <FontAwesome5 name="map-marker-alt" size={28} color={color} />
              {/* <Text className="font-bold" style={{ color: color }}>
                Map
              </Text> */}
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="alert"
        options={{
          tabBarShowLabel: false,
          title: "Alerts",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <MaterialIcons name="bus-alert" size={28} color={color} />
              {/* <Text className="font-bold" style={{ color: color }}>
                Alerts
              </Text> */}
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <MaterialIcons name="person" size={32} color={color} />
              {/* <Text className="font-bold" style={{ color: color }}>
                Profile
              </Text> */}
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
