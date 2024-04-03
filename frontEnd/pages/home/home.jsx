import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./home.style";
import { Image } from "react-native";
import { Keypad } from "./Keypad/Keypad";
import * as React from "react";



export function Home() {

  const [ visible, setVisible ] = React.useState( false );

  const changeMenu = () => {setVisible( !visible ) };

    return (
      <View style={s.background}>
        <TouchableOpacity style={s.menuButton} onPress={changeMenu}>
          <Image source={require("../../assets/list.png")} style={s.menuIcon}/>
        </TouchableOpacity>
        {
          visible && (
            <View style={s.menu}>
              <TouchableOpacity style={s.menuItem} onPress={() => {alert("Coming Soon!")}}>
                <Image source={require("../../assets/trophy.png")} style={s.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={s.menuItem} onPress={() => {alert("Coming Soon!")}}>
                <Image source={require("../../assets/gear.png")} style={s.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={s.menuItem} onPress={() => {alert("Coming Soon!")}}>
                <Image source={require("../../assets/ranking.png")} style={s.menuIcon}/>
              </TouchableOpacity>
            </View>
          )
        }
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