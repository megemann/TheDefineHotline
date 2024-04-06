import { s } from "./Settings.style";
import { View, TouchableOpacity, Alert } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { GeneralHeader } from "../../components/GeneralHeader/GeneralHeader";
import { SettingsRow } from "../../components/SettingsRow/SettingsRow";
import * as React from "react";

export const DEFAULT_SETTINGS = {
  general: {
    topScoreTracking: true,
    highScoreIndicator: true,
    randomDifficulty: false,
    constantDifficulty: false,
  },
};

export function Settings({settings, setSettings, save, resetTopScores}) {

    function handleSetting(selected, title) {

        let tempSettings = settings;
        tempSettings.general[title] = selected;
        setSettings(settings);
    }

    return (
      <View style={s.background}>
        <GeneralHeader tab={"Settings"} style={{ height: "5%" }} onExit={() => save()} />

        <View style={s.container}>
          <Txt style={s.title}>General:</Txt>
          <SettingsRow title={"topScoreTracking"} selected={settings.general.topScoreTracking} setSelected={handleSetting} />
          <SettingsRow title={"highScoreIndicator"} selected={settings.general.highScoreIndicator} setSelected={handleSetting} />
          <SettingsRow title={"randomDifficulty"} selected={settings.general.randomDifficulty} setSelected={handleSetting}/>
          <SettingsRow title={"constantDifficulty"} selected={settings.general.constantDifficulty} setSelected={handleSetting} last={true}/>
          <TouchableOpacity style={s.resetButton} onPress={() => {
            Alert.alert(
              "DELETE ALL SCORES", 'Are you sure you want to delete all scoring data?',
              [
              {
                text: "I'm sure",
                onPress: () => {
                  resetTopScores();
                },
                style:"cancel"
              },
              {
                text: "Cancel"
              }]
            )
          }}>
            <Txt style={s.resetButtonText}>RESET ALL SCORES</Txt>
          </TouchableOpacity>
        </View>

        <View style={s.container}>
          <Txt style={s.title}>Online/Personal:</Txt>
          <SettingsRow />
          <SettingsRow />
          <SettingsRow />
          <SettingsRow last={true} />
          <Txt style={s.comingSoon}>COMING SOON</Txt>
        </View>
        <Txt style={s.confirmation}>(Hit 'Exit' in the top left corner to apply changes)</Txt>
      </View>
    );
}