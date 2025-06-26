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
    <Box sx={{ p: 3, bgcolor: 'background.default', minHeight: '100vh' }}>
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
                95%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Tasa de Resolución
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
                  <Clock size={20} color="white" />
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
                8.5
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                Tiempo Promedio (min)
              </Typography>
              <Typography variant="caption" sx={{ color: 'error.main' }}>
                +0.8 min vs semana anterior
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Response Time Distribution */}
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'background.paper', height: '400px' }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  bgcolor: 'info.main', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AlertTriangle size={16} color="white" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
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
                Distribución por Prioridad
              </Typography>
              
              <Box sx={{ height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={responseTimeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {responseTimeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              
              <Box sx={{ mt: 2 }}>
                {responseTimeData.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ 
                      width: 12, 
                      height: 12, 
                      bgcolor: item.color, 
                      borderRadius: '50%', 
                      mr: 1 
                    }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', mr: 1 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                      {item.value}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Products Overview */}
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'primary.main', height: '400px', color: 'white' }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={16} color="white" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Esta Semana
                  </Typography>
                  <FormControl size="small" sx={{ ml: 1 }}>
                    <Select 
                      value="week" 
                      sx={{ 
                        fontSize: '0.75rem', 
                        color: 'rgba(255,255,255,0.8)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255,255,255,0.3)'
                        }
                      }}
                    >
                      <MenuItem value="week">Esta Semana</MenuItem>
                      <MenuItem value="month">Este Mes</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Total Equipos
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    18
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    En Servicio
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    15
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    83%
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Patrulleros
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    12/15
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Motorizados
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    3/3
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Mantenimiento
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    3
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Abandoned Cart */}
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'background.paper', height: '400px' }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  bgcolor: 'warning.main', 
                  borderRadius: 2, 
                  p: 1, 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <XCircle size={16} color="white" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
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
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Incidencias Sin Resolver
                  </Typography>
                  <Typography variant="h3" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                    6
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'warning.main' }}>
                    +2 desde ayer
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Agentes Disponibles
                  </Typography>
                  <Typography variant="h3" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                    8
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ color: 'text.primary', mb: 2 }}>
                  Distribución por Sector
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Sector A
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                      2
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', height: 4, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                    <Box sx={{ width: '33%', height: '100%', bgcolor: 'error.main', borderRadius: 2 }} />
                  </Box>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Sector B
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                      3
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', height: 4, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                    <Box sx={{ width: '50%', height: '100%', bgcolor: 'warning.main', borderRadius: 2 }} />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Sector C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                      1
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', height: 4, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                    <Box sx={{ width: '17%', height: '100%', bgcolor: 'info.main', borderRadius: 2 }} />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid container spacing={3}>
        {/* Weekly Summary Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ bgcolor: 'background.paper' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                    Resumen Semanal
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: 12, height: 12, bgcolor: 'primary.main', borderRadius: '50%', mr: 1 }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Incidencias
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: 12, height: 12, bgcolor: 'success.main', borderRadius: '50%', mr: 1 }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Resueltas
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <FormControl size="small">
                  <Select value="7days" sx={{ color: 'text.secondary' }}>
                    <MenuItem value="7days">Últimos 7 días</MenuItem>
                    <MenuItem value="30days">Últimos 30 días</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <Bar dataKey="incidents" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="resolved" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Incidents */}
        <Grid item xs={12} md={4}>
          <Card sx={{ bgcolor: 'background.paper' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', mb: 3 }}>
                Incidencias Recientes
              </Typography>
              
              <Box sx={{ maxHeight: 350, overflow: 'auto' }}>
                {recentIncidents.map((incident, index) => (
                  <Box key={incident.id} sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    py: 2,
                    borderBottom: index < recentIncidents.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                  }}>
                    <Avatar sx={{ 
                      bgcolor: getPriorityColor(incident.priority), 
                      width: 32, 
                      height: 32, 
                      mr: 2,
                      fontSize: '0.75rem'
                    }}>
                      {incident.type.substring(0, 2)}
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body2" sx={{ 
                        color: 'text.primary', 
                        fontWeight: 500,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {incident.type}
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        color: 'text.secondary',
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {incident.location}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <Chip 
                          label={incident.status} 
                          size="small" 
                          color={getStatusColor(incident.status)}
                          sx={{ fontSize: '0.7rem', height: 20 }}
                        />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {incident.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;