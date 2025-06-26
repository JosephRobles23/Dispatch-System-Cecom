import React, { useEffect } from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import L from 'leaflet';
import { useTheme } from '../../contexts/ThemeContext';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample incident data
const incidents = [
  { id: 1, lat: -12.0464, lng: -77.0428, title: 'Robo en Av. Javier Prado', status: 'En curso', priority: 'high' },
  { id: 2, lat: -12.0564, lng: -77.0328, title: 'Accidente vehicular', status: 'Atendido', priority: 'medium' },
  { id: 3, lat: -12.0364, lng: -77.0528, title: 'Disturbios públicos', status: 'Pendiente', priority: 'high' },
];

const MapContainer = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Remover estilos previos si existen
    const existingStyle = document.getElementById('map-theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Crear estilos dinámicos basados en el tema
    const style = document.createElement('style');
    style.id = 'map-theme-styles';
    
    if (isDarkMode) {
      // Solo aplicar estilos personalizados para tema oscuro
      style.textContent = `
        .leaflet-container {
          background-color: #0f172a !important;
          width: 100% !important;
          height: 100% !important;
        }
        .leaflet-tile {
          filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
        }
        .leaflet-control-zoom {
          background-color: #1e293b !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        .leaflet-control-zoom a {
          background-color: #1e293b !important;
          color: #f1f5f9 !important;
          border: none !important;
        }
        .leaflet-control-zoom a:hover {
          background-color: #334155 !important;
        }
        .leaflet-popup-content-wrapper {
          background-color: #1e293b !important;
          color: #f1f5f9 !important;
          border-radius: 8px !important;
        }
        .leaflet-popup-tip {
          background-color: #1e293b !important;
        }
      `;
    } else {
      // Para tema claro: usar estilos por defecto de Leaflet, solo asegurar dimensiones
      style.textContent = `
        .leaflet-container {
          width: 100% !important;
          height: 100% !important;
        }
        .leaflet-tile {
          filter: none;
        }
      `;
    }
    
    document.head.appendChild(style);

    return () => {
      const styleToRemove = document.getElementById('map-theme-styles');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [isDarkMode]);

  // URLs de tiles según el tema
  const tileConfig = {
    // Usar tiles estándar de OpenStreetMap para ambos temas
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };

  return (
    <Box className="h-full w-full">
      <LeafletMapContainer
        center={[-12.0464, -77.0428]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        key={isDarkMode ? 'dark' : 'light'} // Force re-render on theme change
      >
        <TileLayer
          url={tileConfig.url}
          attribution={tileConfig.attribution}
        />
        
        {incidents.map((incident) => (
          <Marker key={incident.id} position={[incident.lat, incident.lng]}>
            <Popup>
              <div>
                <strong>{incident.title}</strong>
                <br />
                Estado: {incident.status}
                <br />
                Prioridad: {incident.priority}
              </div>
            </Popup>
          </Marker>
        ))}
      </LeafletMapContainer>
    </Box>
  );
};

export default MapContainer;