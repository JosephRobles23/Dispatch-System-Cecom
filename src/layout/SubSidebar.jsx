import React from 'react';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IncidentsList from '../components/Incidents/IncidentsList';
import TeamsList from '../components/Teams/TeamsList';
import AlertsList from '../components/General/AlertsList';
import AgentsList from '../components/Teams/AgentsList';
import ReportsPanel from '../components/General/ReportsPanel';
import SettingsPanel from '../components/General/SettingsPanel';

const SubSidebar = ({ open, onToggle, activeSection }) => {
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

  // Don't show SubSidebar for reports section
  if (activeSection === 'reports') {
    return null;
  }

  return (
    <Box
      sx={{
        width: open ? 320 : 0,
        bgcolor: 'background.paper',
        borderRight: open ? '1px solid rgba(255,255,255,0.1)' : 'none',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {open && (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1rem' }}>
              {getSidebarTitle()}
            </Typography>
            <IconButton onClick={onToggle} sx={{ color: 'text.secondary' }}>
              <ChevronLeft size={20} />
            </IconButton>
          </Box>
          
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            {getSubSidebarContent()}
          </Box>
        </>
      )}
      
      {!open && (
        <Box sx={{ position: 'absolute', left: -40, top: '50%', transform: 'translateY(-50%)' }}>
          <IconButton 
            onClick={onToggle} 
            sx={{ 
              bgcolor: 'background.paper', 
              color: 'text.secondary',
              border: '1px solid rgba(255,255,255,0.1)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
            }}
          >
            <ChevronRight size={20} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default SubSidebar;