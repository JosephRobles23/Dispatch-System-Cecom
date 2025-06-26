import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const ReportsPanel = () => {
  const stats = [
    { title: 'Incidencias Hoy', value: '12', color: 'primary.main' },
    { title: 'Resueltas', value: '8', color: 'success.main' },
    { title: 'Pendientes', value: '4', color: 'warning.main' },
    { title: 'Agentes Activos', value: '24', color: 'info.main' },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
        Estadísticas del día
      </Typography>
      
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {stat.title}
                </Typography>
                <Typography variant="h4" sx={{ color: stat.color, fontWeight: 'bold' }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReportsPanel;