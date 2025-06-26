import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Avatar, Divider } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const mockAgents = [
  { id: 1, name: 'Carlos Mendoza', badge: '001', status: 'En servicio', shift: 'Día', sector: 'A' },
  { id: 2, name: 'Ana García', badge: '002', status: 'Disponible', shift: 'Día', sector: 'B' },
  { id: 3, name: 'Luis Torres', badge: '003', status: 'En patrulla', shift: 'Día', sector: 'C' },
  { id: 4, name: 'María López', badge: '004', status: 'Descanso', shift: 'Noche', sector: 'A' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'En servicio': return 'success';
    case 'Disponible': return 'info';
    case 'En patrulla': return 'warning';
    case 'Descanso': return 'default';
    default: return 'default';
  }
};

const AgentsList = () => {
  const { colors } = useTheme();

  return (
    <Box className="p-2">
      <Typography variant="subtitle2" className={`${colors.secondary} mb-2`}>
        {mockAgents.length} agentes registrados
      </Typography>
      
      <List className="p-0">
        {mockAgents.map((agent, index) => (
          <React.Fragment key={agent.id}>
            <ListItem className={`px-0 py-2 cursor-pointer ${colors.hover.primary}`}>
              <Avatar className="bg-purple-600 mr-2 w-8 h-8">
                {agent.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <ListItemText
                primary={
                  <Box className="flex flex-col gap-1">
                    <Typography variant="body2" className={`${colors.primary} font-medium`}>
                      {agent.name}
                    </Typography>
                    <Typography variant="caption" className={colors.secondary}>
                      Placa #{agent.badge} • Turno {agent.shift}
                    </Typography>
                    <Box className="flex gap-1 items-center">
                      <Chip 
                        label={agent.status} 
                        size="small" 
                        color={getStatusColor(agent.status)}
                        className="text-xs h-6"
                      />
                    </Box>
                    <Typography variant="caption" className={colors.secondary}>
                      📍 Sector {agent.sector}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockAgents.length - 1 && (
              <Divider className={colors.border.primary} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default AgentsList;