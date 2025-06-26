import React from 'react';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import IncidentsList from '../components/Incidents/IncidentsList';
import TeamsList from '../components/Teams/TeamsList';
import AlertsList from '../components/General/AlertsList';
import AgentsList from '../components/Teams/AgentsList';
import ReportsPanel from '../components/General/ReportsPanel';
import SettingsPanel from '../components/General/SettingsPanel';

const SubSidebar = ({ open, onToggle, activeSection }) => {
  const { colors } = useTheme();
  
  const getSubSidebarContent = () => {
    switch (activeSection) {
      case 'map':
      case 'incidents':
        return <IncidentsList />;
      case 'teams':
        return <TeamsList />;
      case 'agents':
        return <AgentsList />;
      case 'reports':
        return <ReportsPanel />;
      case 'settings':
        return <SettingsPanel />;
      case 'alerts':
        return <AlertsList />;
      default:
        return <IncidentsList />;
    }
  };

  const getSidebarTitle = () => {
    const titles = {
      map: 'Incidencias Activas',
      incidents: 'Historial',
      teams: 'Equipos en Servicio',
      agents: 'Agentes Disponibles',
      reports: 'Panel de Reportes',
      settings: 'Configuraciones',
      alerts: 'Alertas del Sistema',
    };
    return titles[activeSection] || 'Panel';
  };

  // Para reports section, el SubSidebar está siempre cerrado
  const isReportsPage = activeSection === 'reports';
  const isActuallyOpen = open && !isReportsPage;

  return (
    <Box className={`${isActuallyOpen ? `w-80 ${colors.background.secondary} ${colors.border.primary} border-r` : 'w-0'} overflow-hidden flex flex-col transition-all duration-300`}>
      {isActuallyOpen && (
        <>
          <Box className="flex items-center justify-between p-2">
            <Typography variant="h6" className={`${colors.primary} font-semibold text-base`}>
              {getSidebarTitle()}
            </Typography>
            <IconButton onClick={onToggle} className={`${colors.secondary} ${colors.hover.primary}`}>
              <ChevronLeft size={20} />
            </IconButton>
          </Box>
          
          <Divider className={colors.border.primary} />
          
          <Box className="flex-1 overflow-auto">
            {getSubSidebarContent()}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SubSidebar;