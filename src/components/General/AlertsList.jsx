import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Divider } from '@mui/material';

const mockAlerts = [
  { id: 1, title: 'Sistema de comunicación inestable', type: 'warning', time: '10 min ago' },
  { id: 2, title: 'Patrulla 02 sin reportar', type: 'error', time: '25 min ago' },
  { id: 3, title: 'Mantenimiento programado', type: 'info', time: '1 hour ago' },
  { id: 4, title: 'Actualización completada', type: 'success', time: '2 hours ago' },
];

const getAlertColor = (type) => {
  switch (type) {
    case 'error': return 'error';
    case 'warning': return 'warning';
    case 'info': return 'info';
    case 'success': return 'success';
    default: return 'default';
  }
};

const AlertsList = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
        {mockAlerts.length} alertas del sistema
      </Typography>
      
      <List sx={{ p: 0 }}>
        {mockAlerts.map((alert, index) => (
          <React.Fragment key={alert.id}>
            <ListItem 
              sx={{ 
                px: 0,
                py: 2,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' }
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      {alert.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Chip 
                        label={alert.type.toUpperCase()} 
                        size="small" 
                        color={getAlertColor(alert.type)}
                        sx={{ fontSize: '0.75rem', height: 24 }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {alert.time}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockAlerts.length - 1 && (
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default AlertsList;