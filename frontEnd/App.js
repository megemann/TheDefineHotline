import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Home } from "./pages/home/home";
import * as React from "react";
import { PaperProvider } from "react-native-paper";


const Stack = createNativeStackNavigator();
export default function App() {

  const [isFontLoaded] = useFonts({
    "InriaSerif-Regular": require("./assets/fonts/InriaSerif-Regular.ttf"),
    "InriaSerif-Bold": require("./assets/fonts/InriaSerif-Bold.ttf"),
    "InriaSerif-Light": require("./assets/fonts/InriaSerif-Light.ttf"),
  });


  return (
    <PaperProvider>
      <NavigationContainer theme={{ colors: { background: "transparent" } }}>
        <View style={s.background}>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              {isFontLoaded && (
                <Stack.Navigator
                  screenOptions={{ headerShown: false, animation: "none" }}
                  initalRouteName="Home"
                >
                  <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

