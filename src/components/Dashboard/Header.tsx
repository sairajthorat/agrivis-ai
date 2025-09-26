import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Cloud, 
  Thermometer, 
  Droplets, 
  User, 
  Settings, 
  Bell,
  MapPin,
  Clock
} from 'lucide-react';

const Header = () => {
  const currentTime = new Date().toLocaleString();
  
  return (
    <motion.header 
      className="agri-card flex items-center justify-between px-6 py-4 border-b border-border"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <motion.div
          className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Leaf className="h-8 w-8 text-white" />
        </motion.div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            AgriVision AI
          </h1>
          <p className="text-sm text-muted-foreground">Advanced Farm Management</p>
        </div>
      </div>

      {/* Weather Strip */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4 px-4 py-2 agri-card">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium">Agra</span>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-red-400" />
            <span className="text-sm">24°C</span>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-blue-400" />
            <span className="text-sm">68%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Cloud className="h-4 w-4 text-gray-400" />
            <span className="text-sm">Sunny</span>
          </div>
        </div>

        {/* Current Time */}
        <div className="flex items-center space-x-2 px-4 py-2 agri-card">
          <Clock className="h-4 w-4 text-amber-400" />
          <span className="text-sm font-mono">{currentTime}</span>
        </div>
      </div>

      {/* User Profile and Actions */}
      <div className="flex items-center space-x-4">
        <motion.button
          className="p-2 rounded-lg hover:bg-secondary transition-colors relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full pulse-glow"></span>
        </motion.button>
        
        <motion.button
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings className="h-5 w-5" />
        </motion.button>

        <div className="flex items-center space-x-3 px-4 py-2 agri-card">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">Ramesh Yadav</p>
            <p className="text-xs text-muted-foreground">Farm Manager</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;