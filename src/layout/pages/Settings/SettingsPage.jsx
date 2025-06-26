import React from 'react';
import { Box, Typography } from '@mui/material';

const SettingsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: 'text.primary', mb: 3 }}>
        Configuraciones del Sistema
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Ajustes y configuración del sistema
      </Typography>
    </Box>
  );
};

export default SettingsPage;