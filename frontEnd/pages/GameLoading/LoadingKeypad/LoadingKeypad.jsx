import { s } from "./LoadingKeypad.style";
import * as React from "react";
import Animated, * as Animate from "react-native-reanimated";
import { Txt } from "../../../components/Txt/Txt";
import { View, Image } from "react-native";

export function LoadingKeypad({ isLoaded, setRan, setDone}) {
    const dialingRef = React.useRef(null);

    const animatedColors = 
    [
    Animate.useSharedValue("#BDBDBD"), 
    Animate.useSharedValue("#BDBDBD"), 
    Animate.useSharedValue("#BDBDBD"), 
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#BDBDBD"),
    Animate.useSharedValue("#42ab469c"),
    ]

    const animatedColorStyles = [
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[0].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[1].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[2].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[3].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[4].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[5].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[6].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[7].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[8].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[9].value
            }
        }),
        Animate.useAnimatedStyle(() => {
            return {
                backgroundColor: animatedColors[10].value
            }
        }),
    ]
    
    React.useEffect(() => {
        const dialing = setInterval(() => {
            let random = Math.floor(Math.random() * 9);
            animatedColors[random].value = Animate.withTiming("white", { duration: 125 }, () => {
                animatedColors[random].value = Animate.withTiming("#BDBDBD", { duration: 125 });
            });
            setRan(true);
            setRan(false);
        }, 350);
        dialingRef.current = dialing;
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            const ref = dialingRef.current;
            clearInterval(ref);
            setTimeout(() => {
                animatedColors[10].value = Animate.withTiming("white", { duration: 400 }, () => {
                animatedColors[10].value = Animate.withTiming("#42ab469c", { duration: 200 });
                });
                setTimeout(() => {
                    setDone(true);
                }, 400)
            }, 500)

        }
    }, [isLoaded])

    return ( <>
            <View style={s.container}>
                <View style={s.row}>
                    <Animated.View style={[s.button, animatedColorStyles[1]]}><Txt style={s.buttonTxt}>1</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[2]]}><Txt style={s.buttonTxt}>2</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[3]]}><Txt style={s.buttonTxt}>3</Txt></Animated.View>
                </View>
                <View style={s.row}>
                    <Animated.View style={[s.button, animatedColorStyles[4]]}><Txt style={s.buttonTxt}>4</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[5]]}><Txt style={s.buttonTxt}>5</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[6]]}><Txt style={s.buttonTxt}>6</Txt></Animated.View>
                </View>
                <View style={s.row}>
                    <Animated.View style={[s.button, animatedColorStyles[7]]}><Txt style={s.buttonTxt}>7</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[8]]}><Txt style={s.buttonTxt}>8</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[9]]}><Txt style={s.buttonTxt}>9</Txt></Animated.View>
                </View>
                <View style={s.row}>
                    <Animated.View style={s.button}><Txt style={s.buttonTxt}>*</Txt></Animated.View>
                    <Animated.View style={[s.button, animatedColorStyles[0]]}><Txt style={s.buttonTxt}>0</Txt></Animated.View>
                    <Animated.View style={s.button}><Txt style={s.buttonTxt}>#</Txt></Animated.View>
                </View>
                    <View style={s.row}>
                        <Animated.View style={[s.callButton, animatedColorStyles[10]]}>
                            <Image source={require("../../../assets/CallButton.png")} />
                        </Animated.View>
                    </View>
                </View>
            </>
    )
}