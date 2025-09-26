import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  Layers, 
  MapPin, 
  Zap, 
  CloudRain,
  Sun,
  Wind,
  Gauge
} from 'lucide-react';
import { mockWeatherData, mockSoilData } from '../../data/mockData';

const SatelliteView = () => {
  const [activeLayer, setActiveLayer] = useState<'ndvi' | 'soil' | 'weather'>('ndvi');
  const todayWeather = mockWeatherData[0];
  const avgSoilData = mockSoilData[0];

  const layers = [
    { id: 'ndvi', label: 'NDVI', icon: Layers, color: '#10b981' },
    { id: 'soil', label: 'Soil Health', icon: Gauge, color: '#f59e0b' },
    { id: 'weather', label: 'Weather', icon: CloudRain, color: '#3b82f6' }
  ];

  const ndviData = [
    { zone: 'North Field', value: 0.82, status: 'Excellent', color: '#22c55e' },
    { zone: 'Central Field', value: 0.75, status: 'Good', color: '#84cc16' },
    { zone: 'South Field', value: 0.68, status: 'Moderate', color: '#eab308' },
    { zone: 'West Field', value: 0.59, status: 'Poor', color: '#f97316' }
  ];

  const renderLayerContent = () => {
    switch (activeLayer) {
      case 'ndvi':
        return (
          <div className="space-y-4">
            <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <h4 className="text-lg font-bold text-green-400 mb-2">NDVI Analysis</h4>
              <p className="text-sm text-muted-foreground">Vegetation Health Index</p>
            </div>
            {ndviData.map((zone, index) => (
              <motion.div
                key={zone.zone}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: zone.color }}
                  />
                  <span className="text-sm font-medium">{zone.zone}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold" style={{ color: zone.color }}>
                    {zone.value.toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">{zone.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'soil':
        return (
          <div className="space-y-4">
            <div className="text-center p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-lg font-bold text-amber-400 mb-2">Soil Parameters</h4>
              <p className="text-sm text-muted-foreground">Real-time Sensor Data</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">pH Level</p>
                <p className="text-lg font-bold text-amber-400">{avgSoilData.ph}</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">Moisture</p>
                <p className="text-lg font-bold text-blue-400">{avgSoilData.moisture}%</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">Nitrogen</p>
                <p className="text-lg font-bold text-green-400">{avgSoilData.nitrogen} ppm</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">Temperature</p>
                <p className="text-lg font-bold text-red-400">{avgSoilData.temperature}°C</p>
              </div>
            </div>
          </div>
        );
      
      case 'weather':
        return (
          <div className="space-y-4">
            <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Current Weather</h4>
              <div className="text-3xl mb-2">{todayWeather.icon}</div>
              <p className="text-sm text-muted-foreground">{todayWeather.condition}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs text-muted-foreground">Temperature</span>
                </div>
                <p className="text-lg font-bold text-yellow-400">{todayWeather.temperature}°C</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center space-x-2">
                  <CloudRain className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-muted-foreground">Humidity</span>
                </div>
                <p className="text-lg font-bold text-blue-400">{todayWeather.humidity}%</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center space-x-2">
                  <Wind className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-muted-foreground">Wind Speed</span>
                </div>
                <p className="text-lg font-bold text-gray-400">{todayWeather.windSpeed} km/h</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center space-x-2">
                  <Gauge className="h-4 w-4 text-purple-400" />
                  <span className="text-xs text-muted-foreground">Pressure</span>
                </div>
                <p className="text-lg font-bold text-purple-400">{todayWeather.pressure} hPa</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      className="agri-card-glow p-6"
      style={{ gridArea: 'satellite' }}
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Field Intelligence</h3>
        <Satellite className="h-5 w-5 text-blue-400" />
      </div>

      {/* Layer Selector */}
      <div className="flex bg-secondary rounded-lg p-1 mb-6">
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(layer.id as any)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all flex-1 justify-center ${
              activeLayer === layer.id
                ? 'text-white shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            style={{
              backgroundColor: activeLayer === layer.id ? layer.color : 'transparent'
            }}
          >
            <layer.icon className="h-4 w-4" />
            <span>{layer.label}</span>
          </button>
        ))}
      </div>

      {/* Satellite Map Placeholder */}
      <motion.div
        className="h-48 rounded-xl bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-secondary mb-6 relative overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Map overlay pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Yadav Farm</p>
            <p className="text-xs text-muted-foreground">137.5 Acres</p>
          </div>
        </div>
        
        {/* Animated radar sweep */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent 270deg, ${layers.find(l => l.id === activeLayer)?.color}20 360deg)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Field markers */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full pulse-glow" />
        <div className="absolute top-8 right-6 w-2 h-2 bg-yellow-400 rounded-full pulse-glow" />
        <div className="absolute bottom-6 left-8 w-2 h-2 bg-blue-400 rounded-full pulse-glow" />
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-400 rounded-full pulse-glow" />
      </motion.div>

      {/* Layer Content */}
      <motion.div
        key={activeLayer}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {renderLayerContent()}
      </motion.div>
    </motion.div>
  );
};

export default SatelliteView;