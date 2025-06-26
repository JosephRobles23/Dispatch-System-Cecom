import React from 'react';
import { Box, Fab } from '@mui/material';
import { Plus, UserPlus } from 'lucide-react';
import MapContainer from '../../components/Map/MapContainer';

const MapPage = () => {
  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      <MapContainer />
      
      {/* Action Buttons */}
      <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 2, zIndex: 1000 }}>
        <Fab 
          color="primary" 
          size="medium"
          sx={{ 
            bgcolor: 'secondary.main',
            '&:hover': { bgcolor: 'secondary.dark' }
          }}
        >
          <Plus size={20} />
        </Fab>
        <Fab 
          color="primary" 
          size="medium"
          sx={{ 
            bgcolor: 'warning.main',
            color: 'black',
            '&:hover': { bgcolor: 'warning.dark' }
          }}
        >
          <UserPlus size={20} />
        </Fab>
      </Box>
    </Box>
  );
};

export default MapPage;