import { Dispatch, SetStateAction } from 'react';
import { trigger } from 'react-native-haptic-feedback';

export const generateAnimationSequence = (
  setToggle: Dispatch<SetStateAction<boolean>>,
) => {
  return [
    {
      text: 'Облачное хранилище',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Без лимитов',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Удобный интерфейс',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Открытый исходный код',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Telecloud',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Облако',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Без лимитов',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Удобный интерфейс',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Открытый исходный код',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
    {
      text: 'Telecloud',
      delayBetweenSequence: 800,
    },
    {
      action: () =>
        setToggle(prevState => {
          trigger('impactMedium');
          return !prevState;
        }),
    },
  ];
};
