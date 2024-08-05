import useColorInterpolation, {
  ColorProps,
} from '@src/modules/ud-ui/hooks/useColorInterpolation';
import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import { styles } from '@src/modules/auth/ui/screens/auth/styles';
import * as S from '@src/modules/auth/ui/screens/auth/styles';
import { TypeAnimation } from 'react-native-type-animation';
import { generateAnimationSequence } from '@src/modules/auth/ui/components/animated-background/helpers';

export default function AnimatedBackground() {
  const [toggle, setToggle] = useState(false);

  const interpolateColorsStyle = useColorInterpolation({
    transitionColors: [
      {
        colors: ['#008B8B', 'black'],
        property: ColorProps.BACKGROUND_COLOR,
      },
    ],
    toggle,
    duration: 800,
  });

  return (
    <>
      <Animated.View
        style={[interpolateColorsStyle, styles.animatedBackground]}
      />
      <S.TypeAnimationContainer>
        <TypeAnimation
          sequence={generateAnimationSequence(setToggle)}
          cursor={false}
          deletionSpeed={1}
          style={styles.typeAnimation}
        />
      </S.TypeAnimationContainer>
    </>
  );
}
