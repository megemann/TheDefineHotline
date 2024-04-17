import * as React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { s } from "./GameLoading.style";
import { Txt } from "../../components/Txt/Txt";
import Animated, * as Animate from "react-native-reanimated";
import { LoadingKeypad } from "./LoadingKeypad/LoadingKeypad";
import { CHOOSE_COLOR } from "../../util";

const loadingText = "L O A D I N G . . ."

//this is used as a intermediate loading page while we are fetching from the API
export function GameLoading({ isLoaded }) {
  //will look better with animations
  const { params } = useRoute();

  const [ran, setRan] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [currText, setCurrText] = React.useState("");
  const subText = params.difficulty;
  let color = CHOOSE_COLOR(params.difficulty, "green", "yellow", "red");

  //become visible after transition occurs
  const screenOpacity = Animate.useSharedValue(0);
  const screenScale = Animate.useSharedValue(1);
  const screenYPos = Animate.useSharedValue(0);

  const screenStyle = Animate.useAnimatedStyle(() => {
    return {
      opacity: screenOpacity.value,
      transform: [
        { scale: screenScale.value },
        { translateY: screenYPos.value },
      ]
    };
  })
  React.useEffect(() => {
    screenOpacity.value = Animate.withTiming(1, { 
      duration: 1000, 
      easing: Animate.Easing.poly(4),
    });
  }, [])

  React.useEffect(() => {
    if (ran) {
      if (!done) {
        let tempText = currText;
        if (tempText.length === loadingText.length) {
          setCurrText(loadingText.slice(0, 1));
        } else {
          tempText = loadingText.slice(0, tempText.length+2);
          setCurrText(tempText);
        }
      }
    }
  }, [ran])

  React.useEffect(() => {
    if (done) {
      setCurrText("CALLING...");
      setTimeout(() => {
        screenScale.value = Animate.withTiming(0, { duration: 500 });
        screenYPos.value = Animate.withTiming(-500, { duration: 500 });
        setTimeout(() => {
          nav.navigate("Game", { difficulty: difficulty });
        }, 400);
      }, 1000);
      
    }
  }, [done])

  const difficulty = params.difficulty;
  const nav = useNavigation();

  return (
    <Animated.View style={[s.container, screenStyle]}>
      <Txt style={s.text}> {currText} </Txt>
      {(done && (<Txt style={{color: color}}> {subText} mode</Txt>)) || (<Txt>{" "}</Txt>)}
      <LoadingKeypad isLoaded={isLoaded} setDone={setDone} setRan={setRan}/>
    </Animated.View>
  );
}
