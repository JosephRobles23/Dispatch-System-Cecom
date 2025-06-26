import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Avatar, Divider } from '@mui/material';

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
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
        {mockTeams.length} equipos registrados
      </Typography>
      
      <List sx={{ p: 0 }}>
        {mockTeams.map((team, index) => (
          <React.Fragment key={team.id}>
            <ListItem 
              sx={{ 
                px: 0,
                py: 2,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' }
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 32, height: 32 }}>
                {team.name.substring(0, 2)}
              </Avatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      {team.name} - {team.type}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {team.agent}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Chip 
                        label={team.status} 
                        size="small" 
                        color={getStatusColor(team.status)}
                        sx={{ fontSize: '0.75rem', height: 24 }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      📍 {team.location}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockTeams.length - 1 && (
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default TeamsList;