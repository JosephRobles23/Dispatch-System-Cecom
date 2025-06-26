import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Avatar, Divider } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const mockTeams = [
  { id: 1, name: 'Patrulla 01', type: 'Patrullero', status: 'En servicio', agent: 'Carlos Mendoza', location: 'Sector A' },
  { id: 2, name: 'Moto 03', type: 'Motorizado', status: 'Disponible', agent: 'Ana García', location: 'Base Central' },
  { id: 3, name: 'Patrulla 02', type: 'Patrullero', status: 'En ruta', agent: 'Luis Torres', location: 'Sector B' },
  { id: 4, name: 'Moto 01', type: 'Motorizado', status: 'Mantenimiento', agent: 'María López', location: 'Taller' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'En servicio': return 'success';
    case 'Disponible': return 'info';
    case 'En ruta': return 'warning';
    case 'Mantenimiento': return 'error';
    default: return 'default';
  }
};

const TeamsList = () => {
  const { colors } = useTheme();

  return (
    <Box className="p-2">
      <Typography variant="subtitle2" className={`${colors.secondary} mb-2`}>
        {mockTeams.length} equipos registrados
      </Typography>
      
      <List className="p-0">
        {mockTeams.map((team, index) => (
          <React.Fragment key={team.id}>
            <ListItem className={`px-0 py-2 cursor-pointer ${colors.hover.primary}`}>
              <Avatar className="bg-blue-600 mr-2 w-8 h-8">
                {team.name.substring(0, 2)}
              </Avatar>
              <ListItemText
                primary={
                  <Box className="flex flex-col gap-1">
                    <Typography variant="body2" className={`${colors.primary} font-medium`}>
                      {team.name} - {team.type}
                    </Typography>
                    <Typography variant="caption" className={colors.secondary}>
                      {team.agent}
                    </Typography>
                    <Box className="flex gap-1 items-center">
                      <Chip 
                        label={team.status} 
                        size="small" 
                        color={getStatusColor(team.status)}
                        className="text-xs h-6"
                      />
                    </Box>
                    <Typography variant="caption" className={colors.secondary}>
                      📍 {team.location}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockTeams.length - 1 && (
              <Divider className={colors.border.primary} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default TeamsList;