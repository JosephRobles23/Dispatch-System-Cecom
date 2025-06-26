import React from 'react';
import { Box, Fab, Card, CardContent, Typography, Grid, Chip } from '@mui/material';
import { Plus, UserPlus, Navigation, MapPin, Clock, AlertTriangle } from 'lucide-react';

const MapPage = () => {
  // Datos de ejemplo para los widgets informativos
  const mapStats = [
    { label: 'Incidencias Activas', value: '12', color: 'error' },
    { label: 'Equipos en Ruta', value: '8', color: 'warning' },
    { label: 'Agentes Disponibles', value: '24', color: 'success' },
    { label: 'Tiempo Promedio Respuesta', value: '8 min', color: 'info' }
  ];

  const recentActivity = [
    { id: 1, action: 'Nueva incidencia reportada', location: 'Av. Javier Prado', time: '2 min ago', type: 'incident' },
    { id: 2, action: 'Equipo despachado', location: 'Jr. Los Olivos', time: '5 min ago', type: 'dispatch' },
    { id: 3, action: 'Incidencia resuelta', location: 'Plaza San Martín', time: '8 min ago', type: 'resolved' }
  ];

  return (
    <Box className="relative h-full w-full pointer-events-none">
      {/* Action Buttons */}
      <Box className="absolute top-4 right-4 flex gap-2 z-[1001] pointer-events-auto">
        <Fab 
          color="primary" 
          size="medium"
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Plus size={20} />
        </Fab>
        <Fab 
          color="primary" 
          size="medium"
          className="bg-yellow-500 text-black hover:bg-yellow-600"
        >
          <UserPlus size={20} />
        </Fab>
      </Box>

      {/* Information Panel - Top Left */}
      {/* <Card className="absolute top-4 left-4 w-75 bg-slate-800/95 backdrop-blur-xl border border-white/10 z-[1001] pointer-events-auto">
        <CardContent className="p-3">
          <Typography variant="h6" className="text-white mb-2 font-bold flex items-center gap-1">
            <MapPin size={20} />
            Mapa de Incidencias
          </Typography>
          <Grid container spacing={2}>
            {mapStats.map((stat, index) => (
              <Grid item xs={6} key={index}>
                <Box className="text-center">
                  <Typography 
                    variant="h5" 
                    className={`font-bold ${
                      stat.color === 'error' ? 'text-red-500' :
                      stat.color === 'warning' ? 'text-yellow-500' :
                      stat.color === 'success' ? 'text-green-500' :
                      'text-blue-500'
                    }`}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" className="text-slate-400 text-xs">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card> */}

      {/* Recent Activity Panel - Bottom Left */}
      <Card className="absolute bottom-4 left-4 w-87.5 max-h-62.5 bg-slate-800/95 backdrop-blur-xl border border-white/10 z-[1001] pointer-events-auto">
        <CardContent className="p-3">
          <Typography variant="h6" className="text-white mb-2 font-bold flex items-center gap-1">
            <Clock size={20} />
            Actividad Reciente
          </Typography>
          <Box className="max-h-37.5 overflow-y-auto">
            {recentActivity.map((activity) => (
              <Box key={activity.id} className="mb-2 last:mb-0">
                <Box className="flex items-center gap-1 mb-0.5">
                  <Chip 
                    size="small" 
                    label={activity.type === 'incident' ? 'Incidencia' : activity.type === 'dispatch' ? 'Despacho' : 'Resuelta'}
                    color={activity.type === 'incident' ? 'error' : activity.type === 'dispatch' ? 'warning' : 'success'}
                    className="text-xs"
                  />
                  <Typography variant="caption" className="text-slate-400">
                    {activity.time}
                  </Typography>
                </Box>
                <Typography variant="body2" className="text-white text-sm">
                  {activity.action}
                </Typography>
                <Typography variant="caption" className="text-slate-400 flex items-center gap-0.5">
                  <Navigation size={12} />
                  {activity.location}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Legend Panel - Bottom Right */}
      <Card className="absolute bottom-4 right-4 w-50 bg-slate-800/95 backdrop-blur-xl border border-white/10 z-[1001] pointer-events-auto">
        <CardContent className="p-2">
          <Typography variant="subtitle2" className="text-white mb-1 font-bold">
            Leyenda
          </Typography>
          <Box className="flex flex-col gap-1">
            <Box className="flex items-center gap-1">
              <Box className="w-3 h-3 bg-red-500 rounded-full" />
              <Typography variant="caption" className="text-slate-400">
                Incidencias Críticas
              </Typography>
            </Box>
            <Box className="flex items-center gap-1">
              <Box className="w-3 h-3 bg-yellow-500 rounded-full" />
              <Typography variant="caption" className="text-slate-400">
                Equipos en Ruta
              </Typography>
            </Box>
            <Box className="flex items-center gap-1">
              <Box className="w-3 h-3 bg-green-500 rounded-full" />
              <Typography variant="caption" className="text-slate-400">
                Incidencias Resueltas
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MapPage;