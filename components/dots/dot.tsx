import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type DotProps = {
  index: number;
  activeIndex: SharedValue<number>;
  size: number;
};

export const Dot = ({ index, activeIndex, size }: DotProps) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isDotActive = index <= activeIndex.value;

    return {
      opacity: withTiming(isDotActive ? 1 : 0.3, {
        duration: 150,
      }),
    };
  }, []);

  return (
    <Animated.View
      key={index}
      style={[
        {
          width: size,
          height: size,
          backgroundColor: "white",
          borderRadius: size / 2,
        },
        rDotStyle,
      ]}
    />
  );
};
