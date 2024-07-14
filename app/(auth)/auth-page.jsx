import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logSin from "../../assets/logSin.png";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

// Basic Colors -> #5E17EB (purple) , #white ;

export default function AuthPage() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex-1 justify-center ">
          <TouchableOpacity
            onPress={() => router.push("/map")}
            activeOpacity={0.7}
          >
            <Text className=" text-right pr-10 text-[18px] font-bold text-[#5E17EB] ">
              Skip
            </Text>
          </TouchableOpacity>
          <View className="w-full flex justify-center items-center pb-5 ">
            <Image
              source={logSin}
              className="w-[40vh] h-[40vh]"
              resizeMode="contain"
            />

            <View className="p-4">
              <Text className="text-[42px] text-gray-100 font-bold">
                Get Started !
              </Text>
            </View>
          </View>
          {/* //btn// */}
          <View className="pt-10 items-center ">
            <TouchableOpacity
              onPress={() => router.push("/sign-up")}
              activeOpacity={0.7}
              className={`bg-white rounded-full min-h-[62px] justify-center items-center w-[44vh] `}
            >
              <Text className={`text-black font-bold text-lg`}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View className="pt-5 items-center ">
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              activeOpacity={0.7}
              className={`bg-black rounded-full min-h-[62px] justify-center items-center w-[44vh] border border-[white] `}
            >
              <Text className={`text-[#5E17EB] font-bold text-lg`}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
