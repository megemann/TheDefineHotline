import { Txt } from "../Txt/Txt";
import { s } from "./GameBody.style";
import { View } from "react-native";

export function GameBody() {
  return <View style={s.container}><Txt>game</Txt></View>;
}
