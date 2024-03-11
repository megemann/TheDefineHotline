import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Home } from "./pages/home/home";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { Difficulty } from "./pages/difficulty/difficulty";
import { Easy } from "./pages/Games/Easy/Easy";
import { Medium } from "./pages/Games/Medium/Medium";
import { Hard } from "./pages/Games/Hard/Hard";



const Stack = createNativeStackNavigator();
export default function App() {
  const [isFontLoaded] = useFonts({
    "InriaSerif-Regular": require("./assets/fonts/InriaSerif-Regular.ttf"),
    "InriaSerif-Bold": require("./assets/fonts/InriaSerif-Bold.ttf"),
    "InriaSerif-Light": require("./assets/fonts/InriaSerif-Light.ttf"),
    "JockeyOne-Regular": require("./assets/fonts/JockeyOne-Regular.ttf"),
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
                  <Stack.Screen name="Difficulty" component={Difficulty} />
                  <Stack.Screen name= "Easy" component={Easy} />
                  <Stack.Screen name="Medium" component={Medium} />
                  <Stack.Screen name="Hard" component={Hard} />
                </Stack.Navigator>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

