import React from 'react';
import { Box, Typography } from '@mui/material';

const HistoryPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: 'text.primary', mb: 3 }}>
        Historial Completo
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Registro histórico completo del sistema
      </Typography>
    </Box>
  );
};

export default HistoryPage;