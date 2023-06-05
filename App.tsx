import { StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { StackHeaderProps, createStackNavigator } from '@react-navigation/stack';
import MainAppBar from "./components/MainAppBar";
import QrScreen from "./screens/QrScreen";
import ChartScreen from "./screens/ChartScreen";
import NfcScreen from "./screens/NfcScreen";
import BiometricsScreen from "./screens/BiometricsScreen";
import BonusScreen from "./screens/BonusScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
        header: (props:StackHeaderProps) => <MainAppBar {...props} />,
      }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chart" component={ChartScreen} />
          <Stack.Screen name="QR" component={QrScreen} />
          <Stack.Screen name="NFC" component={NfcScreen} />
          <Stack.Screen name="Biometrics" component={BiometricsScreen} />
          <Stack.Screen name="Bonus" component={BonusScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
