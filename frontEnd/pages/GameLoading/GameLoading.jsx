import * as React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { s } from "./GameLoading.style";
import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";

//this is used as a intermediate loading page while we are fetching from the API
export function GameLoading({ isLoaded }) {
  //will look better with animations
  const { params } = useRoute();

  const difficulty = params.difficulty;
  const nav = useNavigation();

  React.useEffect(() => {
    if (isLoaded) {
      nav.navigate("Game", { difficulty: difficulty });
    }
  }, [isLoaded]);

  return (
    <View style={s.container}>
      <Txt>Loading...</Txt>
    </View>
  );
}
