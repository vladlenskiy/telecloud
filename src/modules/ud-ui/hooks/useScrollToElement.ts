import React, { useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenHalf = screenHeight / 2;

export const useScrollToElement = (
  scrollViewRef: any,
  incomingElementRef: any,
  opts: { scrollY: number | undefined; offset: number | undefined },
) => {
  const { scrollY = 0, offset = 0 } = opts;
  const selfElementRef = useRef(null);
  const elementRef = incomingElementRef || selfElementRef;
  const scrollToElement = useCallback(() => {
    if (elementRef?.current && scrollViewRef?.current && opts) {
      elementRef.current.measure((...measurements: number[]) => {
        const elementPositionY = measurements[5];
        setTimeout(() => {
          const isLowerThanMiddle = elementPositionY > screenHalf;
          if (isLowerThanMiddle) {
            const toMiddle = elementPositionY - screenHalf;
            scrollViewRef.current.scrollTo({
              y: scrollY + toMiddle + offset,
              animated: true,
            });
          }
        }, 100);
      });
    }
  }, [scrollViewRef, elementRef, opts]);
  return {
    elementRef,
    scrollToElement,
  };
};
