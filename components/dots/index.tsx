import { View } from "react-native";
import { ACTIVE_COLOR } from "../../src/constants";
import Animated, {
  useAnimatedStyle,
  withSpring,
  SharedValue,
} from "react-native-reanimated";
import { Dot } from "./dot";

type DotsProps = {
  count: number;
  activeIndex: SharedValue<number>;
};

const DOTS_SIZE = 10;
const DOTS_GAP = 20;

export const Dots = ({ count, activeIndex }: DotsProps) => {
  const rContainerStyle = useAnimatedStyle(() => {
    const width =
      DOTS_SIZE * (activeIndex.value + 1) + DOTS_GAP * (activeIndex.value + 1);
    return {
      width: withSpring(width, {
        mass: 0.6,
      }),
    };
  }, []);

  return (
    <View style={{ flexDirection: "row", gap: DOTS_GAP }}>
      {new Array(count).fill(0).map((_, index) => {
        return (
          <Dot
            key={index}
            index={index}
            activeIndex={activeIndex}
            size={DOTS_SIZE}
          />
        );
      })}
      <Animated.View
        style={[
          {
            height: DOTS_SIZE * 3,
            top: -DOTS_SIZE,
            left: -DOTS_GAP / 2,
            borderRadius: DOTS_SIZE * 2,
            borderCurve: "continuous",
            position: "absolute",
            backgroundColor: ACTIVE_COLOR,
            zIndex: -1,
          },
          rContainerStyle,
        ]}
      />
    </View>
  );
};
