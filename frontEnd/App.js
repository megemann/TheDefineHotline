import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./App.style";
import { View } from "react-native";

export default function App() {
  return (
    <View style={s.background}>
      <SafeAreaProvider>
        <SafeAreaView></SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

