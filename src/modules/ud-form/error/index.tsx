import React, { ReactChild } from 'react';
import { Error } from './styles';

type Props = { children: ReactChild };

const UDFormError = (props: Props) => {
  return <Error>{props.children}</Error>;
};

export default UDFormError;
