import React from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Select, 
  MenuItem, 
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  IconButton
} from '@mui/material';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  MoreVertical
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const ReportsPage = () => {
  // Mock data for charts
  const weeklyData = [
    { day: 'Lun 10', incidents: 15, resolved: 12, pending: 3 },
    { day: 'Mar 11', incidents: 8, resolved: 6, pending: 2 },
    { day: 'Mié 12', incidents: 22, resolved: 18, pending: 4 },
    { day: 'Jue 13', incidents: 12, resolved: 10, pending: 2 },
    { day: 'Vie 14', incidents: 28, resolved: 24, pending: 4 },
    { day: 'Sáb 15', incidents: 18, resolved: 15, pending: 3 },
    { day: 'Dom 16', incidents: 25, resolved: 22, pending: 3 },
  ];

  const responseTimeData = [
    { name: 'Crítico', value: 35, color: '#ef4444' },
    { name: 'Alto', value: 45, color: '#f59e0b' },
    { name: 'Medio', value: 25, color: '#3b82f6' },
    { name: 'Bajo', value: 15, color: '#10b981' },
  ];

  const recentIncidents = [
    { id: 1, type: 'Robo', location: 'Av. Javier Prado 1250', time: '14:30', status: 'Resuelto', agent: 'Carlos M.', priority: 'high' },
    { id: 2, type: 'Accidente', location: 'Jr. Los Olivos 450', time: '13:45', status: 'En curso', agent: 'Ana G.', priority: 'medium' },
    { id: 3, type: 'Disturbios', location: 'Plaza San Martín', time: '12:20', status: 'Pendiente', agent: 'Luis T.', priority: 'high' },
    { id: 4, type: 'Ruidos', location: 'Calle Las Flores 123', time: '11:15', status: 'Resuelto', agent: 'María L.', priority: 'low' },
    { id: 5, type: 'Vandalismo', location: 'Parque Central', time: '10:30', status: 'En curso', agent: 'Pedro R.', priority: 'medium' },
    { id: 6, type: 'Robo', location: 'Av. Universitaria 890', time: '09:45', status: 'Resuelto', agent: 'Carmen S.', priority: 'high' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resuelto': return 'success';
      case 'En curso': return 'warning';
      case 'Pendiente': return 'error';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <Box sx={{ 
      p: 3, 
      bgcolor: 'background.default',
      minHeight: '100vh',
      overflowY: 'auto'
    }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 1 }}>
          Reportes y Estadísticas
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Dashboard de métricas y análisis del sistema de despacho
        </Typography>
      </Box>

      {/* Top Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'primary.main', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={20} color="white" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Esta Semana
                  </Typography>
                  <FormControl size="small" sx={{ ml: 1 }}>
                    <Select value="week" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      <MenuItem value="week">Esta Semana</MenuItem>
                      <MenuItem value="month">Este Mes</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 1 }}>
                128
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Incidencias
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main' }}>
                +12.5% vs semana anterior
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'success.main', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={20} color="white" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Esta Semana
                  </Typography>
                  <FormControl size="small" sx={{ ml: 1 }}>
                    <Select value="week" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      <MenuItem value="week">Esta Semana</MenuItem>
                      <MenuItem value="month">Este Mes</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 1 }}>
                24
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Agentes Activos
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main' }}>
                +8.3% disponibilidad
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'warning.main', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={20} color="white" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Esta Semana
                  </Typography>
                  <FormControl size="small" sx={{ ml: 1 }}>
                    <Select value="week" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      <MenuItem value="week">Esta Semana</MenuItem>
                      <MenuItem value="month">Este Mes</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 1 }}>
                96%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Eficiencia
              </Typography>
              <Typography variant="caption" sx={{ color: 'success.main' }}>
                +2.1% vs semana anterior
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  bgcolor: 'error.main', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AlertTriangle size={20} color="white" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Esta Semana
                  </Typography>
                  <FormControl size="small" sx={{ ml: 1 }}>
                    <Select value="week" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      <MenuItem value="week">Esta Semana</MenuItem>
                      <MenuItem value="month">Este Mes</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 1 }}>
                8 min
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Tiempo Respuesta
              </Typography>
              <Typography variant="caption" sx={{ color: 'error.main' }}>
                +0.5 min vs semana anterior
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ bgcolor: 'background.paper', height: 400 }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 3 }}>
                Incidencias por Día
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="incidents" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="resolved" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'background.paper', height: 400 }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 3 }}>
                Tiempo de Respuesta por Prioridad
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={responseTimeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {responseTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Incidents Table */}
      <Card sx={{ bgcolor: 'background.paper' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 3 }}>
            Incidencias Recientes
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Tipo</TableCell>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Ubicación</TableCell>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Hora</TableCell>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Estado</TableCell>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Agente</TableCell>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Prioridad</TableCell>
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentIncidents.map((incident) => (
                  <TableRow key={incident.id} sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                    <TableCell sx={{ color: 'text.primary' }}>{incident.type}</TableCell>
                    <TableCell sx={{ color: 'text.primary' }}>{incident.location}</TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{incident.time}</TableCell>
                    <TableCell>
                      <Chip 
                        label={incident.status} 
                        color={getStatusColor(incident.status)}
                        size="small"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: 'text.primary' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main', fontSize: '0.7rem' }}>
                          {incident.agent.charAt(0)}
                        </Avatar>
                        {incident.agent}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        bgcolor: getPriorityColor(incident.priority) 
                      }} />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" sx={{ color: 'text.secondary' }}>
                        <MoreVertical size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Additional spacing for scroll */}
      <Box sx={{ height: 100 }} />
    </Box>
  );
};

export default ReportsPage;