import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./home.style";
import { Image } from "react-native";
import { Keypad } from "./Keypad/Keypad";



export function Home() {

    return (
      <View style={s.background}>
        <TouchableOpacity style={s.menuButton}>
          <Image source={require("../../assets/MenuButton.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={s.avatarButton}>
          <Image source={require("../../assets/Avatar.png")} />
        </TouchableOpacity>
        <Txt style={s.title}>The Define Hot-line</Txt>
        <View style={s.keypad}>
          <Keypad
            onClick={() => {
              console.log("Clicked");
            }}
          />
        </View>
      </View>
    );
}