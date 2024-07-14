import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "90%",
        }}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
