import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import KPIDashboard from './KPIDashboard';
import CropPredictions from './CropPredictions';
import CropRanking from './CropRanking';
import DataVisualization from './DataVisualization';
import SatelliteView from './SatelliteView';
import AlertsPanel from './AlertsPanel';

const Dashboard = () => {
  return (
    <div className="dashboard-grid min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Dashboard Content */}
      <motion.main
        className="dashboard-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* KPI Cards */}
        <KPIDashboard />
        
        {/* AI Predictions Panel */}
        <CropPredictions />
        
        {/* Live Crop Ranking and Charts */}
        <div className="grid grid-rows-2 gap-4" style={{ gridArea: 'charts' }}>
          <CropRanking />
          <DataVisualization />
        </div>
        
        {/* Satellite & Weather */}
        <SatelliteView />
        
        {/* Alerts and Actions */}
        <AlertsPanel />
      </motion.main>
    </div>
  );
};

export default Dashboard;