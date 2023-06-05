import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  title: string;
  onClick: () => void;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

const GridItem = ({ title, icon, onClick }: Props) => {
  return (
    // <Button icon={icon} mode="elevated" onPress={onClick} style={styles.button} contentStyle={{
    //     padding: 15,
    //     width: 150,
    //     height: 120,
    // }}>
    //   {title}
    // </Button>
    <TouchableOpacity
      style={styles.button}
      onPress={onClick}
    >
      <MaterialIcons name={icon} size={32} color="blue" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
     overflow: 'hidden',
    borderWidth: 2,
    padding: 15,
    width: 150,
    height: 120,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'lightgrey',
    margin: 8,
  },
});
