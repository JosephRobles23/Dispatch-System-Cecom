import React from 'react';
import { Box, List, ListItem, ListItemText, Switch, Typography, Divider } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const SettingsPanel = () => {
  const { colors } = useTheme();
  
  const settings = [
    { id: 1, title: 'Notificaciones Push', description: 'Recibir alertas en tiempo real', enabled: true },
    { id: 2, title: 'Modo Oscuro', description: 'Tema oscuro del sistema', enabled: true },
    { id: 3, title: 'Sonidos de Alerta', description: 'Reproducir sonidos para incidencias', enabled: false },
    { id: 4, title: 'Auto-refresh', description: 'Actualización automática del mapa', enabled: true },
  ];

  return (
    <Box className="p-2">
      <Typography variant="subtitle2" className={`${colors.secondary} mb-2`}>
        Configuraciones del sistema
      </Typography>
      
      <List className="p-0">
        {settings.map((setting, index) => (
          <React.Fragment key={setting.id}>
            <ListItem className="px-0 py-2">
              <ListItemText
                primary={
                  <Typography variant="body2" className={`${colors.primary} font-medium`}>
                    {setting.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" className={colors.secondary}>
                    {setting.description}
                  </Typography>
                }
              />
              <Switch checked={setting.enabled} size="small" />
            </ListItem>
            {index < settings.length - 1 && (
              <Divider className={colors.border.primary} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SettingsPanel;