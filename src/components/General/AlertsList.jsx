import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Divider } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

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
  const { colors } = useTheme();

  return (
    <Box className="p-2">
      <Typography variant="subtitle2" className={`${colors.secondary} mb-2`}>
        {mockAlerts.length} alertas del sistema
      </Typography>
      
      <List className="p-0">
        {mockAlerts.map((alert, index) => (
          <React.Fragment key={alert.id}>
            <ListItem className={`px-0 py-2 cursor-pointer ${colors.hover.primary}`}>
              <ListItemText
                primary={
                  <Box className="flex flex-col gap-1">
                    <Typography variant="body2" className={`${colors.primary} font-medium`}>
                      {alert.title}
                    </Typography>
                    <Box className="flex gap-1 items-center">
                      <Chip 
                        label={alert.type.toUpperCase()} 
                        size="small" 
                        color={getAlertColor(alert.type)}
                        className="text-xs h-6"
                      />
                    </Box>
                    <Typography variant="caption" className={colors.secondary}>
                      {alert.time}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockAlerts.length - 1 && (
              <Divider className={colors.border.primary} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default AlertsList;