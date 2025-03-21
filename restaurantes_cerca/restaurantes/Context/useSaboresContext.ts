import { useContext } from 'react';
import { SaboresContext } from './SaboresContext';

export const useSaboresContext = () => {
  return useContext(SaboresContext);
};