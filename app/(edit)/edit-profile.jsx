import { ScrollView, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";

const editProfile = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="">
          <View className="pt-16 pb-5">
            <Text className="text-3xl text-white font-bold text-center">
              Edit Profile
            </Text>
          </View>

          <View className="p-4 w-full">
            <Text className="text-white p-2 ">Username</Text>
            <View className="w-full h-16 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <Ionicons name="person" size={18} color="white" />
              <TextInput
                className="text-white text-base w-full pl-2 "
                value="Siratul Islam"
                placeholder="Username"
                placeholderTextColor="#7B7B8B"
              />
            </View>
            <Text className="text-white p-2 ">Phone Number</Text>
            <View className="w-full h-16 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <FontAwesome name="phone" size={18} color="white" />
              <TextInput
                className="text-white text-base w-full pl-2 "
                value="01603516074"
                placeholder="Phone Number"
                placeholderTextColor="#7B7B8B"
              />
            </View>
            <Text className="text-white p-2 ">Email Address</Text>
            <View className="w-full h-16 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <Zocial name="email" size={18} color="white" />
              <TextInput
                className="text-white text-base w-full pl-2 "
                value="islamsiratul@gmail.com"
                placeholder="Email Address"
                placeholderTextColor="#7B7B8B"
              />
            </View>
            <Text className="text-white p-2 ">Password</Text>
            <View className="w-full h-16 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <FontAwesome name="lock" size={18} color="white" />
              <TextInput
                className="text-white text-base w-full pl-2 "
                value="12idfan@@"
                placeholder="Enter Password"
                placeholderTextColor="#7B7B8B"
              />
            </View>
            <CustomButton title="Edit Profile" containerStyles="mt-6" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default editProfile;
