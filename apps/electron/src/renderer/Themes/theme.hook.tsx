import { useState } from 'react';
import DarkTheme from './dark.theme';
import LightTheme from './light.theme';

const useTheme = () => {
  const [dark, setDark] = useState<boolean>(true);
  const toggleTheme = () => setDark((current) => !current);

  const selectedTheme = dark ? DarkTheme : LightTheme;

  return { selectedTheme, toggleTheme, dark };
};

export default useTheme;
