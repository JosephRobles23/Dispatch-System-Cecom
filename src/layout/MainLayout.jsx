import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import SubSidebar from './SubSidebar';

const MainLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('map');
  const [subSidebarOpen, setSubSidebarOpen] = useState(true);
  const location = useLocation();

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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar 
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <SubSidebar 
          open={subSidebarOpen}
          onToggle={() => setSubSidebarOpen(!subSidebarOpen)}
          activeSection={activeSection}
        />
        <Box 
          component="main" 
          sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            overflow: 'hidden',
            bgcolor: 'background.default'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;