import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const ReportsPanel = () => {
  const stats = [
    { title: 'Incidencias Hoy', value: '12', color: 'blue' },
    { title: 'Resueltas', value: '8', color: 'green' },
    { title: 'Pendientes', value: '4', color: 'yellow' },
    { title: 'Agentes Activos', value: '24', color: 'blue' },
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'yellow': return 'text-yellow-500';
      default: return 'text-blue-500';
    }
  };

  return (
    <Box className="p-2">
      <Typography variant="subtitle2" className="text-slate-400 mb-2">
        Estadísticas del día
      </Typography>
      
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} key={index}>
            <Card className="bg-slate-800">
              <CardContent className="p-2 last:pb-2">
                <Typography variant="caption" className="text-slate-400">
                  {stat.title}
                </Typography>
                <Typography variant="h4" className={`${getColorClass(stat.color)} font-bold`}>
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