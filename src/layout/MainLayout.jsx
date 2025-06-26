import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';
import SubSidebar from './SubSidebar';
import MapContainer from '../components/Map/MapContainer';

const MainLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('map');
  const [subSidebarOpen, setSubSidebarOpen] = useState(true);
  const location = useLocation();
  const { colors } = useTheme();

  // Update active section based on current route
  useEffect(() => {
    const pathToSection = {
      '/map': 'map',
      '/incidents': 'incidents',
      '/teams': 'teams',
      '/agents': 'agents',
      '/reports': 'reports',
      '/settings': 'settings',
      '/alerts': 'alerts',
    };
    
    const currentSection = pathToSection[location.pathname] || 'map';
    setActiveSection(currentSection);
    
    // Hide SubSidebar for reports section
    if (currentSection === 'reports') {
      setSubSidebarOpen(false);
    } else {
      setSubSidebarOpen(true);
    }
  }, [location.pathname]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'reports') {
      setSubSidebarOpen(false);
    } else {
      setSubSidebarOpen(true);
    }
  };

  // Determinar si debemos mostrar el mapa de fondo
  const isReportsPage = activeSection === 'reports';

  // Configuración de grid dinámico
  const getGridTemplate = () => {
    const sidebarWidth = sidebarCollapsed ? '80px' : '260px';
    // El SubSidebar siempre está presente pero puede estar cerrado (0px)
    const subSidebarWidth = subSidebarOpen ? '320px' : '0px';
    return `${sidebarWidth} ${subSidebarWidth} 1fr`;
  };

  return (
    <Box className="h-screen" style={{ display: 'grid', gridTemplateRows: 'auto 1fr' }}>
      {/* Header */}
      <Header />
      
      {/* Grid Layout Container */}
      <Box 
        className="relative overflow-hidden"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: getGridTemplate(),
          transition: 'grid-template-columns 300ms ease-in-out'
        }}
      >
        {/* Sidebar */}
        <Sidebar 
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        
        {/* SubSidebar - Siempre presente en el grid */}
        <SubSidebar 
          open={subSidebarOpen}
          onToggle={() => setSubSidebarOpen(!subSidebarOpen)}
          activeSection={activeSection}
        />
        
        {/* Main Container con Mapa */}
        <Box 
          component="main" 
          className={`relative ${isReportsPage ? `overflow-auto ${colors.background.primary}` : 'overflow-hidden'}`}
        >
          {/* Mapa de fondo para todas las páginas excepto reportes */}
          {!isReportsPage && (
            <Box className="relative inset-0 z-0 w-100% h-full">
              <MapContainer />
            </Box>
          )}
          
          {/* Contenido de la página */}
          <Box className="relative z-10 h-full pointer-events-auto">
            {children}
          </Box>

          {/* Botón flotante para controlar Sidebar (expandir/contraer) */}
          {!subSidebarOpen && (
            <Box 
              className="fixed left-2 top-1/2 -translate-y-1/2 z-50"
              style={{ left: sidebarCollapsed ? '96px' : '276px' }}
            >
              <IconButton 
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className={`${colors.background.secondary} ${colors.secondary} ${colors.border.primary} border ${colors.hover.primary}`}
              >
                {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;