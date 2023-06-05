import React from "react";
import { FlatList, StyleSheet, View, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import GridItem from "../components/GridItem";

type Props = {
  navigation: any;
};

type buttonItem = {
  id: string;
  label: string;
  onPress: () => void;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

const HomeScreen = (props: Props) => {
  const buttons: buttonItem[] = [
    {
      id: "0",
      label: "Chart",
      icon: "bar-chart",
      onPress: () => {
        props.navigation.navigate("Chart");
      },
    },
    {
      id: "1",
      label: "QR",
      icon: "qr-code",
      onPress: () => {
        props.navigation.navigate("QR");
      },
    },
    {
      id: "2",
      icon: "nfc",
      label: "NFC",
      onPress: () => {
        props.navigation.navigate("NFC");
      },
    },
    {
      id: "3",
      label: "Biometrics",
      icon: "fingerprint",
      onPress: () => {
        props.navigation.navigate("Biometrics");
      },
    },
    {
      id: "4",
      label: "Bonus",
      icon: "check",
      onPress: () => {
        props.navigation.navigate("Bonus");
      },
    },
  ];
  return (
    <>
      <View style={styles.logos}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://www.kerridgecs.com/files/ocw/kcs_logo_211_x_95_white_bg.png",
          }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={buttons}
          numColumns={2}
          renderItem={(props) => (
            <GridItem
              icon={props.item.icon}
              title={props.item.label}
              onClick={props.item.onPress}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    flex: 1,
  },
  listContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },
  tinyLogo: {
    width: 280,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
