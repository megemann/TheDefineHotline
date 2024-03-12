import { s } from "./GameBody.style";
import { View } from "react-native";

export function GameBody() {
  return <View style={s.container}>{children}</View>;
}
