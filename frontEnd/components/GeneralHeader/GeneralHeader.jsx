import { s } from "./GeneralHeader.style";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Txt } from "../../components/Txt/Txt";

export function GeneralHeader({tab, style}) {
    const nav = useNavigation();

    return (
      <View style={{...style, ...s.top}}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => nav.navigate("Home")}
        >
          <Txt style={s.backSign}>{"<"}</Txt>
          <Txt style={s.exit}> Exit</Txt>
        </TouchableOpacity>
        <View style={s.spacer} />
        <Txt style={s.tab}>Tab: </Txt>
        <Txt style={s.tabLabel}>{tab}</Txt>
      </View>
    );
}