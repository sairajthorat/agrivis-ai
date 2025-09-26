import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { BarChart3, TrendingUp, Droplets, Thermometer } from 'lucide-react';
import { mockHistoricalYield, mockEnvironmentalData } from '../../data/mockData';

const DataVisualization = () => {
  const [activeChart, setActiveChart] = useState<'yield' | 'environmental'>('yield');

  const chartTabs = [
    { id: 'yield', label: 'Yield Predictions', icon: BarChart3 },
    { id: 'environmental', label: 'Environmental Data', icon: TrendingUp }
  ];

  return (
    <motion.div
      className="agri-card-glow p-6"
      style={{ gridArea: 'charts' }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Chart Tabs */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Analytics Dashboard</h3>
        <div className="flex bg-secondary rounded-lg p-1">
          {chartTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveChart(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeChart === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-80 chart-animate">
        {activeChart === 'yield' ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockHistoricalYield}>
              <defs>
                <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9ca3af" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#9ca3af" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#predictedGradient)"
                name="Predicted Yield (tons/ha)"
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#actualGradient)"
                name="Actual Yield (tons/ha)"
              />
              <Line
                type="monotone"
                dataKey="year2023"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="2023 Comparison"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockEnvironmentalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                stroke="#9ca3af" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ fill: '#ef4444', r: 4 }}
                name="Temperature (°C)"
              />
              <Line
                type="monotone"
                dataKey="humidity"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 4 }}
                name="Humidity (%)"
              />
              <Line
                type="monotone"
                dataKey="soilMoisture"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 4 }}
                name="Soil Moisture (%)"
              />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Chart Insights */}
      <motion.div
        className="mt-6 grid grid-cols-3 gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
          <Thermometer className="h-5 w-5 text-red-400" />
          <div>
            <p className="text-sm font-medium">Avg Temp</p>
            <p className="text-lg font-bold text-red-400">24°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
          <Droplets className="h-5 w-5 text-blue-400" />
          <div>
            <p className="text-sm font-medium">Soil Moisture</p>
            <p className="text-lg font-bold text-blue-400">42%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
          <TrendingUp className="h-5 w-5 text-green-400" />
          <div>
            <p className="text-sm font-medium">Yield Trend</p>
            <p className="text-lg font-bold text-green-400">+12%</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DataVisualization;