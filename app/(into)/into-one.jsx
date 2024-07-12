import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import in1 from "../../assets/in1.png";
import progress from "../../assets/progress1.png";
import frame1 from "../../assets/frame1.png";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

// Basic Colors -> #5E17EB (purple) , #white ;

export default function IntoOne() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="w-full flex justify-center items-center px-10">
            <Image
              source={in1}
              className="w-[40vh] h-[40vh]"
              resizeMode="contain"
            />

            <View className="pb-8 pl-4 pr-4 ">
              <Text className="text-[38px] text-gray-100 font-bold">
                Drive smarter knowing the best route and time to go
              </Text>
            </View>

            <View className="flex-row pt-14 ">
              <View className="pr-16">
                <Image
                  source={frame1}
                  className="w-[8vh] h-[8vh]"
                  resizeMode="contain"
                />
              </View>

              <View className="pl-16">
                <TouchableOpacity
                  handlePress={() => router.push("/")}
                  activeOpacity={0.7}
                >
                  <Image
                    source={progress}
                    className="w-[8vh] h-[8vh]"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
