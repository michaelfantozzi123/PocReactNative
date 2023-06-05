import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

type Props = {}

const BonusScreen = (props: Props) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState('Waiting...');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied' as any);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (errorMsg) {
        setText(errorMsg);
      } else if (location) {
        setText(`Latitude: ${location.coords.latitude}  Longditude: ${location.coords.longitude}`);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

export default BonusScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
})