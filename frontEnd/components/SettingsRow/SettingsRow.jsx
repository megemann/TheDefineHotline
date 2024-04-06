import { s } from "./SettingsRow.style";
import { View, TouchableOpacity} from "react-native";
import { Txt } from "../../components/Txt/Txt";
import * as React from "react";

SettingsRow.defaultProps = {
    title: "",
    selected: false,
    setSelected: () => {},
    last: false
}

const titleList = {
    topScoreTracking: "Top Score Tracking",
    highScoreIndicator: "High Score Indicator",
    randomDifficulty: "Random Difficulty",
    constantDifficulty: "Constant Difficulty"
}

export function SettingsRow({title, selected, setSelected, last}) {

    let displayTitle = titleList[title];
    const [selfSelected, setSelfSelected] = React.useState(selected);

    return (
      <View style={{ width: "100%" }}>
        <View style={s.divider} />
        <View style={s.row}>
          {title && (
            <>
              <Txt style={s.rowTitle}>{displayTitle}</Txt>
              <TouchableOpacity
                style={selfSelected ? s.rowButtonOn : s.rowButtonOff}
                onPress={() => {setSelected(!selfSelected, title); setSelfSelected(!selfSelected)}}
              >
                <View style={selfSelected ? s.circleOn : s.circleOff} />
              </TouchableOpacity>
            </>
          )}
        </View>
        {last && <View style={s.divider} />}
      </View>
    );
}