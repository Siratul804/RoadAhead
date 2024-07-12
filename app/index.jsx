import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import road from "../assets/roadD.jpg";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

// Basic Colors -> #5E17EB (purple) , #white ;

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "90%",
        }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="w-full flex justify-center items-center px-10">
            <Image
              source={road}
              className="w-[50vh] h-[50vh]"
              resizeMode="contain"
            />

            <CustomButton
              title="Let's Start"
              handlePress={() => router.push("/into-one")}
              containerStyles="w-full mt-0"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
