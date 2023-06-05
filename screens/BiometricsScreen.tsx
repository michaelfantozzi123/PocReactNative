import React, { useEffect } from "react";
import { Alert, View, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

type Props = {};

const BiometricsScreen = (props: Props) => {
  let authSuccess = false;
  useEffect(() => {
    (async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert("Device doesn't support biometric authentication.");
        return;
      }

      const biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (!biometricRecords) {
        Alert.alert("No identities are enrolled.");
        return;
      }

      const authOptions = {
        promptMessage: "Authenticate to continue",
        cancelLabel: "Cancel",
        fallbackLabel: "Use passcode",
      };

      const result = await LocalAuthentication.authenticateAsync(authOptions);

      if (result.success) {
        Alert.alert("Authentication succeeded!");
      } else {
        Alert.alert("Authentication failed!");
      }
    })();
  }, []);

  return (
    <View>
      
    </View>
  );
};

export default BiometricsScreen;

const styles = StyleSheet.create({});
