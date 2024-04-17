import { WordAPI } from "./api/vocab";
import * as React from "react";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SettingsContext } from "./SettingsContext";
import { FAKE_DATA } from "./util";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
//all pages
import { Home } from "./pages/home/home";
import { Difficulty } from "./pages/difficulty/difficulty";
import { Game } from "./pages/Game/Game";
import { GameLoading } from "./pages/GameLoading/GameLoading";
import { EndGame } from "./pages/EndGame/EndGame";
import { TopScores } from "./pages/TopScores/TopScores";
import { DEFAULT_SETTINGS, Settings } from "./pages/Settings/Settings"; //also a page

const Stack = createNativeStackNavigator();
export default function App() {
  const [settings, setSettings] = React.useState();
  const [topScores, setTopScores] = React.useState();
  const [attempts, setAttempts] = React.useState();
  const [routedGame, setRoutedGame] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [prevDifficulty, setPrevDifficulty] = React.useState(null);
  const [gameContent, setGameContent] = React.useState(/*FAKE_DATA*/);
  const [tempGameContent, setTempGameContent] = React.useState(gameContent);
  //0: def
  //1: answer
  //2-4: fake

  const [isFontLoaded] = useFonts({
    "InriaSerif-Regular": require("./assets/fonts/InriaSerif-Regular.ttf"),
    "InriaSerif-Bold": require("./assets/fonts/InriaSerif-Bold.ttf"),
    "InriaSerif-Light": require("./assets/fonts/InriaSerif-Light.ttf"),
    "JockeyOne-Regular": require("./assets/fonts/JockeyOne-Regular.ttf"),
  });

  const save = () => {
    if (settings.general.topScoreTracking) {
      saveTopScores();
      saveAttempts();
    }
  };

  const saveNewSettings = () => {
    saveSettings();
    save();
  };

  const resetTopScores = () => {
    setTopScores({
      easy: [0, 0, 0],
      medium: [0, 0, 0],
      hard: [0, 0, 0],
    });
    setAttempts({
      easy: 0,
      medium: 0,
      hard: 0,
    });
  };

  function clearContent() {
    setGameContent();
    setTempGameContent();
    setIsLoaded(false);
  }

  //all async storage functions
  async function saveTopScores() {
    try {
      await AsyncStorage.setItem("@topScores", JSON.stringify(topScores));
    } catch (e) {
      console.log(e);
    }
  }

  async function saveSettings() {
    try {
      await AsyncStorage.setItem("@settings", JSON.stringify(settings));
    } catch (e) {
      console.log(e);
    }
  }

  async function saveAttempts() {
    try {
      await AsyncStorage.setItem("@attempts", JSON.stringify(attempts));
    } catch (e) {
      console.log(e);
    }
  }

  async function loadTopScores() {
    try {
      const value = await AsyncStorage.getItem("@topScores");
      if (value !== null) {
        setTopScores(JSON.parse(value));
      } else {
        setTopScores({
          easy: [0, 0, 0],
          medium: [0, 0, 0],
          hard: [0, 0, 0],
        });
      }
    } catch (e) {
      alert(e);
    }
  }

  async function loadSettings() {
    try {
      const value = await AsyncStorage.getItem("@settings");
      if (value !== null) {
        setSettings(JSON.parse(value));
      } else {
        setSettings(DEFAULT_SETTINGS);
      }
    } catch (e) {
      alert(e);
    }
  }

  async function loadAttempts() {
    try {
      const value = await AsyncStorage.getItem("@attempts");
      if (value !== null) {
        setAttempts(JSON.parse(value));
      } else {
        setAttempts({
          easy: 0,
          medium: 0,
          hard: 0,
        });
      }
    } catch (e) {
      alert(e);
    }
  }

  React.useEffect(() => {
    loadTopScores();
    loadAttempts();
    loadSettings();
  }, []);

  React.useEffect(() => {
    if (routedGame) {
      fetchGameContent(false);
    }
  }, [routedGame]);

  React.useEffect(() => {
    if (tempGameContent) {
      console.log(tempGameContent);
      setGameContent(tempGameContent);
      setRoutedGame(false);
      setIsLoaded(true);
    }
  }, [tempGameContent]);

  //API calls
  function fetchNewContent() {
    fetchGameContent(true);
  }

  //done differently the first and successive calls
  async function fetchGameContent(newContent) {
    const wordResponse = await WordAPI.fetchGameContent();
    let tempContent = [];
    if (!newContent) {
      tempContent = wordResponse;
    } else {
      tempContent = gameContent;
      for (let i = 0; i < wordResponse.length; i++) {
        tempContent.push(wordResponse[i]);
      }
    }

    if (newContent) {
      setGameContent(["NULL"]);
      setGameContent(tempContent);
    } else {
      setTempGameContent(tempContent);
    }
  }

  return (
    <SettingsContext.Provider value={settings || DEFAULT_SETTINGS}>
      <NavigationContainer theme={{ colors: { background: "transparent" } }}>
        <View style={s.background}>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              {isFontLoaded && (
                <Stack.Navigator
                  screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
                  initalRouteName="Home"
                >
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Difficulty" >
                    {() => (
                      <Difficulty
                        setRoutedGame={setRoutedGame}
                        prevDifficulty={prevDifficulty}
                        setPrevDifficulty={setPrevDifficulty}
                      />
                    )}
                  </Stack.Screen>
                  <Stack.Screen name="Loading">
                    {() => <GameLoading isLoaded={isLoaded} />}
                  </Stack.Screen>
                  {gameContent?.length > 0 && (
                    <Stack.Screen name="Game">
                      {() => (
                        <Game
                          gameContent={gameContent}
                          fetchNewContent={fetchNewContent}
                          topScores={topScores}
                          setTopScores={setTopScores}
                          attempts={attempts}
                          setAttempts={setAttempts}
                        />
                      )}
                    </Stack.Screen>
                  )}
                  {
                    <Stack.Screen name="EndGame">
                      {() => (
                        <EndGame
                          topScores={topScores}
                          save={save}
                          clearContent={clearContent}
                        />
                      )}
                    </Stack.Screen>
                  }
                  {
                    <Stack.Screen name="TopScores">
                      {() => (
                        <TopScores topScores={topScores} attempts={attempts} />
                      )}
                    </Stack.Screen>
                  }
                  {
                    <Stack.Screen name="Settings">
                      {() => (
                        <Settings
                          settings={settings}
                          setSettings={setSettings}
                          save={saveNewSettings}
                          resetTopScores={resetTopScores}
                        />
                      )}
                    </Stack.Screen>
                  }
                </Stack.Navigator>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </NavigationContainer>
    </SettingsContext.Provider>
  );
}
