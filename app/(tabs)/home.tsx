import AppHeader from "@/components/AppHeader";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <AppHeader title="LifeKnucles" />
      <View className="w-full flex justify-center items-center h-full bg-white">
        <Text className="text-3xl font-pblack"> textInComponent </Text>
        <Text>Home</Text>
      </View>
    </>
  );
}
