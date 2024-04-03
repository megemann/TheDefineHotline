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
import { WordAPI } from "./api/vocab";
import { Game } from "./pages/Game/Game";
import { GameLoading } from "./pages/GameLoading/GameLoading";
import { EndGame } from "./pages/EndGame/EndGame";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
export default function App() {

  const [firstLoad, setFirstLoad] = React.useState(true);
  const [topScores, setTopScores] = React.useState();
  const [routedGame, setRoutedGame] = React.useState(false);
  const [reRenderGame, setRerenderGame] = React.useState(false);
  const [gameData, setGameData] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [gameContent, setGameContent] = React.useState([
    ["an evil spirit", "demon", "squiffiest", "antically", "pika"],
    [
      "the quality or state of being rocky",
      "rockinesses",
      "uh",
      "curbed",
      "poxier",
    ],
    [
      "to block off or stop up with a barricade",
      "barricade",
      "divergency",
      "waterwork",
      "phoneyed",
    ],
    ["ethylene", "ethenes", "prolonger", "erasers", "pearlash"],
    [
      "mental illness especially when limited in expression to one idea or area of thought",
      "monomania",
      "dichroism",
      "twain",
      "punned",
    ],
    [
      "a person taking a vacation : vacationer",
      "vacationist",
      "aerie",
      "consignee",
      "kumyses",
    ],
    [
      "assiduous in the pursuit of learning",
      "studiousness",
      "dustier",
      "mispositioned",
      "antefixa",
    ],
    [
      "to cause an eclipse of: such as",
      "eclipsed",
      "quadrilaterals",
      "summersets",
      "postapocalyptic",
    ],
    [
      "to strengthen (something, such as a machine) for better resistance to wear, stress, and abuse",
      "ruggedizations",
      "imparted",
      "raddling",
      "oxidize",
    ],
    [
      "owed or owing as a debt",
      "duenesses",
      "tapsters",
      "stockbroking",
      "upcurves",
    ],
    [
      "microminiaturized",
      "microminiature",
      "schussboomer",
      "crimson",
      "preharvest",
    ],
    [
      "the people of a religious faith as distinguished from its clergy",
      "laity",
      "brazing",
      "aeroplanes",
      "zamia",
    ],
    [
      "to compress the throat of : choke",
      "throttle",
      "perplexedly",
      "laborers",
      "heritors",
    ],
    [
      "the diffused and reflected light of the sky",
      "skylights",
      "brawled",
      "douzeper",
      "nurtural",
    ],
  ]);
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

  async function saveTopScores() {
    try {
      await AsyncStorage.setItem("@topScores", JSON.stringify(topScores));
    }
    catch (e) {
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
    }
    catch (e) {
      alert(e);
    }
  }

  React.useEffect(() => {
    loadTopScores();
  }, [])

  React.useEffect(() => {
    if (routedGame) {
      //fetchGameContent(difficulty);
    }
  }, [routedGame]);

  React.useEffect(() => {
    if (tempGameContent && routedGame) {
      setRoutedGame(false);
      setIsLoaded(true);
    }
  }, [tempGameContent, routedGame]);

React.useEffect(() => {
  if (reRenderGame) {
    setRerenderGame(false);
    setGameContent(tempGameContent);
  }
}, [reRenderGame])

  async function fetchGameContent(difficulty) {
    const wordResponse = await WordAPI.fetchGameContent(difficulty);
    setTempGameContent(wordResponse);
    console.log(wordResponse);
  }
  
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
                  <Stack.Screen name="Difficulty">
                    {() => <Difficulty setRoutedGame={setRoutedGame} />}
                  </Stack.Screen>
                  <Stack.Screen name="Loading">
                    {() => <GameLoading isLoaded={isLoaded}/>}
                  </Stack.Screen>
                  {
                  gameContent?.length > 0 && (
                    <Stack.Screen name="Game">
                      {() => <Game gameContent={gameContent} setRerender={setRerenderGame} topScores={topScores} setTopScores={setTopScores} />}
                    </Stack.Screen>
                  )}
                  { (
                    <Stack.Screen name="EndGame">
                      {() => <EndGame topScores={topScores} save={saveTopScores} />}
                    </Stack.Screen>
                  )}
                </Stack.Navigator>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

