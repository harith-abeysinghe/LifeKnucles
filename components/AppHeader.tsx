import { Appbar } from "react-native-paper";
import React from "react";

interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <>
      <Appbar.Header className="bg-primary">
        <Appbar.Content title={title} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="bell" onPress={() => {}} />
        <Appbar.Action icon="menu" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
}
