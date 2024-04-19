import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";
const IPHONE14RATIO = 0.001184834123222749;

export function Txt({ children, style, ...restProps }) {
    const fontSize = style?.fontSize || s.txt.fontSize;
    const { height } = useWindowDimensions();

    return (
      <Text
        style={[
          s.txt,
          style,
          { fontSize: Math.round(fontSize * IPHONE14RATIO * height) },
        ]}
        {...restProps}
      >
        {children}
      </Text>
    );
}