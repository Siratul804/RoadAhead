import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let initialPosition = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setRegion(initialPosition);
    };

    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView className="h-full bg-black ">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="p-2">
          <View className="w-full h-10 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
            <Entypo name="location-pin" size={18} color="#5E17EB" />
            <TextInput
              className="text-[#5E17EB] text-base w-full pl-2 "
              value="Current Location"
              placeholderTextColor="#7B7B8B"
            />
          </View>
        </View>
        <View className="pl-2 pr-2 pt-0 pb-3">
          <View className="w-full h-10 px-4 bg-black rounded-2xl border-2 border-[#212129] focus:border-secondary flex flex-row items-center">
            <FontAwesome name="location-arrow" size={18} color="#7B7B8B" />
            <TextInput
              className="text-white text-base w-full pl-2 "
              placeholder="Where to go?"
              placeholderTextColor="#7B7B8B"
            />
          </View>
        </View>
        <View style={styles.container}>
          <MapView
            region={region}
            style={styles.map}
            showsMyLocationButton={true}
            showsUserLocation={true}
            onUserLocationChange={(event) => {
              console.log(
                "User's current location:",
                event.nativeEvent.coordinate
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
