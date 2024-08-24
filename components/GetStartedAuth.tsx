import { TouchableOpacity, View, Text } from "react-native";
import { Button, Divider } from "react-native-paper";
import { Link } from "expo-router";

export default function GetStartedAuth() {
  return (
    <View className="mt-10">
      <View className="flex-row space-x-4">
        <TouchableOpacity className="w-[150px] h-[55px]">
          <Button
            mode="contained"
            className="w-full h-full justify-center"
            contentStyle={{ height: "100%" }}
            buttonColor="#419A00"
            textColor="white"
            onPress={() => console.log("Sign-in Button Pressed")}
          >
            <Link href="/home" className="font-pbold">
              Sign-in
            </Link>
          </Button>
        </TouchableOpacity>

        <TouchableOpacity className="w-[150px] h-[55px]">
          <Button
            mode="contained"
            className="w-full h-full justify-center"
            contentStyle={{ height: "100%" }}
            buttonColor="#419A00"
            textColor="white"
            onPress={() => console.log("Sign-up Button Pressed")}
          >
            <Text className="font-pbold">Sign-up</Text>
          </Button>
        </TouchableOpacity>
      </View>
      <Text className="text-white text-center mt-4">or</Text>
      <Divider className="h-0.5 bg-white m-2" />
      <View className="flex-row space-x-4 justify-center mt-5">
        <TouchableOpacity className="w-[100px] h-[55px]">
          <Button
            mode="contained-tonal"
            icon="google"
            className="w-full h-full justify-center items-center"
            contentStyle={{ height: "100%" }}
            labelStyle={{ fontSize: 24 }}
            onPress={() => console.log("Google Sign-in Button Pressed")}
            buttonColor="#2E8B57"
          ></Button>
        </TouchableOpacity>

        <TouchableOpacity className="w-[100px] h-[55px]">
          <Button
            mode="contained-tonal"
            icon="facebook"
            className="w-full h-full justify-center items-center"
            contentStyle={{ height: "100%" }}
            labelStyle={{ fontSize: 30 }}
            onPress={() => console.log("Facebook Sign-in Button Pressed")}
            buttonColor="#1877F2"
          ></Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
