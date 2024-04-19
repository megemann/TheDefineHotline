import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const IPHONE14HRATIO = 0.001184834123222749;
const IPHONE14WRATIO = 0.00256410256;
import * as React from "react";
import { SettingsContext } from "../../SettingsContext";
import Animated, * as Animate from "react-native-reanimated";


export function Difficulty({ setRoutedGame, prevDifficulty, setPrevDifficulty }) {
  const easyYPos = Animate.useSharedValue(0);
  const easyXPos = Animate.useSharedValue(0);
  const easyScale = Animate.useSharedValue(1);
  const easyZIndex = Animate.useSharedValue(1);
  const mediumYPos = Animate.useSharedValue(0);
  const mediumXPos = Animate.useSharedValue(0);
  const mediumScale = Animate.useSharedValue(1);
  const mediumZIndex = Animate.useSharedValue(1);
  const hardYPos = Animate.useSharedValue(0);
  const hardXPos = Animate.useSharedValue(0);
  const hardScale = Animate.useSharedValue(1);
  const hardZIndex = Animate.useSharedValue(1);

  const nav = useNavigation();

  const [focus, setFocus] = React.useState(null);
  const [lastFocus, setLastFocus] = React.useState(null);
  const [nextFocus, setNextFocus] = React.useState(null);

  const easyAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: easyYPos.value },
        { translateX: easyXPos.value },
        { scale: easyScale.value },
        {rotate: "-45deg"}
      ],
      zIndex: easyZIndex.value,
    };
  });
  
  const mediumAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: mediumYPos.value },
        { translateX: mediumXPos.value },
        { scale: mediumScale.value },
        {rotate: "-45deg"}
      ],
      zIndex: mediumZIndex.value,
    };
  });
  
  const hardAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: hardYPos.value },
        { translateX: hardXPos.value },
        { scale: hardScale.value },
        {rotate: "-45deg"}
      ],
      zIndex: hardZIndex.value,
    };
  });

  const handlePress = (difficulty) => {
    if (focus == difficulty) {
      //transition out of page
      if (difficulty == "easy") {
        easyScale.value = Animate.withTiming(6, { duration: 500 });
      } else if (difficulty == "medium") {
        mediumScale.value = Animate.withTiming(6, { duration: 500 });
        mediumYPos.value = Animate.withTiming(-500, { duration: 500 });
        mediumXPos.value = Animate.withTiming(500, { duration: 500 });
      } else {
        hardScale.value = Animate.withTiming(6, { duration: 500 });
      }
      setRoutedGame(true);
      setPrevDifficulty(difficulty);
      nav.navigate("Loading", { difficulty: difficulty });
    } else if (focus) {
      //if other button was clicked, focus that button
      setLastFocus(focus);
      setNextFocus(difficulty);
      setFocus(null);
    } else {
      //beginning focus
      setFocus(difficulty);
    }
  };

  React.useEffect(() => {
    //enlarge focused button and move other 2 accordingly
    if (focus == "easy") {
        easyScale.value = Animate.withTiming(1.65, {duration: 500});
        easyZIndex.value = 2;
        mediumYPos.value = Animate.withTiming(70, {duration: 500});
        mediumXPos.value = Animate.withTiming(70, {duration: 500});
        hardXPos.value = Animate.withTiming(70, {duration: 500});
        hardYPos.value = Animate.withTiming(70, {duration: 500});
    } else if (focus == "medium") {
        mediumScale.value = Animate.withTiming(1.65, {duration: 500});
        mediumXPos.value = Animate.withTiming(60, {duration: 500});
        mediumYPos.value = Animate.withTiming(-60, {duration: 500});
        mediumZIndex.value = 2;
        easyYPos.value = Animate.withTiming(-50, {duration: 500});
        easyXPos.value = Animate.withTiming(-50, {duration: 500});
        hardXPos.value = Animate.withTiming(50, {duration: 500});
        hardYPos.value = Animate.withTiming(51, {duration: 500});
    } else if (focus == "hard") {
        hardScale.value = Animate.withTiming(1.65, {duration: 500});
        hardZIndex.value = 2;
        easyYPos.value = Animate.withTiming(-70, {duration: 500});
        easyXPos.value = Animate.withTiming(-70, {duration: 500});
        mediumXPos.value = Animate.withTiming(-70, {duration: 500});
        mediumYPos.value = Animate.withTiming(-70, {duration: 500});
    } else {
      if (lastFocus == "easy") {
        easyXPos.value = Animate.withTiming(0, {duration: 500});
        easyYPos.value = Animate.withTiming(0, {duration: 500});
        easyScale.value = Animate.withTiming(1, {duration: 500}, () => {
          easyZIndex.value = 1;
        });
        mediumXPos.value = Animate.withTiming(0, {duration: 500});
        mediumYPos.value = Animate.withTiming(0, {duration: 500});
        hardXPos.value = Animate.withTiming(0, {duration: 500});
        hardYPos.value = Animate.withTiming(0, {duration: 500});
      } else if (lastFocus == "medium") {
        //special case, other 2 move differently 
        mediumXPos.value = Animate.withTiming(0, {duration: 500});
        mediumYPos.value = Animate.withTiming(0, {duration: 500});
        mediumScale.value = Animate.withTiming(1, {duration: 500},() => {
          mediumZIndex.value = 1;
        });
        easyXPos.value = Animate.withTiming(0, {duration: 500});
        easyYPos.value = Animate.withTiming(0, {duration: 500});
        hardXPos.value = Animate.withTiming(0, {duration: 500});
        hardYPos.value = Animate.withTiming(0, {duration: 500});
      } else if (lastFocus == "hard") {
        hardXPos.value = Animate.withTiming(0, {duration: 500});
        hardYPos.value = Animate.withTiming(0, {duration: 500});
        hardScale.value = Animate.withTiming(1, {duration: 500}, () => {
          hardZIndex.value = 1;
        });
        easyXPos.value = Animate.withTiming(0, {duration: 500});
        easyYPos.value = Animate.withTiming(0, {duration: 500});
        mediumXPos.value = Animate.withTiming(0, {duration: 500});
        mediumYPos.value = Animate.withTiming(0, {duration: 500});
      }
      setLastFocus(null);
      setFocus(nextFocus);
      setNextFocus(null);
    }
  }, [focus]);
  //fetch from our settings (BUGGY WHEN BOTH TRUE)
  const randomDifficulty =
    React.useContext(SettingsContext).general.randomDifficulty;
  const constantDifficulty =
    React.useContext(SettingsContext).general.constantDifficulty;

  //gather information on our users screen
  const { height, width } = useWindowDimensions();
  const HMULTIPLIER = IPHONE14HRATIO * height;
  const WMULTIPLIER = IPHONE14WRATIO * width;
  const AVGMULT = 0.5 * HMULTIPLIER + 0.5 * WMULTIPLIER;

  React.useEffect(() => {
    if (constantDifficulty) {
      if (prevDifficulty !== null) {
        handlePress(prevDifficulty);
      }
    }
    if (randomDifficulty) {
      const rand = Math.floor(Math.random() * 3) + 1;
      console.log(rand);
      let difficulty = "";
      if (rand === 1) {
        difficulty = "easy";
      } else if (rand === 2) {
        difficulty = "medium";
      } else {
        difficulty = "hard";
      }
      setPrevDifficulty(difficulty);
      handlePress(difficulty);
    }
  }, []);

  //average multiples allow to scale for different screen sizes
  const s = StyleSheet.create({
    easy: {
      position: "absolute",
      backgroundColor: "#52cd56ff",
      transform: [{ rotate: "-45deg" }],
      width: 600 * AVGMULT,
      height: 320 * AVGMULT,
      left: -202 * AVGMULT,
      top: -68 * AVGMULT,
      borderWidth: 3 * AVGMULT,
      borderColor: "black",
    },
    easyTxt: {
      transform: [{ rotate: "45deg" }],
      position: "absolute",
      top: 160 * AVGMULT,
      left: 220 * AVGMULT,
    },
    medium: {
      position: "absolute",
      backgroundColor: "#e7d04f",
      transform: [{ rotate: "-45deg" }],
      width: 1200 * AVGMULT,
      height: 226 * AVGMULT,
      left: -290 * AVGMULT,
      top: 153 * AVGMULT,
      borderWidth: 3 * AVGMULT,
      borderColor: "black",
    },
    mediumTxt: {
      transform: [{ rotate: "45deg" }],
      position: "absolute",
      top: 15 * AVGMULT,
      left: 355 * AVGMULT,
    },
    hard: {
      position: "absolute",
      backgroundColor: "#de2929ff",
      transform: [{ rotate: "-45deg" }],
      width: 800 * AVGMULT,
      height: 320 * AVGMULT,
      left: -102 * AVGMULT,
      top: 503 * AVGMULT,
      borderWidth: 3 * AVGMULT,
      borderColor: "black",
    },
    hardTxt: {
      transform: [{ rotate: "45deg" }],
      position: "absolute",
      top: 20 * AVGMULT,
      left: 360 * AVGMULT,
    },
  });

  return (
    <>
      <Animated.View style={[s.easy, easyAnimatedStyle]}>
        <TouchableOpacity style={{flex:1}} onPress={() => handlePress("easy")}>
          <Image style={s.easyTxt} source={require("../../assets/Easy.png")} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[s.medium, mediumAnimatedStyle]}>
        <TouchableOpacity style={{flex:1}} onPress={() => handlePress("medium")}> 
          <Image style={s.mediumTxt}source={require("../../assets/Medium.png")}/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style = {[s.hard, hardAnimatedStyle]}>
      <TouchableOpacity style={{flex:1}} onPress={() => handlePress("hard")}>
        <Image style={s.hardTxt} source={require("../../assets/Hard.png")} />
      </TouchableOpacity>
      </Animated.View>
    </>
  );
}