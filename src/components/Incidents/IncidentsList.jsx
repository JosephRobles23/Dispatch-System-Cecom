import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Divider } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

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
  const { colors } = useTheme();

  return (
    <Box className="p-2">
      <Typography variant="subtitle2" className={`${colors.secondary} mb-2`}>
        {mockIncidents.length} incidencias activas
      </Typography>
      
      <List className="p-0">
        {mockIncidents.map((incident, index) => (
          <React.Fragment key={incident.id}>
            <ListItem className={`px-0 py-2 cursor-pointer ${colors.hover.primary}`}>
              <ListItemText
                primary={
                  <Box className="flex flex-col gap-1">
                    <Typography variant="body2" className={`${colors.primary} font-medium`}>
                      {incident.title}
                    </Typography>
                    <Box className="flex gap-1 items-center">
                      <Chip 
                        label={incident.status} 
                        size="small" 
                        color={getStatusColor(incident.status)}
                        className="text-xs h-6"
                      />
                      <Chip 
                        label={incident.priority.toUpperCase()} 
                        size="small" 
                        variant="outlined"
                        color={getPriorityColor(incident.priority)}
                        className="text-xs h-6"
                      />
                    </Box>
                    <Typography variant="caption" className={colors.secondary}>
                      {incident.time}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockIncidents.length - 1 && (
              <Divider className={colors.border.primary} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default IncidentsList;