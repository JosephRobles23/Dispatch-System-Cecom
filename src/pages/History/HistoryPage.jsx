import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const HistoryPage = () => {
  return (
    <Box className="p-3 h-full pointer-events-none">
      <Card className="bg-slate-800/95 backdrop-blur-xl border border-white/10 mb-3 pointer-events-auto">
        <CardContent className="p-3">
          <Typography variant="h4" className="text-white mb-2 font-bold">
            Historial
          </Typography>
          <Typography variant="body1" className="text-slate-400">
            Registro histórico de actividades del sistema
          </Typography>
        </CardContent>
      </Card>
      
      {/* Aquí irá el contenido específico de la página */}
      <Card className="bg-slate-800/95 backdrop-blur-xl border border-white/10 h-[calc(100%-120px)] pointer-events-auto">
        <CardContent className="p-3 h-full">
          <Typography variant="body2" className="text-slate-400">
            Contenido del historial de actividades...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HistoryPage;