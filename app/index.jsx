import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import road from "../assets/rod.png";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="w-full flex justify-center items-center px-4">
            <Image
              source={road}
              className="w-[30vh] h-[30vh]"
              resizeMode="contain"
            />

            <View className="pr-8 pl-8 ">
              <Text className="text-[14px] text-gray-100 mt-5 text-center">
                Where Creativity Meets Innovation: Embark on a Journey of
                Limitless Exploration with Flora
              </Text>
            </View>
            <CustomButton
              title="Let's Start"
              handlePress={() => router.push("/home")}
              containerStyles="w-full mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
