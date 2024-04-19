import { s } from "./GameBody.style";
import * as React from "react";
import { View } from "react-native";
import { GameBodyItem } from "../GameBodyItem/GameBodyItem";

export function GameBody({ currentAnswers, setLastCorrect }) {
  
  const [randomizedAnswers, setRandomizedAnswers] = React.useState([]);

  React.useEffect(() => {
    //randomizes every prop update
    const copyCurr = [...currentAnswers];
    const tempRandomizedAnswers = [];
    while (copyCurr.length > 0) {
      const randomIndex = Math.floor(Math.random() * copyCurr.length);
      tempRandomizedAnswers.push(copyCurr[randomIndex]);
      copyCurr.splice(randomIndex, 1);
    }
    setRandomizedAnswers(tempRandomizedAnswers);
  }, [currentAnswers]);
  

  const onPress = (answer) => {
    if (answer === currentAnswers[0]) {
      setLastCorrect(true);
    } else {
      setLastCorrect(false);
    }
  }

  return( <View style={s.container}>
    {randomizedAnswers.map((def, index) => <GameBodyItem onPress={onPress} key={index} word={def} />)}
  </View> );
}
