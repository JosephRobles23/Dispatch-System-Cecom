import React from 'react';
import { Box, List, ListItem, ListItemText, Switch, Typography, Divider } from '@mui/material';

const SettingsPanel = () => {
  const settings = [
    { id: 1, title: 'Notificaciones Push', description: 'Recibir alertas en tiempo real', enabled: true },
    { id: 2, title: 'Modo Oscuro', description: 'Tema oscuro del sistema', enabled: true },
    { id: 3, title: 'Sonidos de Alerta', description: 'Reproducir sonidos para incidencias', enabled: false },
    { id: 4, title: 'Auto-refresh', description: 'Actualización automática del mapa', enabled: true },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
        Configuraciones del sistema
      </Typography>
      
      <List sx={{ p: 0 }}>
        {settings.map((setting, index) => (
          <React.Fragment key={setting.id}>
            <ListItem sx={{ px: 0, py: 2 }}>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                    {setting.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {setting.description}
                  </Typography>
                }
              />
              <Switch checked={setting.enabled} size="small" />
            </ListItem>
            {index < settings.length - 1 && (
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SettingsPanel;