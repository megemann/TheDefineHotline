import * as React from "react";
import { s } from "./SettingsRow.style";
import { View, TouchableOpacity} from "react-native";
import { Txt } from "../../components/Txt/Txt";

SettingsRow.defaultProps = {
    title: "",
    selected: false,
    setSelected: () => {},
    last: false
}

//these are our titles so we can display items without them being the same name as in our settings objects
const titleList = {
    topScoreTracking: "Top Score Tracking",
    highScoreIndicator: "High Score Indicator",
    randomDifficulty: "Random Difficulty",
    constantDifficulty: "Constant Difficulty"
}

export function SettingsRow({title, selected, setSelected, last}) {

    let displayTitle = titleList[title];
    //used for updating style
    const [selfSelected, setSelfSelected] = React.useState(selected); //still using selected to prevent time delay when setting states

    return (
      <View style={{ width: "100%" }}>
        <View style={s.divider} />
        <View style={s.row}>
          {title && (
            <>
              <Txt style={s.rowTitle}>{displayTitle}</Txt>
              <TouchableOpacity
                style={selfSelected ? s.rowButtonOn : s.rowButtonOff}
                onPress={() => {setSelected(!selfSelected, title); setSelfSelected(!selfSelected) /*self selected is neccesary for correctly displaying*/}}
              >
                <View style={selfSelected ? s.circleOn : s.circleOff} />
              </TouchableOpacity>
            </>
          )}
        </View>
        {/*add last divider if needed*/last && <View style={s.divider} />}
      </View>
    );
}