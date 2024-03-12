import { s } from "./Game.style";
import * as React from "react";

export function Game({difficulty, GameContent}) {

    let definitions = [];
    let answers = [];
    for (let i = 0; i < GameContent.length; i++) {
        definitions.push(GameContent[i][0]);
        answers.push(GameContent[i][1]);
        answers.push(GameContent[i][2]);
        answers.push(GameContent[i][3]);
        answers.push(GameContent[i][4]);
    }

    return (
        <View style={s.container}>
            <GameHeader difficulty={difficulty} definitions={definitions}/>
            <GameBody />
        </View>
    );
}