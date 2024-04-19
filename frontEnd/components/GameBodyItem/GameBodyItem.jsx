import { s } from "./GameBodyItem.style";
import { Txt } from "../Txt/Txt";
import { TouchableOpacity} from "react-native";

export function GameBodyItem({word, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress(word)} style={s.container}>
      <Txt style={s.word}>{word}</Txt>
    </TouchableOpacity>
  );
}
