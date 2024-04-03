import { s } from "./TopScores.style";
import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import * as React from "react";
import { GeneralHeader } from "../../components/GeneralHeader/GeneralHeader";

export function TopScores({topScores, attempts}) {

    return (
      <>
        <View style={s.background}>
          <GeneralHeader tab={"Top Scores"} style={{height: "7%"}}/>
          <View style={s.container}>
            <View style={s.scoreContainer}>
              <View style={s.titleContainer}>
                <Txt style={{ ...s.title, color: "#52cd56ff", textAlign: "left" }}>Easy:</Txt>
                <Txt style={{ ...s.title, color: "#52cd56ff", textAlign: "right" }}>{attempts.easy} play(s)</Txt>
              </View>
              {topScores.easy.map((score, index) => {
                return (
                  <Txt key={index} style={s.score}>
                    {score}
                  </Txt>
                );
              })}
            </View>
            <View style={s.scoreContainer}>
              <View style={s.titleContainer}>
                <Txt style={{ ...s.title, color: "yellow", textAlign: "left" }}>Medium:</Txt>
                <Txt style={{ ...s.title, color: "yellow", textAlign: "right" }}>{attempts.medium} play(s)</Txt>
              </View>
              {topScores.medium.map((score, index) => {
                return (
                  <Txt key={index} style={s.score}>
                    {score}
                  </Txt>
                );
              })}
            </View>
            <View style={s.scoreContainer}>
              <View style={s.titleContainer}>
                <Txt style={{ ...s.title, color: "red", textAlign: "left" }}>Hard:</Txt>
                <Txt style={{ ...s.title, color: "red", textAlign: "right" }}>{attempts.hard} play(s)</Txt>
              </View>
              {topScores.hard.map((score, index) => {
                return (
                  <Txt key={index} style={s.score}>
                    {score}
                  </Txt>
                );
              })}
              <View style={s.divider} />
            </View>
          </View>
        </View>
      </>
    );
}