import React from 'react';
import { Box, Typography } from '@mui/material';

const TeamsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: 'text.primary', mb: 3 }}>
        Equipos en Ruta
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Gestión de equipos y vehículos en servicio
      </Typography>
    </Box>
  );
};

export default TeamsPage;