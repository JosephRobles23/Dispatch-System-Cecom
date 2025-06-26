import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import { NotificationsOutlined, AccountCircle } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            SJL
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 2, color: 'text.secondary' }}>
            Sistema de Despacho de Serenazgos
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton sx={{ color: 'text.primary' }}>
            <NotificationsOutlined />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32 }}>
            <AccountCircle />
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;