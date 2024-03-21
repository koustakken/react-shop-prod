import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContexProps {
    theme?: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContex = createContext<ThemeContexProps>({} as ThemeContexProps);
export const LOCAL_STORAGE_THEME_KEY = 'theme';

