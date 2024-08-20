import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { View, Text } from "react-native";
import Home from "./home";
import Community from "./community";
import Info from "./info";
import LeaderBoard from "./leaderboard";

export default function TabLayout() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "community",
      title: "Community",
      focusedIcon: "account-group",
      unfocusedIcon: "account-group-outline",
    },
    {
      key: "info",
      title: "Info",
      focusedIcon: "information",
      unfocusedIcon: "information-outline",
    },
    {
      key: "leaderboard",
      title: "Leader Board",
      focusedIcon: "trophy",
      unfocusedIcon: "trophy-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    community: Community,
    info: Info,
    leaderboard: LeaderBoard,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{
          backgroundColor: "black",
          elevation: 1,
        }}
        sceneAnimationEnabled={true}
        activeColor="#6200ee"
        inactiveColor="#828282"
      />
    </>
  );
}
