import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <AppBar 
      position="static" 
      className={`shadow-none ${colors.border.primary} border-b`}
      sx={{
        backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
        color: isDarkMode ? '#f1f5f9' : '#1e293b'
      }}
    >
      <Toolbar className="justify-between px-3">
        <Box className="flex items-center">
          <img 
            src="/logo-muni.png" 
            alt="Logo SJL" 
            className="w-30 h-10 mr-2"
            style={{ objectFit: 'contain' }}
          />
          <Typography variant="subtitle1" className={`${colors.secondary}`}>
            Sistema de Despacho de Serenazgos
          </Typography>
        </Box>
        
        <Box className="flex items-center gap-2">
          <IconButton 
            onClick={toggleTheme}
            className={`${colors.primary} ${colors.hover.primary} transition-colors`}
            title={isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <Avatar className="w-8 h-8">
            <AccountCircle />
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;