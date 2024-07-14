import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import pro from "../../assets/pro.png";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "90%",
        }}
      >
        <View className="pt-10 flex-1 items-center">
          <Image
            source={pro}
            className="w-[20vh] h-[20vh] rounded-full "
            resizeMode="contain"
          />
          <View className="py-2">
            <Text className="text-white text-lg text-center font-bold ">
              Siratul Islam
            </Text>
            <Text className="text-white text-md pt-2 text-center">
              islamsiratul@gmail.com
            </Text>
            <View className="pt-8">
              <CustomButton
                title="Edit Profile"
                handlePress={() => router.push("/edit-profile")}
                containerStyles="w-[28vh] mt-0"
              />
            </View>
            {/* //options */}

            <View className="pt-14 flex-0 justify-between flex-row ">
              <View className="flex-row  ">
                <View className="p-1 bg-[#5E17EB] rounded-full ">
                  <AntDesign name="setting" size={20} color="white" />
                </View>

                <Text className="text-white p-0.5 text-lg pl-4 ">Setting</Text>
              </View>
              <View className="p-1 rounded-full ">
                <AntDesign name="right" size={20} color="#7B7B8B" />
              </View>
            </View>
            <View className="pt-10 flex-0 justify-between flex-row ">
              <View className="flex-row  ">
                <View className="p-1 bg-[#5E17EB] rounded-full ">
                  <Ionicons name="notifications" size={20} color="white" />
                </View>

                <Text className="text-white p-0.5 text-lg pl-4 ">
                  Notifications
                </Text>
              </View>
              <View className="p-1 rounded-full ">
                <AntDesign name="right" size={20} color="#7B7B8B" />
              </View>
            </View>
            <View className="pt-10 flex-0 justify-between flex-row ">
              <View className="flex-row  ">
                <View className="p-1 bg-[#5E17EB] rounded-full ">
                  <FontAwesome name="language" size={20} color="white" />
                </View>

                <Text className="text-white p-0.5 text-lg pl-4 ">Language</Text>
              </View>
              <View className="p-1 rounded-full ">
                <AntDesign name="right" size={20} color="#7B7B8B" />
              </View>
            </View>
            <View className="pt-10 flex-0 justify-between flex-row ">
              <View className="flex-row  ">
                <View className="p-1 bg-[#5E17EB] rounded-full ">
                  <MaterialIcons name="security" size={20} color="white" />
                </View>

                <Text className="text-white p-0.5 text-lg pl-4 ">Security</Text>
              </View>
              <View className="p-1 rounded-full ">
                <AntDesign name="right" size={20} color="#7B7B8B" />
              </View>
            </View>
            {/* //options */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
