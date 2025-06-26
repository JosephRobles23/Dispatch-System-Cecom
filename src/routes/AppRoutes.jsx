import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MapPage from '../pages/Map/MapPage';
import IncidentsPage from '../pages/Incidents/IncidentsPage';
import TeamsPage from '../pages/Teams/TeamsPage';
import AgentsPage from '../pages/Teams/AgentsPage';
import HistoryPage from '../pages/History/HistoryPage';
import ReportsPage from '../pages/Reports/ReportsPage';
import SettingsPage from '../pages/Settings/SettingsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/map" replace />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/incidents" element={<IncidentsPage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/agents" element={<AgentsPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default AppRoutes;