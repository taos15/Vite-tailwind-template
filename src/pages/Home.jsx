import React from 'react';
import { useSome } from '../utilities/MainContextProvider';

export const Home = () => {
  const { someState, setSomeState } = useSome();

  return <h1>{someState}</h1>;
};
