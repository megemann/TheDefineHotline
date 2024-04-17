import { useNavigation } from "@react-navigation/native";
import { s } from "./Keypad.style";
import { View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import Animated, * as Animate from "react-native-reanimated";

const halfRotate = 100;
const fullRotate = 200;
const fullWait = 500;
export function Keypad({setVisible}) {

  const scale = Animate.useSharedValue(1);
  const yPos = Animate.useSharedValue(0);
  const rotate = Animate.useSharedValue(0);
  const backgroundColor = Animate.useSharedValue("#42ab469c");
  
  const [trigger, setTrigger] = React.useState(false);

  const callButtonAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateY: yPos.value },
        { rotate: `${rotate.value}deg` },
      ],
      backgroundColor: backgroundColor.value,
    };
  })


  const nav = useNavigation();

  const navGameFinal = () => {
    setTrigger(false);
    setVisible(false);
    nav.navigate("Difficulty");
  }

  React.useEffect(() => {
    if (trigger) {
      backgroundColor.value = "#42ab46ff";
      scale.value = Animate.withTiming(7, { duration: fullWait });
      yPos.value = Animate.withTiming(-50, { duration: fullWait }, () => {
        rotate.value = Animate.withRepeat(
          Animate.withSequence(
            Animate.withTiming(45, { duration: halfRotate }), 
            Animate.withTiming(-45, { duration: fullRotate }), 
            Animate.withTiming(0, { duration: halfRotate }),
            Animate.withTiming(0, { duration: fullRotate })
          ), 2 /*# of reps*/,
          false /*reverse*/,
          () => {
            scale.value = Animate.withTiming(150, { duration: fullWait*2 })
            yPos.value = Animate.withTiming(20, { duration: fullWait*2 }, () => {
                  scale.value = 1;
                  yPos.value = 0;
                  rotate.value = 0;
                  backgroundColor.value = "#42ab469c";
            })
          },
        )
      });

    }
  }, [trigger]);

  //if the call button is pressed, start checking if the navigation needs to run
    React.useEffect(() => {
      if (trigger) {
        const checker = setInterval(() => {
          if (scale.value >= 70) {
            navGameFinal();
            clearInterval(checker);
          }
        }, 100);
        return () => clearInterval(checker);
      }
    }, [trigger]);

  return (
    <>
      <View style={s.row}>
        <View style={s.button} />
        <View style={s.button} />
        <View style={s.button} />
      </View>
      <View style={s.row}>
        <View style={s.button} />
        <View style={s.button} />
        <View style={s.button} />
      </View>
      <View style={s.row}>
        <View style={s.button} />
        <View style={s.button} />
        <View style={s.button} />
      </View>
      <View style={s.row}>
        <View style={s.button} />
        <View style={s.button} />
        <View style={s.button} />
      </View>
      <View style={s.row}>
          <Animated.View style={[s.callButton, callButtonAnimatedStyle]}>
            <TouchableOpacity style={s.callButtonContainer} onPress={() => setTrigger(true)}>
                <Image source={require("../../../assets/CallButton.png")} />
            </TouchableOpacity>
          </Animated.View>
      </View>
    </>
  );
}