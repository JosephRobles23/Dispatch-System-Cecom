import React from 'react';
import { Box, Typography } from '@mui/material';

const AgentsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: 'text.primary', mb: 3 }}>
        Gestión de Agentes
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Administración de agentes de serenazgo
      </Typography>
    </Box>
  );
};

export default AgentsPage;