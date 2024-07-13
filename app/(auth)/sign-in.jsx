import { ScrollView, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

import { FontAwesome } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "90%" }}>
        <View className="flex-1 justify-center items-center">
          <View className="pt-16 pb-2">
            <Text className="text-3xl text-white font-bold text-center">
              Sign In
            </Text>
          </View>

          <View className="p-4 w-full">
            <Text className="text-white p-2 ">Email Address</Text>
            <View className="w-full h-16 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <Zocial name="email" size={18} color="white" />
              <TextInput
                className="text-white text-base w-full pl-2 "
                value={email}
                onChangeText={setEmail}
                placeholder="Email Address"
                placeholderTextColor="#7B7B8B"
              />
            </View>
            <Text className="text-white p-2 ">Password</Text>
            <View className="w-full h-16 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
              <FontAwesome name="lock" size={18} color="white" />
              <TextInput
                className="text-white text-base w-full pl-2 "
                value={password}
                onChangeText={setPassword}
                placeholder="Enter Password"
                placeholderTextColor="#7B7B8B"
              />
            </View>
            <CustomButton title="Sign In" containerStyles="mt-6" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
