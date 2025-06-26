import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
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
  const { colors } = useTheme();

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
      className={`${collapsed ? 'w-20' : 'w-100%'} ${colors.background.secondary} ${colors.border.primary} border-r flex flex-col overflow-hidden`}
    >
      {/* <Box className={`${collapsed ? 'justify-center' : 'justify-end'} flex  p-1`}>
        <IconButton onClick={onToggle} className="text-slate-400">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </IconButton>
      </Box> */}
      
      <Divider className={colors.border.primary} />
      
      <List className="flex-1 px-1">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentActiveSection === item.id;
          
          return (
            <ListItem 
              key={item.id} 
              disablePadding 
              className="block mb-1"
            >
              <ListItemButton
                onClick={() => handleItemClick(item)}
                className={`min-h-12 px-2.5 rounded-lg transition-colors ${
                  collapsed ? 'justify-center' : 'justify-start'
                } ${
                  isActive 
                    ? `${colors.button.primary} ${colors.primary}` 
                    : `bg-transparent ${colors.primary} ${colors.hover.primary}`
                }`}
              >
                <ListItemIcon
                  className={`min-w-0 ${collapsed ? 'mr-0' : 'mr-3'} justify-center text-inherit`}
                >
                  <IconComponent size={20} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  className={`${collapsed ? 'opacity-0' : 'opacity-100'}`}
                  sx={{ 
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