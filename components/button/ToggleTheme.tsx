import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Button from './Button';

interface ToggleThemeProps {
   dark: boolean;
   setDark: (dark: boolean) => void;
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({ dark, setDark }) => {
   return (
      <Button.Round onClick={() => setDark(!dark)}>{dark ? <FaSun size='28' /> : <FaMoon size='24' />}</Button.Round>
   );
};
