'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface ThemeContextType {
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Always ensure dark mode by removing data-theme attribute
    document.documentElement.removeAttribute('data-theme');
    setMounted(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
