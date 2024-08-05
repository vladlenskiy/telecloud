import {
  useSharedValue,
  useAnimatedReaction,
  withTiming,
  interpolateColor,
  useAnimatedStyle,
  AnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

export enum ColorProps {
  BACKGROUND_COLOR = 'backgroundColor',
  COLOR = 'color',
  BORDER_COLOR = 'borderColor',
  BORDER_TOP_COLOR = 'borderTopColor',
  BORDER_BOTTOM_COLOR = 'borderBottomColor',
  BORDER_RIGHT_COLOR = 'borderRightColor',
  BORDER_LEFT_COLOR = 'borderLeftColor',
  TINT_COLOR = 'tintColor',
}

interface useColorInterpolationProps {
  transitionColors: { colors: string[]; property: ColorProps }[];
  toggle: boolean;
  duration?: number;
}

export default function useColorInterpolation(
  props: useColorInterpolationProps,
) {
  const { transitionColors, toggle, duration = 700 } = props;
  const animationToggle = useDerivedValue(() => {
    return toggle;
  });
  const interpolate = useSharedValue(animationToggle.value ? 0 : 1);

  useAnimatedReaction(
    () => animationToggle.value,
    (next, prev) => {
      if (next !== prev && prev !== null) {
        interpolate.value = withTiming(next ? 0 : 1, { duration });
      }
    },
  );

  const animatedColor: AnimatedStyle = useAnimatedStyle(() => {
    return transitionColors.reduce(
      (result: { [key: string]: string }, { property, colors }) => {
        result[property] = interpolateColor(interpolate.value, [0, 1], colors);
        return result;
      },
      {},
    );
  });

  return animatedColor;
}
