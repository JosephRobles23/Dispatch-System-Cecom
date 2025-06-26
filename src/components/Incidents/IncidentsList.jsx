import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Divider } from '@mui/material';

const mockIncidents = [
  { id: 1, title: 'Robo en Av. Javier Prado', status: 'En curso', priority: 'high', time: '14:30' },
  { id: 2, title: 'Accidente vehicular', status: 'Atendido', priority: 'medium', time: '13:45' },
  { id: 3, title: 'Disturbios públicos', status: 'Pendiente', priority: 'high', time: '12:20' },
  { id: 4, title: 'Ruidos molestos', status: 'Pendiente', priority: 'low', time: '11:15' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'En curso': return 'warning';
    case 'Atendido': return 'success';
    case 'Pendiente': return 'error';
    default: return 'default';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high': return 'error';
    case 'medium': return 'warning';
    case 'low': return 'info';
    default: return 'default';
  }
};

const IncidentsList = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
        {mockIncidents.length} incidencias activas
      </Typography>
      
      <List sx={{ p: 0 }}>
        {mockIncidents.map((incident, index) => (
          <React.Fragment key={incident.id}>
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
                      {incident.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Chip 
                        label={incident.status} 
                        size="small" 
                        color={getStatusColor(incident.status)}
                        sx={{ fontSize: '0.75rem', height: 24 }}
                      />
                      <Chip 
                        label={incident.priority.toUpperCase()} 
                        size="small" 
                        variant="outlined"
                        color={getPriorityColor(incident.priority)}
                        sx={{ fontSize: '0.75rem', height: 24 }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {incident.time}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockIncidents.length - 1 && (
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default IncidentsList;