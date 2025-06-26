import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  FileText, 
  Truck, 
  Users, 
  BarChart3, 
  Settings, 
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const sidebarItems = [
  { id: 'map', label: 'Mapa de Incidencias', icon: MapPin, path: '/map' },
  { id: 'incidents', label: 'Historial de Incidencias', icon: FileText, path: '/incidents' },
  { id: 'teams', label: 'Equipos en Ruta', icon: Truck, path: '/teams' },
  { id: 'agents', label: 'Gestión de Agentes', icon: Users, path: '/agents' },
  { id: 'reports', label: 'Reportes y Estadísticas', icon: BarChart3, path: '/reports' },
  { id: 'settings', label: 'Configuraciones', icon: Settings, path: '/settings' },
  { id: 'alerts', label: 'Alertas', icon: Bell, path: '/alerts' },
];

const Sidebar = ({ collapsed, onToggle, activeSection, onSectionChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (item) => {
    onSectionChange(item.id);
    navigate(item.path);
  };

  const getActiveSection = () => {
    const currentPath = location.pathname;
    const activeItem = sidebarItems.find(item => item.path === currentPath);
    return activeItem ? activeItem.id : 'map';
  };

  const currentActiveSection = getActiveSection();

  return (
    <Box
      sx={{
        width: collapsed ? 64 : 280,
        bgcolor: 'background.paper',
        borderRight: '1px solid rgba(255,255,255,0.1)',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={onToggle} sx={{ color: 'text.secondary' }}>
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </IconButton>
      </Box>
      
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      
      <List sx={{ flex: 1, px: 1 }}>
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentActiveSection === item.id;
          
          return (
            <ListItem key={item.id} disablePadding sx={{ display: 'block', mb: 1 }}>
              <ListItemButton
                onClick={() => handleItemClick(item)}
                sx={{
                  minHeight: 48,
                  justifyContent: collapsed ? 'center' : 'initial',
                  px: 2.5,
                  borderRadius: 2,
                  bgcolor: isActive ? 'primary.main' : 'transparent',
                  color: isActive ? 'primary.contrastText' : 'text.primary',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.dark' : 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: collapsed ? 0 : 3,
                    justifyContent: 'center',
                    color: 'inherit',
                  }}
                >
                  <IconComponent size={20} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  sx={{ 
                    opacity: collapsed ? 0 : 1,
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400,
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;