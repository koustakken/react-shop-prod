import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContex, Theme } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContex.Provider value={defaultProps}>
        {children}
    </ThemeContex.Provider>
  )
}

export default ThemeProvider