import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

type Props = {};

// NfcManager.start();

const NfcScreen = (props: Props) => {
  // async function readNdef() {
  //   try {
  //      console.warn("Tag");
  //     // register for the NFC tag with NDEF in it
  //     await NfcManager.requestTechnology(NfcTech.Ndef);
  //     // the resolved tag object will contain `ndefMessage` property
  //     const tag = await NfcManager.getTag();
  //     console.warn("Tag found", tag);
  //   } catch (ex) {
  //     console.warn("Oops!", ex);
  //   } finally {
  //     // stop the nfc scanning
  //     NfcManager.cancelTechnologyRequest();
  //   }
  // }

  // return (
  //   <View style={styles.wrapper}>
  //     <TouchableOpacity onPress={readNdef}>
  //       <Text>Scan a Tag</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};

export default NfcScreen;

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
