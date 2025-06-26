import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Por defecto modo oscuro

  // Cargar tema guardado del localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Guardar tema en localStorage y aplicar clase al documento
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Colores principales
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-slate-400' : 'text-gray-600',
      accent: isDarkMode ? 'text-blue-500' : 'text-blue-600',
      
      // Fondos
      background: {
        primary: isDarkMode ? 'bg-slate-900' : 'bg-gray-50',
        secondary: isDarkMode ? 'bg-slate-800' : 'bg-white',
        tertiary: isDarkMode ? 'bg-slate-700' : 'bg-gray-100',
        card: isDarkMode ? 'bg-slate-800/95' : 'bg-white/95',
        overlay: isDarkMode ? 'bg-slate-900/85' : 'bg-white/85',
      },
      
      // Bordes
      border: {
        primary: isDarkMode ? 'border-white/10' : 'border-gray-200',
        secondary: isDarkMode ? 'border-white/20' : 'border-gray-300',
      },
      
      // Estados
      hover: {
        primary: isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100',
        secondary: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200',
      },
      
      // Botones
      button: {
        primary: isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600',
        secondary: isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300',
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 