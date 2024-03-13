import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const IPHONE14HRATIO = 0.001184834123222749;
const IPHONE14WRATIO = 0.00256410256;


export function Difficulty({ setRoutedGame }) {

  

    const nav = useNavigation();

    const navigateToGame = (difficulty) => {
        setRoutedGame(true);
        nav.navigate("Loading", { difficulty: difficulty });
    }

    const { height, width } = useWindowDimensions();
    const HMULTIPLIER = IPHONE14HRATIO * height;
    const WMULTIPLIER = IPHONE14WRATIO * width;
    const AVGMULT = (0.5 * HMULTIPLIER + 0.5 * WMULTIPLIER)

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
        width: 800 * AVGMULT,
        height: 226 * AVGMULT,
        left: -200 * AVGMULT,
        top: 262 * AVGMULT,
        borderWidth: 3 * AVGMULT,
        borderColor: "black",
      },
      mediumTxt: {
        transform: [{ rotate: "45deg" }],
        position: "absolute",
        top: 15 * AVGMULT,
        left: 305 * AVGMULT,
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
        <TouchableOpacity style={s.easy} onPress={() => navigateToGame("Easy")}>
          <Image style={s.easyTxt} source={require("../../assets/Easy.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={s.medium} onPress={() => navigateToGame("Medium")}>
          <Image style={s.mediumTxt}source={require("../../assets/Medium.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={s.hard} onPress={() => navigateToGame("Hard")}>
          <Image style={s.hardTxt} source={require("../../assets/Hard.png")} />
        </TouchableOpacity>
      </>
    );
}