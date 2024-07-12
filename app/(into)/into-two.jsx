import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import in2 from "../../assets/in2.png";
import progress from "../../assets/progress2.png";
import frame2 from "../../assets/frame2.png";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

// Basic Colors -> #5E17EB (purple) , #white ;

export default function IntoTwo() {
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
              source={in2}
              className="w-[40vh] h-[40vh]"
              resizeMode="contain"
            />

            <View className="pb-8 pl-4 pr-4 ">
              <Text className="text-[38px] text-gray-100 font-bold">
                Get real-time traffic information and avoid congested roads
              </Text>
            </View>

            <View className="flex-row pt-14 ">
              <View className="pr-16">
                <Image
                  source={frame2}
                  className="w-[8vh] h-[8vh]"
                  resizeMode="contain"
                />
              </View>

              <View className="pl-16">
                <TouchableOpacity
                  onPress={() => router.push("/into-three")}
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
