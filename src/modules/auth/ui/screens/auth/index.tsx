import React, { useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import LoginForm from '@src/modules/auth/ui/components/login-form';
import LoginCode from '@src/modules/auth/ui/components/login-code';
import AnimatedBackground from '@src/modules/auth/ui/components/animated-background';
import {
  Country,
  FlagType,
  getAllCountries,
} from 'react-native-country-picker-modal';
import LoginPassword from '@src/modules/auth/ui/components/login-password';

export default function AuthScreen() {
  const carouselRef = useRef(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [countries, setCountries] = useState<Country[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const onSlideContent = (index: number, position: number) => {
    setActiveSlide(index);
    //@ts-ignore
    carouselRef.current?.next();
    //@ts-ignore
    bottomSheetRef?.current.snapToPosition(position, { duration: 500 });
  };

  const data = useMemo(() => {
    return [
      {
        id: 0,
        comp: (
          <LoginForm
            onSlideContent={onSlideContent}
            bottomSheetRef={bottomSheetRef}
            countries={countries}
            activeSlide={activeSlide}
          />
        ),
      },
      {
        id: 1,
        comp: (
          <LoginCode
            onSlideContent={onSlideContent}
            activeSlide={activeSlide}
          />
        ),
      },
      {
        id: 2,
        comp: (
          <LoginPassword
            activeSlide={activeSlide}
            bottomSheetRef={bottomSheetRef}
          />
        ),
      },
    ];
  }, [countries, activeSlide, bottomSheetRef, onSlideContent]);

  useEffect(() => {
    getAllCountries(FlagType.FLAT).then(data => setCountries(data));
  }, []);

  return (
    <>
      <AnimatedBackground />

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[140]}
        backgroundStyle={{
          backgroundColor: '#121212',
        }}
        keyboardBehavior={'interactive'}
        handleIndicatorStyle={{ backgroundColor: 'white' }}>
        <Carousel
          ref={carouselRef}
          defaultIndex={0}
          loop={false}
          autoPlay={false}
          width={Dimensions.get('screen').width}
          data={data}
          renderItem={({ item }) => {
            return item.comp;
          }}
          enabled={false}
          scrollAnimationDuration={500}
        />
      </BottomSheet>
    </>
  );
}
