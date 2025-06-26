import React from 'react';
import { Box, List, ListItem, ListItemText, Chip, Typography, Avatar, Divider } from '@mui/material';

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
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
        {mockAgents.length} agentes registrados
      </Typography>
      
      <List sx={{ p: 0 }}>
        {mockAgents.map((agent, index) => (
          <React.Fragment key={agent.id}>
            <ListItem 
              sx={{ 
                px: 0,
                py: 2,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' }
              }}
            >
              <Avatar sx={{ bgcolor: 'secondary.main', mr: 2, width: 32, height: 32 }}>
                {agent.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      {agent.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Placa #{agent.badge} • Turno {agent.shift}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Chip 
                        label={agent.status} 
                        size="small" 
                        color={getStatusColor(agent.status)}
                        sx={{ fontSize: '0.75rem', height: 24 }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      📍 Sector {agent.sector}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            {index < mockAgents.length - 1 && (
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default AgentsList;