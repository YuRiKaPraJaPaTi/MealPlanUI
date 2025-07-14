// ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { themes } from './theme';

const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prev => (prev.name === 'light' ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
