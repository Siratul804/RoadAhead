import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Alert = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "90%",
        }}
      >
        <View className="pt-10 flex-0 items-center">
          <Text className="text-[5vh] font-bold text-white ">Alerts</Text>
          <View className="pt-8">
            <View className="flex-row border b-1 border-b-[#7B7B8B] p-4 ">
              <Octicons name="alert" size={32} color="red" />
              <Text className="text-red-500 text-[4vh] pl-4 ">
                Heavy jam on your way !
              </Text>
            </View>
          </View>
          <View className="pt-5">
            <View className="flex-row border b-1 border-b-[#7B7B8B] p-4 ">
              <MaterialIcons name="done-outline" size={32} color="green" />
              <Text className="text-green-500 text-[4vh] pl-4 ">
                Your way is jam free !
              </Text>
            </View>
          </View>

          <View className="pt-5">
            <View className="flex-row border b-1 border-b-[#7B7B8B] p-4 ">
              <MaterialCommunityIcons
                name="weather-rainy"
                size={32}
                color="gray"
              />
              <Text className="text-gray-500 text-[4vh] pl-4 ">
                Heavy rain outside !
              </Text>
            </View>
          </View>
          <View className="pt-5">
            <View className="flex-row border b-1 border-b-[#7B7B8B] p-4 ">
              <MaterialIcons name="construction" size={32} color="yellow" />
              <Text className="text-yellow-500 text-[4vh] pl-4 ">
                Construction on you way !
              </Text>
            </View>
          </View>
          <View className="pt-5">
            <View className="flex-row border b-1 border-b-[#7B7B8B] p-4 ">
              <FontAwesome5 name="route" size={32} color="#5E17EB" />
              <Text className="text-[#5E17EB] text-[4vh] pl-4 ">
                Found a route for you !
              </Text>
            </View>
          </View>
          <View className="pt-5">
            <View className="flex-row border b-1 border-b-[#7B7B8B] p-4 ">
              <MaterialCommunityIcons
                name="emoticon-sad-outline"
                size={28}
                color="white"
              />
              <Text className="text-white text-[3vh] pl-4 ">
                I know how it feels stuck in jam !
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Alert;
