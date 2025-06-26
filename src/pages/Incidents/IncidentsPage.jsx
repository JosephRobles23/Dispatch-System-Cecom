import React from 'react';
import { Box, Typography } from '@mui/material';

const IncidentsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: 'text.primary', mb: 3 }}>
        Historial de Incidencias
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Vista detallada del historial de incidencias
      </Typography>
    </Box>
  );
};

export default IncidentsPage;