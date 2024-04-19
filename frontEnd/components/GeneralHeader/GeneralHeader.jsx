import { s } from "./GeneralHeader.style";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Txt } from "../../components/Txt/Txt";

GeneralHeader.defaultProps = {
    tab: "",
    style: {},
    onExit: () => {},
}

export function GeneralHeader({tab, style, onExit}) {
    const nav = useNavigation();

    navigateHome = () => {
        onExit();
        nav.navigate("Home");
    }

    return (
      <View style={{...style, ...s.top}}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigateHome()}
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