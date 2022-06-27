import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/Navigation';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Mulish': require('./assets/fonts/Mulish-VariableFont_wght.ttf'),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}


