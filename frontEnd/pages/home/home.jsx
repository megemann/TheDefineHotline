import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./home.style";
import { Image } from "react-native";
import { Keypad } from "./Keypad/Keypad";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, * as Animate from "react-native-reanimated";


export function Home() {
  const nav = useNavigation();

  const [visible, setVisible] = React.useState(false);
  const changeMenu = () => {
    setVisible(!visible);
  };
  
  const topScoresAnimY = Animate.useSharedValue(17);
  const settingsAnimY = Animate.useSharedValue(17);
  const leaderboardAnimY = Animate.useSharedValue(17);
  const topScoresOpacity = Animate.useSharedValue(0);
  const settingsOpacity = Animate.useSharedValue(0);
  const leaderboardOpacity = Animate.useSharedValue(0);

  const topScoresAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      top: topScoresAnimY.value,
      opacity: topScoresOpacity.value
    };
  });

  const settingsAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      top: settingsAnimY.value,
      opacity: settingsOpacity.value
    };
  });

    const leaderboardAnimatedStyle = Animate.useAnimatedStyle(() => {
    return {
      top: leaderboardAnimY.value,
      opacity: leaderboardOpacity.value
    };
  });

  //a general navigation function
  const navPlace = (title) => {
    setVisible( false );
    nav.navigate(title);
  }

  //menu dropdown animation
  React.useEffect(() => {
    if (visible) {
      //menu is opening
      topScoresAnimY.value = Animate.withTiming(20, { duration: 300 });
      settingsAnimY.value = Animate.withTiming(97, { duration: 400 });
      leaderboardAnimY.value = Animate.withTiming(174, { duration: 500 });
      topScoresOpacity.value = Animate.withTiming(1, { duration: 300 });
      settingsOpacity.value = Animate.withTiming(1, { duration: 400 });
      leaderboardOpacity.value = Animate.withTiming(1, { duration: 500 });
    } else {
      //menu is closing
      topScoresAnimY.value = Animate.withTiming(-57, { duration: 300 }, () => {
        topScoresOpacity.value = 0;
      });
      settingsAnimY.value = Animate.withTiming(-57, { duration: 400 }, () => {
        settingsOpacity.value = 0;
      });
      leaderboardAnimY.value = Animate.withTiming(-57, { duration: 500 }, () => {
        leaderboardOpacity.value = 0;
      });
    }
  },[visible]);

    return (
      <View style={s.background}>
        <TouchableOpacity style={s.menuButton} onPress={changeMenu}>
          <Image source={require("../../assets/list.png")} style={s.menuIcon}/>
        </TouchableOpacity>
          <View style={s.menu}>
            <Animated.View style={[s.menuItem, topScoresAnimatedStyle]}>
              <TouchableOpacity style={s.menuTouchable}  onPress={() => navPlace("TopScores")}>
                <Image source={require("../../assets/trophy.png")} style={s.menuIcon}/>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[s.menuItem, settingsAnimatedStyle]}>
              <TouchableOpacity style={s.menuTouchable}  onPress={() => navPlace("Settings")}>
                <Image source={require("../../assets/gear.png")} style={s.menuIcon}/>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[s.menuItem, leaderboardAnimatedStyle]}>
              <TouchableOpacity style={s.menuTouchable} onPress={() => {alert("Coming Soon!")}}>
                <Image source={require("../../assets/ranking.png")} style={s.menuIcon}/>
              </TouchableOpacity>
            </Animated.View>
          </View>
        <TouchableOpacity style={s.avatarButton} onPress={() => {alert("Coming Soon!")}}>
          <Image source={require("../../assets/Avatar.png")} />
        </TouchableOpacity>
        <Txt style={s.title}>The Define Hot-line</Txt>
        <View style={s.keypad}>
          <Keypad setVisible={setVisible}/>
        </View>
      </View>
    );
}