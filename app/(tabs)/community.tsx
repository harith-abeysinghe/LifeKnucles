import React from "react";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function Community() {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Community Support" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <View className="w-full flex justify-center items-center h-full bg-white">
        <Text className="text-3xl font-pblack"> textInComponent </Text>
        <Text>Community</Text>
      </View>
    </>
  );
}
