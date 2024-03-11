import { View, Image, TouchableOpacity } from "react-native";
import { s } from "./Keypad.style";
import callButton from "../../../assets/CallButton.png";
import { useNavigation } from "@react-navigation/native";

export function Keypad({onClick}) {

    const nav = useNavigation();

    const navGame = () => {
        //nav.navigate("Game");
        alert("ran");
    }
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
            <TouchableOpacity style={s.callButton} onPress={navGame}>
                <Image source={require("../../../assets/CallButton.png")} />
            </TouchableOpacity>
        </View>
      </>
    );
}