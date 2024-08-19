import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CustomeButton() {
  return (
    <TouchableOpacity className="bg-secondary min-h-[45px] justify-center items-center rounded-xl">
      <Text>Sign-in</Text>
    </TouchableOpacity>
  );
}
